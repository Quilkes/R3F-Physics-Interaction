import { Scroll } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useThree } from "@react-three/fiber";
import { Wall } from "./JSX_model/Wall";
import { Ball } from "./JSX_model/Ball";
import { Stair } from "./JSX_model/Stair";
import { Rack } from "./JSX_model/Rack";
import { Tunnel } from "./JSX_model/Tunnel";
import { Bowl } from "./JSX_model/Bowl";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

export default function Experience() {
  const { viewport } = useThree();

  return (
    <>
      {/* Light */}
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

      {/* Wall for Pg One */}
      <RigidBody type="fixed" collider={false}>
        <CuboidCollider args={[4, 5.5, 0.07]} position={[0, -4.2, 1]} />
        <CuboidCollider args={[6, 7, 0.07]} position={[0, -5.5, 0]} />
      </RigidBody>

      {/* Wall for Pg Three */}
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

      {/* Models */}
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
