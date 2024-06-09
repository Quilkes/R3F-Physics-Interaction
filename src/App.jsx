import { OrbitControls, Scroll, useHelper } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import * as THREE from "three";
import { Ball } from "./components/JSX_model/Ball";
import { Stair } from "./components/JSX_model/Stair";
import { Wall } from "./components/JSX_model/Wall";
import { Rack } from "./components/JSX_model/Rack";
import PhysicsOne from "./components/PhysicsOne";
import PhysicsTwo from "./components/PhysicsTwo";

export default function App() {
  return (
    <>
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={200}
        color={"white"}
        distance={50}
        position={[8.27, 3, 6]}
      />
      <directionalLight
        position={[7.7, 3.5, 6]}
        color={"#d4d6c3"}
        castShadow
        intensity={3}
        shadow-mapSize={[1024, 1024]}
      />

      <PhysicsOne />
      {/* <PhysicsTwo /> */}
      <Wall />
      <Scroll>
        <Ball />
        <Stair />
        <Rack />
      </Scroll>
      <Scroll html>
        <PageOne />
        <PageTwo />
        <PageThree />
      </Scroll>
    </>
  );
}

{
  /* 
        <RigidBody
          type="fixed"
          colliders="trimesh"
          position={[-2.7, -viewport.height * 2.2, 2]}
          rotation={[0, -Math.PI * 4.02, 0]}
        >
          <primitive object={tunnelModel.scene} scale={0.5} ref={Tunnel} />
        </RigidBody> */
}
