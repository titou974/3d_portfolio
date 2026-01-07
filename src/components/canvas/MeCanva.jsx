import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Bobo from "./Bobo";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
export default function MeCanva({ animationName }) {
  return (
    <Canvas>
      <ambientLight intensity={7} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
      <Suspense fallback={<CanvasLoader />}>
        <Bobo position-y={-1.4} scale={2.2} animationName={animationName} />
      </Suspense>
    </Canvas>
  );
}
