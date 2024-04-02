// uniform float progress;
// uniform float opacity;
varying vec3 vColor;

void main() {
//   vColor = vec3(1.0, 1.0, 1.0); // White text
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   // Calculate clip value based on progress and vertex position
//   float clip = smoothstep(0.0, 1.0, progress - position.x);
//   vColor.a *= clip; // Pre-multiply alpha with clip value for efficiency
}