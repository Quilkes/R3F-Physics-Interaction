import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useControls } from "leva";
import * as THREE from "three";
import RectAreaLight from "../utils/ReactAreaLight";

export default function LightSabre(props) {
  const { section } = props;

  const sabreRef = useRef();
  const lightSourceRef = useRef();

  const { viewport } = useThree();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [cursorX, setCursorX] = useState(0);

  useEffect(() => {
    // Handle Resize
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onMousemove = (event) => {
    const newX = event.clientX;
    setCursorX(newX);
  };

  useEffect(() => {
    // Handle mousemove
    window.addEventListener("mousemove", onMousemove);
    return () => window.removeEventListener("mousemove", onMousemove);
  }, [section]);

  // Check if the current section is 0
  const isPageOne = section === 0;

  useFrame(() => {
    if (sabreRef.current && isPageOne) {
      gsap.to(sabreRef.current.position, {
        duration: 0.5,
        /** Convert cursor position to a range of -1 to 1 and
         set the position of the light saber mesh
    */
        x: ((cursorX / viewportWidth) * 2 - 1) * viewport.aspect * 2.2,
        ease: "power2.out", // easing for smoother movement
      });
      // Update the position of the RectAreaLight
      if (lightSourceRef.current) {
        lightSourceRef.current.position.copy(sabreRef.current.position);
      }
    } else {
      setCursorX(0);
      return;
    }
  });

  const { sabreColor } = useControls({
    sabreColor: "white",
  });

  return (
    <>
      <group ref={sabreRef} position={[0, 0, 0.4]}>
        <mesh>
          <boxGeometry args={[0.09, 2.6, 0.01]} />
          <meshBasicMaterial color={sabreColor} />
        </mesh>
      </group>
      <RectAreaLight
        ref={lightSourceRef}
        position={[0, 0, 1]}
        color={"#c47012"}
        height={2.9}
        width={0.1}
        intensity={5}
        power={100}
      />
    </>
  );
}
