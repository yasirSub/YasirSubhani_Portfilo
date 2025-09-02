import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const TechnologyApertureModel = ({ 
  scrollY, 
  mousePosition 
}: { 
  scrollY: number; 
  mousePosition: { x: number; y: number } 
}) => {
  const apertureRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/technology_aperture_out.glb");

  useFrame((state) => {
    if (apertureRef.current) {
      // Scroll-based rotation
      const scrollRotation = scrollY * 0.001;
      apertureRef.current.rotation.y = scrollRotation;
      
      // Mouse-based rotation
      const mouseRotationY = mousePosition.x * 0.5;
      const mouseRotationX = mousePosition.y * 0.3;
      
      apertureRef.current.rotation.y += mouseRotationY * 0.02;
      apertureRef.current.rotation.x += mouseRotationX * 0.02;
      
      // Floating animation
      const floatY = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
      apertureRef.current.position.y = floatY;
      
      // Scale based on scroll
      const scale = 1 + Math.sin(scrollY * 0.01) * 0.1;
      apertureRef.current.scale.setScalar(scale);
      
      // Color animation based on scroll
      const hue = (scrollY * 0.1) % 360;
      const color = new THREE.Color().setHSL(hue / 360, 0.8, 0.6);
      
      // Apply color to all materials in the model
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(mat => {
              if (mat instanceof THREE.MeshStandardMaterial) {
                mat.color = color;
                mat.emissive = color.clone().multiplyScalar(0.2);
              }
            });
          } else if (child.material instanceof THREE.MeshStandardMaterial) {
            child.material.color = color;
            child.material.emissive = color.clone().multiplyScalar(0.2);
          }
        }
      });
    }
  });

  return (
    <group ref={apertureRef} position={[0, 0, 0]}>
      <primitive object={scene} scale={3.5} />
      
      {/* Add glowing effect */}
      <pointLight 
        position={[0, 0, 3]} 
        intensity={0.8} 
        color="#3b82f6" 
        distance={8}
      />
      <pointLight 
        position={[0, 0, -3]} 
        intensity={0.6} 
        color="#8b5cf6" 
        distance={8}
      />
      <pointLight 
        position={[0, 3, 0]} 
        intensity={0.4} 
        color="#10b981" 
        distance={6}
      />
    </group>
  );
};

const TechnologyApertureCanvas = () => {
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
    <div className="w-full h-full bg-transparent">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 12], fov: 45 }}
        gl={{ preserveDrawingBuffer: false, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-5, -5, -5]} intensity={0.4} />
        
        <Suspense fallback={
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#3b82f6" />
          </mesh>
        }>
          <TechnologyApertureModel 
            scrollY={scrollY} 
            mousePosition={mousePosition} 
          />
        </Suspense>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default TechnologyApertureCanvas;
