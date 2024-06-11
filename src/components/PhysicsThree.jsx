import { CuboidCollider, RigidBody } from "@react-three/rapier";
import React from "react";
import { useThree } from "@react-three/fiber";

export default function PhysicsThree() {
  const { viewport } = useThree();

  return (
    <RigidBody type="fixed" collider={false}>
      <CuboidCollider
        args={[6, 2, 0.2]}
        position={[-1.7, -viewport.height * 2 - 0.26, 6]}
      />
      <CuboidCollider
        args={[0.2, 2, 3]}
        position={[-2.6, -viewport.height * 2 - 0.26, 6.5]}
      />
      <CuboidCollider
        args={[0.2, 2, 3]}
        position={[0.1, -viewport.height * 2 - 0.26, 6.5]}
      />
    </RigidBody>
  );
}
