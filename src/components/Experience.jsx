import { Scroll } from "@react-three/drei";
import { Wall } from "./JSX_model/Wall";
import PhysicsOne from "./PhysicsOne";
import PhysicsThree from "./PhysicsThree";
import { Ball } from "./JSX_model/Ball";
import { Stair } from "./JSX_model/Stair";
import { Rack } from "./JSX_model/Rack";
import { Tunnel } from "./JSX_model/Tunnel";
import { Bowl } from "./JSX_model/Bowl";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

export default function Experience() {
  return (
    <>
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
      <rectAreaLight
        intensity={3}
        color={"#d4d6c3"}
        position={[3.9, 1.74, 13.8]}
        rotation-x={-1.54}
        width={10}
      />

      <PhysicsOne />
      <PhysicsThree />
      <Wall />
      <Scroll>
        <Ball />
        <Stair />
        <Rack />
        <Tunnel />
        <Bowl />
      </Scroll>
      <Scroll html>
        <PageOne />
        <PageTwo />
        <PageThree />
      </Scroll>
    </>
  );
}
