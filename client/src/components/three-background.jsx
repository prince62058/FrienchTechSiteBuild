import { useEffect, useRef } from "react";
import * as THREE from "three";


export default function ThreeBackground({ className = "" ) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.offsetWidth / containerRef.current.offsetHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;

      // Orange/Blue color scheme
      const colorChoice = Math.random();
      if (colorChoice > 0.5) {
        colors[i] = 1.0; // R
        colors[i + 1] = 0.6; // G
        colors[i + 2] = 0.2; // B (Orange)
      } else {
        colors[i] = 0.3; // R
        colors[i + 1] = 0.6; // G
        colors[i + 2] = 1.0; // B (Blue)
      }
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.SphereGeometry(0.3, 16, 16),
      new THREE.ConeGeometry(0.3, 0.6, 8),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x3b82f6, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0xf97316, 
        transparent: true, 
        opacity: 0.3,
        wireframe: true 
      }),
    ];

    const shapes: THREE.Mesh[] = [];
    for (let i = 0; i < 10; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const shape = new THREE.Mesh(geometry, material);
      
      shape.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      );
      
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      scene.add(shape);
      shapes.push(shape);
    }

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Rotate particles
      particleSystem.rotation.x += 0.001;
      particleSystem.rotation.y += 0.001;

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.01 * (index % 2 === 0 ? 1 : -1);
        shape.rotation.y += 0.01 * (index % 2 === 0 ? -1 : 1);
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.offsetWidth / containerRef.current.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
    };

    window.addEventListener('resize', handleResize);

    // Store refs for cleanup
    sceneRef.current = scene;
    rendererRef.current = renderer;

    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className={`three-container ${className}`} />;
}
