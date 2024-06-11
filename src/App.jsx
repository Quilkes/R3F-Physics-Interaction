import { Scroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import { Ball } from "./components/JSX_model/Ball";
import { Stair } from "./components/JSX_model/Stair";
import { Wall } from "./components/JSX_model/Wall";
import { Rack } from "./components/JSX_model/Rack";
import PhysicsOne from "./components/PhysicsOne";
import PhysicsThree from "./components/PhysicsThree";
import { Tunnel } from "./components/JSX_model/Tunnel";
import { Bowl } from "./components/JSX_model/Bowl";

export default function App() {
  const { viewport } = useThree();

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
