
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const particlesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.005;
    }
  });

  // Pre-generate positions to avoid recalculation
  const particlePositions = React.useMemo(() => {
    return Array.from({ length: 30 }, () => [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8
    ] as [number, number, number]);
  }, []);

  return (
    <group ref={particlesRef}>
      {particlePositions.map((position, i) => (
        <mesh key={i} position={position}>
          <sphereGeometry args={[0.02, 8, 6]} />
          <meshStandardMaterial 
            color="#8B5CF6" 
            opacity={0.6} 
            transparent 
          />
        </mesh>
      ))}
    </group>
  );
};

export default Particles;
