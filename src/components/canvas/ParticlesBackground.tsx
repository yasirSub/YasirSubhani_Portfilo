import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const ParticlesModel = ({ 
  scrollY, 
  mousePosition 
}: { 
  scrollY: number; 
  mousePosition: { x: number; y: number } 
}) => {
  const particlesRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/particles_tests_-_3.glb");

  useFrame((state) => {
    if (particlesRef.current) {
      // Gentle rotation based on scroll
      const scrollRotation = scrollY * 0.0005;
      particlesRef.current.rotation.y = scrollRotation;
      
      // Subtle mouse interaction
      const mouseRotationY = mousePosition.x * 0.1;
      const mouseRotationX = mousePosition.y * 0.05;
      
      particlesRef.current.rotation.y += mouseRotationY * 0.01;
      particlesRef.current.rotation.x += mouseRotationX * 0.01;
      
      // Floating animation
      const floatY = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      particlesRef.current.position.y = floatY;
      
      // Scale based on scroll
      const scale = 1 + Math.sin(scrollY * 0.005) * 0.05;
      particlesRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={particlesRef} position={[0, 0, 0]}>
      <primitive object={scene} scale={8} />
      
      {/* Ambient glow */}
      <pointLight 
        position={[0, 0, 5]} 
        intensity={0.3} 
        color="#3b82f6" 
        distance={15}
      />
      <pointLight 
        position={[0, 0, -5]} 
        intensity={0.2} 
        color="#8b5cf6" 
        distance={15}
      />
    </group>
  );
};

const ParticlesBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 20], fov: 60 }}
        gl={{ preserveDrawingBuffer: false, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.3}
          castShadow
        />
        
        <Suspense fallback={null}>
          <ParticlesModel 
            scrollY={scrollY} 
            mousePosition={mousePosition} 
          />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ParticlesBackground;
