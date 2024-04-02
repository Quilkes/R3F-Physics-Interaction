import React from "react";
import { Intro } from "./jsx models/Intro";
import LightSabre from "./jsx models/LightSabre";

export default function Sceneone({ section }) {
  return (
    <>
      <LightSabre section={section} />
      <Intro />
    </>
  );
}
