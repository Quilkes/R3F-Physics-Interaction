import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { ScrollManager } from "./ScrollManager";
import { Physics } from "@react-three/rapier";
import Header from "./Header";
import Footer from "./Footer";
import Fallback from "./Fallback";
import App from "../App";

export default function Experience() {
  const [viewport, setViewport] = useState({
    isLaptop: window.innerWidth >= 1020,
  });

  // Function to handle viewport changes =====>
  const handleResize = () => {
    setViewport({
      isLaptop: window.innerWidth >= 1020,
    });
  };

  // Set up event listener for resize events =====>
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); //clean up
  }, []);

  return viewport.isLaptop ? (
    <>
      <Header />
      <Canvas dpr={1} camera={{ fov: 20, position: [0, 0, 20] }} shadows>
        <ScrollControls pages={3}>
          <ScrollManager />
          <Suspense>
            <Physics gravity={[0, -9.08, 0]}>
              <App />
            </Physics>
          </Suspense>
        </ScrollControls>
      </Canvas>
      <Footer />
    </>
  ) : (
    <Fallback />
  );
}
