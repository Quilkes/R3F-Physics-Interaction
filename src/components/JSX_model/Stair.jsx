/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Stair(props) {
  const { nodes, materials } = useGLTF("models/stair.glb");
  return (
    <RigidBody
      type="fixed"
      colliders="trimesh"
      position={[-3, -1.9, 0.68]}
      rotation={[0, -Math.PI / 2, 0]}
      friction={0.9}
    >
      <group {...props} dispose={null} scale={0.85}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Base.geometry}
          material={materials.Material}
          position={[-0.449, 2.471, -0.737]}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("models/stair.glb");
