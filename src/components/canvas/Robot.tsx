import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import * as THREE from "three";

const RobotModel = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const robotRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (robotRef.current) {
      // Smooth rotation based on mouse position
      const targetRotationY = mousePosition.x * 0.3;
      const targetRotationX = mousePosition.y * 0.2;
      
      robotRef.current.rotation.y += (targetRotationY - robotRef.current.rotation.y) * 0.05;
      robotRef.current.rotation.x += (targetRotationX - robotRef.current.rotation.x) * 0.05;
      
      // Add subtle floating animation
      robotRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={robotRef} position={[0, 0, 0]}>
      {/* Main robot body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 1.8, 0.8]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      
      {/* Robot head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.2, 1.4, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.2, 1.4, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.9, 0.3, 0]}>
        <boxGeometry args={[0.25, 1.2, 0.25]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      <mesh position={[0.9, 0.3, 0]}>
        <boxGeometry args={[0.25, 1.2, 0.25]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.3, -1.2, 0]}>
        <boxGeometry args={[0.25, 0.8, 0.25]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
      <mesh position={[0.3, -1.2, 0]}>
        <boxGeometry args={[0.25, 0.8, 0.25]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
      
      {/* Glowing effect */}
      <pointLight position={[0, 0, 1]} intensity={0.3} color="#3b82f6" />
    </group>
  );
};

const RobotCanvas = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-full bg-transparent">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ preserveDrawingBuffer: false, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-5, -5, -5]} intensity={0.3} />
        
        <Suspense fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="green" />
          </mesh>
        }>
          <RobotModel mousePosition={mousePosition} />
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

export default RobotCanvas;
