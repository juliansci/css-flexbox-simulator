import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const earthRef = useRef();

  const { nodes, materials } = useGLTF("/css-flexbox-simulator/models/earth.glb");
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    earthRef.current.rotation.y = t / 30;
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        ref={earthRef}
        geometry={nodes.Earth.geometry}
        material={materials.EarthMaterial}
      />
      <mesh>
        <sphereGeometry args={[0.98, 64, 32]} />
        <meshBasicMaterial
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          transparent={true}
          opacity={0.2}
          color={[0.5, 0.7, 90]}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/css-flexbox-simulator/models/earth.glb");
