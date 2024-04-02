varying vec2 vUv;
uniform float uColor;

void main() {
   float strength = length(vec2(vUv.y, 0.1));

   gl_FragColor = vec4(strength, 0, strength, 1.0);

}