import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Simplified animated particles
function AnimatedParticles() {
  const particlesRef = useRef(null);

  const particles = useMemo(() => {
    const count = 150;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 10;
      
      // Futuristic color palette
      const colorChoice = Math.random();
      if (colorChoice > 0.6) {
        colors[i] = 0.2; colors[i + 1] = 0.8; colors[i + 2] = 1.0; // Cyan
      } else if (colorChoice > 0.3) {
        colors[i] = 1.0; colors[i + 1] = 0.3; colors[i + 2] = 0.8; // Magenta
      } else {
        colors[i] = 1.0; colors[i + 1] = 0.8; colors[i + 2] = 0.2; // Gold
      }
    }
    
    return { positions, colors, count };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        transparent
        opacity={0.7}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Floating geometric shapes
function FloatingShapes() {
  const groupRef = useRef(null);

  const shapes = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ] as [number, number, number],
      geometry: Math.floor(Math.random() * 3), // 0: box, 1: sphere, 2: octahedron
      color: i % 2 === 0 ? '#00ffff' : '#ff0080'
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      shapes.forEach((shape, i) => {
        const mesh = groupRef.current?.children[i] as THREE.Mesh;
        if (mesh) {
          mesh.rotation.x += 0.01 * (i % 2 === 0 ? 1 : -1);
          mesh.rotation.y += 0.008 * (i % 2 === 0 ? -1 : 1);
          mesh.position.y += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.002;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {shapes.map((shape) => (
        <mesh key={shape.id} position={shape.position} rotation={shape.rotation}>
          {shape.geometry === 0 && <boxGeometry args={[0.8, 0.8, 0.8]} />}
          {shape.geometry === 1 && <sphereGeometry args={[0.5, 16, 16]} />}
          {shape.geometry === 2 && <octahedronGeometry args={[0.6]} />}
          <meshBasicMaterial
            color={shape.color}
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

// Main 3D Scene component
function Scene({ scrollProgress }) {
  const cameraRef = useRef(null);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = 8 + scrollProgress * 2;
      cameraRef.current.position.y = scrollProgress * 1;
    }
  });

  return (
    <>
      <perspectiveCamera ref={cameraRef} position={[0, 0, 8]} fov={60} />
      
      {/* Enhanced lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-5, -5, -3]} color="#00ffff" intensity={0.3} />
      <pointLight position={[5, -5, -3]} color="#ff0080" intensity={0.3} />
      
      <AnimatedParticles />
      <FloatingShapes />
    </>
  );
}


export default function EnhancedThreeScene({ 
  className = "", 
  scrollProgress = 0 
) {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 8], fov: 60 }}>
        <Scene scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}