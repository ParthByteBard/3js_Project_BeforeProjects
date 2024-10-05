import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

const Ball = ({ iconUrls, rotation = [0, 0, 0] }) => {
  const decals = useTexture(iconUrls);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />

        {/* First icon (C++ or any other) */}
        <Decal position={[0, 0, 1]} rotation={rotation} scale={1} map={decals[0]} flatShading />

        {/* Second icon (C logo in this case) with horizontal flip */}
        {iconUrls.length > 1 && (
          <Decal position={[0, 0, -1]} rotation={[0, Math.PI, 0]} scale={1} map={decals[1]} flatShading />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ iconUrls, rotation }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense>
        <OrbitControls enableZoom={false} />
        <Ball iconUrls={iconUrls} rotation={rotation} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
