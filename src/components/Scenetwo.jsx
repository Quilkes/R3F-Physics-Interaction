import React, { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";

export default function Scenetwo(props) {
  const { section } = props;
  const { viewport } = useThree();
  const sparkRef = useRef();

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight
        position-y={-viewport.height * 1}
        rotation-y={10}
        intensity={3}
        color={"#8b98b4"}
        position={[1, 0, 0]}
      />

      <Sparkles
        ref={sparkRef}
        count="100"
        opacity="8"
        scale={[viewport.width + 3, -viewport.height * 3 + 0.3, -3]}
        position={[0, -viewport.height * 0 - 0.3, -3]}
        color={"#ab41b1"}
        speed={0.4}
      />
    </>
  );
}
