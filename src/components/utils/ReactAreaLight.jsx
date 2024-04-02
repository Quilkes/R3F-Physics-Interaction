import React, { useRef, forwardRef } from "react";
import { useHelper } from "@react-three/drei";
import { RectAreaLightHelper } from "../../../public/statics/RectAreaLightHelper";
import { RectAreaLightUniformsLib } from "../../../public/statics/RectAreaLightUniformsLib";

const RectAreaLight = forwardRef(
  ({ position, color, height, width, intensity, power }, ref) => {
    RectAreaLightUniformsLib.init();
    const rectAreaLight = useRef();

    useHelper(rectAreaLight, RectAreaLightHelper);

    return (
      <rectAreaLight
        ref={ref}
        position={position}
        color={color}
        height={height}
        width={width}
        intensity={intensity}
        power={power}
      />
    );
  }
);

export default RectAreaLight;
