import Sceneone from "./components/Sceneone";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import Header from "./components/Header";
import Footer from "./components/jsx models/Footer";
import { useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import Scenetwo from "./components/Scenetwo";

function App() {
  const [section, setSection] = useState(0);
  return (
    <>
      <Header />
      <Canvas shadows dpr={1} camera={{ fov: 55 }} className="w-full h-screen">
        <ScrollControls pages={4}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll>
            <Sceneone section={section} />
            <Scenetwo section={section} />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Footer section={section} />
    </>
  );
}

export default App;
