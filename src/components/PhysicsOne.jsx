import { CuboidCollider, RigidBody } from "@react-three/rapier";
import React from "react";

export default function PhysicsOne() {
  return (
    <RigidBody type="fixed" collider={false}>
      <CuboidCollider args={[4, 5.5, 0.07]} position={[0, -4.2, 1]} />
      <CuboidCollider args={[6, 7, 0.07]} position={[0, -5.5, 0]} />
    </RigidBody>
  );
}
