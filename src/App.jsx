import { Loader, ScrollControls } from "@react-three/drei";
import Header from "./components/Header";
import { Canvas } from "@react-three/fiber";
import { ScrollManager } from "./components/ScrollManager";
import { Suspense, useEffect, useState } from "react";
import { Physics } from "@react-three/rapier";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Fallback from "./components/Fallback";

export default function App() {
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
          <Suspense fallback={null}>
            <Physics gravity={[0, -9.08, 0]}>
              <Experience />
            </Physics>
          </Suspense>
        </ScrollControls>
      </Canvas>
      <Loader
        innerStyles={{
          width: "100vh",
          borderRadius: "5px",
        }}
        barStyles={{
          backgroundColor: "#17a8ff",
          height: "0.2rem",
        }}
        dataStyles={{
          fontSize: "18px",
          paddingBottom: "5px",
        }}
        dataInterpolation={(data) => `${data.toFixed(0)}%`}
      />
      <Footer />
    </>
  ) : (
    <Fallback />
  );
}
