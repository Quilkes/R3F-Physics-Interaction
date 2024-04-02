import React, { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Quilkes } from "./jsx models/Quilkes";
import { OrbitControls, Sparkles, useHelper } from "@react-three/drei";
import gsap from "gsap";

export default function Scenetwo(props) {
  const { section } = props;
  const { viewport, camera } = useThree();
  const sparkRef = useRef();

  const animateCamera = () => {
    gsap.to(camera.rotation, {
      duration: 1,
      y: Math.PI / 4, // Rotate camera in the y-axis
    });

    gsap.to(camera.position, {
      duration: 1,
      y: -2, // Move camera down a bit
    });

    // Animate the camera to look at the target
    gsap.to(camera.position, {
      duration: 1,
      onComplete: () => {
        camera.lookAt(0, 2, 0);
      },
    });
  };

  useEffect(() => {
    // if (section >= 1) {
    //   animateCamera();
    // }
  }, [section]);

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight
        position-y={-viewport.height * 1}
        rotation-y={10}
        intensity={2}
        color={"blue"}
        position={[1, 0, 0]}
      />
      {/* <OrbitControls /> */}

      <group rotation-y={Math.PI * 2 - 1.5}>
        <Quilkes />
      </group>
      <Sparkles
        ref={sparkRef}
        count="30"
        opacity="8"
        scale={[3, 1, 0]}
        position={[0, -viewport.height * 0 - 0.3, -3]}
      />
    </>
  );
}
