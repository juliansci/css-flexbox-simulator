import React from "react";

export default function Sun(props) {
  return (
    <mesh {...props}>
      <sphereGeometry args={[10, 32, 32]} />
      <meshStandardMaterial color={[50, 0.72, 0.5]} toneMapped={false} />
    </mesh>
  );
}
