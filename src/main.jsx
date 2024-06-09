import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, ScrollControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { ScrollManager } from "./components/ScrollManager.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
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
  </React.StrictMode>
);
