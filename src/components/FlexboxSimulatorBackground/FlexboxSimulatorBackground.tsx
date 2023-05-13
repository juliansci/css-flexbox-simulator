import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import Spaceman from "./Spaceman/Spaceman";
import Sun from "./Sun/Sun";
import Earth from "./Earth/Earth";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const FlexboxSimulatorBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 100], rotation: [Math.PI, 0, 0] }} flat>
      <color attach="background" args={["#000000"]} />
      <EffectComposer>
        <Bloom mipmapBlur intensity={0.1} luminanceThreshold={0} />
      </EffectComposer>
      <ambientLight intensity={0.5} />
      <OrbitControls maxDistance={50} minDistance={1} />

      <Stars
        fade
        radius={100}
        depth={50}
        count={5000}
        factor={10}
        saturation={0}
        speed={1}
      />
      <Float>
        <Spaceman position={[5, 0, 20]} scale={0.5} />
      </Float>
      <Sun position={[-200, 100, -400]} scale={0.2} />
      <Earth position={[20, -20, 20]} scale={8} />
    </Canvas>
  );
};

export default FlexboxSimulatorBackground;
