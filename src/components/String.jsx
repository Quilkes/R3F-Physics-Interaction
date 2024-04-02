import React from "react";
import Vertex from "./shaders/StringShaders/Vertex.glsl";
import Fragment from "./shaders/StringShaders/Fragment.glsl";

const parameters = {};

export default function String() {
	parameters.count = 500;
	parameters.frequency = 0;
	parameters.wave = 0;
	parameters.time = 0.01;

	const positions = new Float32Array(parameters.count * 3);
	for (let i = 0; i < parameters.count; i++) {
		const i3 = i * 3;

		positions[i3 + 0] = 0; // positionX
		positions[i3 + 1] = 0; // positionY
		positions[i3 + 2] = 0; // positionZ
	}
	return (
		<>
			<mesh>
				<bufferGeometry />
				<shaderMaterial
					vertexShader={Vertex}
					fragmentShader={Fragment}
					uniforms={{
						uFrequency: { value: parameters.frequency },
						uWave: { value: parameters.wave },
						uTime: { value: parameters.time },
					}}
				/>
			</mesh>
		</>
	);
}
