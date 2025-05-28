import React from "react";
import { getLcn } from './utils/labelled-classnames';
import { Environment } from '@react-three/drei';
import { programmingLanguages, librariesFrameworks, tools } from "./portfolio";
import { Canvas } from '@react-three/fiber';
import Melon from "./components/Melon";
import SkillsList from "./components/SkillsList";

const styles = getLcn({
  skills: [
    'relative flex flex-row justify-between gap-[30px] min-h-full',
    'px-[20px]',
    'sm:px-8'
  ],
  column1Skills: [
    'w-full',
    'sm:w-[50%]',
  ],
  column2Skills: [
    'absolute top-0 left-0 bottom-0 right-0 ',
    'sm:block sm:w-[100%]'
  ],
});

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.column1Skills}>
        <div>
          <SkillsList title={'Programming Languages'} items={programmingLanguages} />
          <SkillsList title={'Libraries & Frameworks'} items={librariesFrameworks} />
          <SkillsList title={'Tools, Platforms & Services'} items={tools} />
        </div>
      </div>

      <div className={styles.column2Skills}>
        <Canvas>
          <Environment files={"background-skills.jpeg"}/>
          <ambientLight intensity={1} />
          <spotLight color="#ffffff" position={[0, 1, 4]}  intensity={0.9} castShadow={true} />
          <directionalLight color="#f4c5e0" position={[12, 4, 1]} intensity={0.8}/>
          <directionalLight color="#ffffff" position={[0, 1, 3]} intensity={0.8}/>
          <Melon position={[2, 0.75, 0.5]}/>
        </Canvas>
      </div>
    </section>
  );
};

export default Skills;