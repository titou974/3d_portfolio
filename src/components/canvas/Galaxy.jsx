import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';


const Galaxy = () => {

  const galaxy = useGLTF('./planet/scene.gltf')

  return (
    <primitive object={galaxy.scene} scale={2.5} position-y={0} rotation-y={0}/>
  )
}

const GalaxyCanvas = () => {
  return (
    <Canvas shadows frameLoop='demand' gl={{ preserveDrawingBuffer: true }} camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6]
    }}>
      <Suspense fallback={null}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <Galaxy />
      </Suspense>
    </Canvas>
  )
}

export default GalaxyCanvas
