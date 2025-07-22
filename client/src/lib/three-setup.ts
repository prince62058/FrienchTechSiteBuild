import * as THREE from 'three';

export const createParticleSystem = (count: number = 100) => {
  const particles = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 20;

    // FrienchTech brand colors
    const colorChoice = Math.random();
    if (colorChoice > 0.5) {
      colors[i] = 1.0;     // R
      colors[i + 1] = 0.6; // G  
      colors[i + 2] = 0.2; // B (Orange)
    } else {
      colors[i] = 0.3;     // R
      colors[i + 1] = 0.6; // G
      colors[i + 2] = 1.0; // B (Blue)
    }
  }

  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.1,
    transparent: true,
    opacity: 0.8,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
  });

  return new THREE.Points(particles, material);
};

export const createFloatingShapes = (count: number = 10) => {
  const shapes: THREE.Mesh[] = [];
  
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

  for (let i = 0; i < count; i++) {
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
    
    shapes.push(shape);
  }

  return shapes;
};

export const animateScene = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  particles: THREE.Points,
  shapes: THREE.Mesh[]
) => {
  let animationId: number;

  const animate = () => {
    animationId = requestAnimationFrame(animate);

    // Rotate particles
    particles.rotation.x += 0.001;
    particles.rotation.y += 0.001;

    // Animate shapes
    shapes.forEach((shape, index) => {
      shape.rotation.x += 0.01 * (index % 2 === 0 ? 1 : -1);
      shape.rotation.y += 0.01 * (index % 2 === 0 ? -1 : 1);
      shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
    });

    renderer.render(scene, camera);
  };

  animate();

  return () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  };
};
