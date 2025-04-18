import React from "react";
import { getLcn } from './utils/labelled-classnames';
import { programmingLanguages, librariesFrameworks, tools } from "./portfolio";
import { Canvas } from '@react-three/fiber';
import Banana from "./Banana";
import Melon from "./Melon";
import Orange from "./Orange";
import Apple from "./Apple";

const styles = getLcn({
  skills: [
    'relative flex flex-row justify-between gap-[30px] min-h-screen mb-[100px]'
  ],
  skillTypeTitle: [
    'text-xl font-semibold mb-5 text-black',
    'sm:text-4xl'
  ],
  column1: [
    'w-[50%]',
  ],
  column2: [
    'w-[50%] hidden',
    'sm:block'
  ],
  skillsList: [
    'columns-3 mb-[50px] text-black'
  ],
  skillsListItem: [
    'text-4xl mb-[10px]'
  ]
});

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.column1}>
      <h2 className="text-6xl font-semibold pb-[40px] mt-[30px]">Skills</h2>
      <div>
        <h2 className={styles.skillTypeTitle}>Programming Languages</h2>
        <ul className={styles.skillsList}>
          {programmingLanguages.map((language, index) => (
            <li className={styles.skillsListItem} key={`programming-language-${index}`}>{language}</li>
          ))}
        </ul>

        <h2 className={styles.skillTypeTitle}>Libraries & Frameworks</h2>
        <ul className={styles.skillsList}>
          {librariesFrameworks.map((library, index) => (
            <li className={styles.skillsListItem} key={`library-framework-${index}`}>{library}</li>
          ))}
        </ul>

        <h2 className={styles.skillTypeTitle}>Tools, Platforms & Services</h2>
        <ul className={styles.skillsList}>
          {tools.map((tool, index) => (
            <li className={styles.skillsListItem} key={`tool-${index}`}>{tool}</li>
          ))}
        </ul>
      </div>
      </div>

      <div className={styles.column2}>
        <Canvas>
          <ambientLight intensity={0.7} />
          <spotLight color="#ffffff" position={[0, 1, 4]}  intensity={0.9} castShadow={true} />
          <directionalLight color="#f4c5e0" position={[12, 4, 1]} intensity={0.1}/>
          <directionalLight color="#ffffff" position={[0, 1, 3]} intensity={0.8}/>
          <group position={[-2,-2,0]}>
            <Orange position={[1.6, 1.5,0]} />
            <Melon position={[1.6, 3.65, -1]}/>
            <Apple position={[-1.5,-1,0]}/>
            <Banana position={[3,1, -3]}/>
          </group>
        </Canvas>
      </div>
    </section>
  );
};

export default Skills;