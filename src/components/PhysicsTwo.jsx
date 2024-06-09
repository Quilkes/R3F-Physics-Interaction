import { CuboidCollider, RigidBody } from "@react-three/rapier";
import React from "react";
import { useThree } from "@react-three/fiber";

export default function PhysicsTwo() {
  const { viewport } = useThree();

  return (
    <RigidBody type="fixed" collider={false} rotation-z={3.9}>
      <CuboidCollider
        args={[3, 0.1, 0.2]}
        position={[4.4, viewport.height * 1 - 0.26, 0.2]}
      />
    </RigidBody>
  );
}
