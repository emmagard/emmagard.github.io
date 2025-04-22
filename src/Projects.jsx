import React, { useState } from 'react';
import portfolio from './portfolio.js';
import { getLcn } from './utils/labelled-classnames';
import ProjectItem from  './components/ProjectItem.jsx';
import ProjectImage from './components/ProjectImage.jsx';
import { Canvas } from '@react-three/fiber';
import Apple from "./components/Apple.jsx";

const styles = getLcn({
  projects: [
    'relative h-auto mb-[100px]  px-8'
  ],
  sectionTitle: [
    'font-semibold pb-[40px] mt-[30px]',
    'text-4xl',
    'sm:text-6xl'
  ],
  content: [
    'z-3 flex flex-row justify-between gap-[30px]'
  ],
  column1Projects: [
    'w-full',
    'sm:w-[50%] z-4',
    'lg:w-[35%]'
  ],
  column2Projects: [
    'hidden',
    'sm:block sm:w-[40%]',
    'lg:w-[60%]'
  ],
  projectsList: [
    'text-black',
  ]
});

const Projects = () => {
  const [projectImagePath, setProjectImagePath] = useState(null);
  const [projectImagePos,  setProjectImagePos] = useState(null);
  const [projectDescription, setProjectDescription] = useState(null);
  const [projectTech, setProjectTech] = useState(null);
  const [isMouseLeave, setIsMouseLeave] = useState(true);

  const handleProjectMouseEnter = (index) => {
    setIsMouseLeave(false);
    setProjectImagePath(portfolio[index].image);
    setProjectDescription(portfolio[index].description);
    setProjectTech(portfolio[index].tech);

    const yPos = index * 16;
    setProjectImagePos(yPos);
  };

  const handleProjectMouseExit = () => {
    setIsMouseLeave(true);
  };

  return (
    <section className={styles.projects}>
      <div className={styles.content}>
        <div className={styles.column1Projects}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <ul className={styles.projectsList}>
            {portfolio.map((project, index) => (
              <ProjectItem 
                key={`project-${index}`}
                project={project}
                index={index}
                handleMouseEnter={handleProjectMouseEnter}
                handleMouseExit={handleProjectMouseExit}
              />
            ))}
          </ul>
        </div>

        <div className={styles.column2Projects}>
          <ProjectImage imagePath={projectImagePath} description={projectDescription} tech={projectTech} show={!isMouseLeave} pos={projectImagePos}/>
        </div>
      </div>

      <div className={`absolute top-0 bottom-0 right-0 left-0 ${isMouseLeave ? 'block' : 'hidden'}`}>
        <Canvas>
          <ambientLight intensity={0.7} />
          <spotLight color="#ffffff" position={[0, 1, 4]}  intensity={0.9} castShadow={true} />
          <directionalLight color="#f4c5e0" position={[12, 4, 1]} intensity={0.1}/>
          <directionalLight color="#ffffff" position={[0, 1, 3]} intensity={0.8}/>
          <group position={[-2,0,4]}>         
            <Apple />
          </group>
        </Canvas>
      </div>
    </section>
  );
};

export default Projects;