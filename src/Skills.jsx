import React from "react";
import { getLcn } from './utils/labelled-classnames';
import { programmingLanguages, librariesFrameworks, tools } from "./portfolio";
import { Canvas } from '@react-three/fiber';
import Melon from "./components/Melon";

const styles = getLcn({
  skills: [
    'relative flex flex-row justify-between gap-[30px] min-h-screen mb-[100px] px-8'
  ],
  column1Skills: [
    'w-full',
    'sm:w-[50%]',
  ],
  column2Skills: [
    'absolute top-0 left-0 bottom-0 right-0 ',
    'sm:block sm:w-[100%]'
  ],
  sectionTitle: [
    'font-semibold pb-[40px] mt-[30px]',
    'text-4xl',
    'sm:text-6xl'
  ],
  skillTypeTitle: [
    'font-semibold mb-[20px] text-black',
    'text-2xl',
    'sm:text-4xl'
  ],
  skillsList: [
    'columns-2',
    'xl:columns-3 mb-[50px] text-black'
  ],
  skillsListItem: [
    'text-2xl mb-0',
    'sm:text-4xl sm:mb-[10px]'
  ]
});

const Skills = () => {
  
  return (
    <section className={styles.skills}>
      <div className={styles.column1Skills}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div>
          <h3 className={styles.skillTypeTitle}>Programming Languages</h3>
          <ul className={styles.skillsList}>
            {programmingLanguages.map((language, index) => (
              <li className={styles.skillsListItem} key={`programming-language-${index}`}>{language}</li>
            ))}
          </ul>

          <h3 className={styles.skillTypeTitle}>Libraries & Frameworks</h3>
          <ul className={styles.skillsList}>
            {librariesFrameworks.map((library, index) => (
              <li className={styles.skillsListItem} key={`library-framework-${index}`}>{library}</li>
            ))}
          </ul>

          <h3 className={styles.skillTypeTitle}>Tools, Platforms & Services</h3>
          <ul className={styles.skillsList}>
            {tools.map((tool, index) => (
              <li className={styles.skillsListItem} key={`tool-${index}`}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.column2Skills}>
        <Canvas>
          <ambientLight intensity={1} />
          <spotLight color="#ffffff" position={[0, 1, 4]}  intensity={0.9} castShadow={true} />
          <directionalLight color="#f4c5e0" position={[12, 4, 1]} intensity={0.8}/>
          <directionalLight color="#ffffff" position={[0, 1, 3]} intensity={0.8}/>
          <Melon position={[2.75, 0.25, -1]}/>
        </Canvas>
      </div>
    </section>
  );
};

export default Skills;