import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useLabelledClassnames } from '../../../shared/hooks/useLabelledClassnames.js';
import { useMobileViewport } from '../../../shared/hooks/useViewportSize.js';
import { FruitGroup } from './FruitGroup.jsx';

const styles = useLabelledClassnames({
  summary: [
    'text-2xl relative z-2 mx-[20px] mb-[30px]',
    'sm:text-[4rem] sm:leading-[1.2] sm:mx-[30px] sm:mb-[50px]',
  ],
});

export const Home = () => {
  const isMobile = useMobileViewport();
  const fruitGroupPos = isMobile ? [2, 3, 0] : [6, 2.75, -0.8];

  return (
    <>
      <p className={styles.summary}>A reliable full-stack engineer with a proven ability to build dynamic, scalable, and technology-agnostic web experiences.</p>
      <div className="absolute top-0 bottom-0 right-0 left-0">
        <Canvas camera={ {fov: 75, near: 0.1, far: 1000, position: [1, 0, 6]} }>
         
          <ambientLight intensity={0.7} />
          <spotLight color="#ffffff" position={[3, 1, 4]}  intensity={1} castShadow={true} />
          <directionalLight color="#f4c5e0" position={[12, 4, 1]} intensity={1} />
          <directionalLight color="#ffffff" position={[0, 1, 3]} intensity={1} />
          <Suspense fallback={null}>
            <Environment files={"background-home.jpeg"}/>
            <FruitGroup position={fruitGroupPos} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};
