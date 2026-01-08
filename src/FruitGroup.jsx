import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Apple from './components/Apple';
import Banana from './components/Banana';
import Orange from './components/Orange';
import Melon from './components/Melon';

const FruitGroup = (props) => {
  const fruitGroupRef = useRef();

    const position = props.position ?? [6.5, 2.75, -1.5];
  
  useFrame(({clock}) => {
    fruitGroupRef.current.rotation.z = clock.elapsedTime / 5;
  });

  return (
    <group ref={fruitGroupRef} position={position}>
      <group position={[1,1,0]} rotation={[0, 0, 2.5]}>
        <Apple />
        <Banana />
        <Melon />
        <Orange />
      </group>
  
      <group position={[0,1,0]} rotation={[0, 0, 5]}>
        <Apple />
        <Banana />
        <Melon />
        <Orange />
      </group>
  
      <group position={[-1,1,0]} rotation={[0, 0, 6.5]}>
        <Apple />
        <Banana />
        <Melon />
        <Orange />
      </group>
    </group>
  );
};

export default FruitGroup;