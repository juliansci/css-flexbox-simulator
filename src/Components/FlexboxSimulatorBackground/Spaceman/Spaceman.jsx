import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Spaceman = (props) => {
  const spacemanRef = useRef();
  const { nodes, materials } = useGLTF("/models/astronaut.glb");

  return (
    <>
      <mesh
        {...props}
        castShadow
        receiveShadow
        ref={spacemanRef}
        geometry={nodes.Astronaut_mesh.geometry}
        material={materials.Astronaut_mat}
        material-envMapIntensity={0}
        onClick={() => {}}
      />
    </>
  );
};

export default Spaceman;
useGLTF.preload("/models/astronaut.glb");
