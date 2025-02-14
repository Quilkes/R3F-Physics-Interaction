/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";

export function Ball(props) {
  const { nodes, materials } = useGLTF("models/ball.glb");

  const ballRef = useRef();
  const data = useScroll();
  const hasAppliedImpulse = useRef(false);

  useFrame(() => {
    // Applying Impulse onScroll  =====>
    const scrollOffset = data.scroll.current;
    if (scrollOffset > 0.001 && !hasAppliedImpulse.current) {
      ballRef.current.applyImpulse({ x: 0.1, y: 0, z: 0 }, true);
      hasAppliedImpulse.current = true;
    }
  });

  return (
    <RigidBody
      ref={ballRef}
      restitution={0}
      colliders="ball"
      position={[-2.431, 1.12, 0.55]}
    >
      <group {...props} scale={0.525}>
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("models/ball.glb");
