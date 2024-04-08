import React, { useEffect, useRef, useState } from "react";
import { Abdulmatin } from "./jsx models/Quilkes";

export default function Sceneone(props) {
  const { section, onSectionChange } = props;

  return (
    <>
      <Abdulmatin page={section} />
    </>
  );
}
