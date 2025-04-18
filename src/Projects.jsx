import React, { useState } from "react";
import portfolio from './portfolio.js';
import { getLcn } from './utils/labelled-classnames';
import ProjectImage from './components/ProjectImage.jsx';
import { Canvas } from '@react-three/fiber';
import Apple from "./Apple";

const styles = getLcn({
  projects: [
    'relative h-auto mb-[100px]'
  ],
  content: [
    'z-3 flex flex-row justify-between gap-[30px] top-0 bottom-0 left-0 right-0'
  ],
  column1: [
    'w-[30%] z-4',
  ],
  column2: [
    'w-[66%] hidden',
    'sm:block'
  ],
  projectsList: [
    'text-black',
  ],
  projectListItem: [
    'mb-[10px] hover:text-shadow-[-4px_-1px_5px_rgb(158_158_158_/_0.6)]'
  ],
  projectTitle: [
    'text-4xl',
  ],
  projectImage: [
    'inline',
    'sm:hidden'
  ],
  projectImageSmallScreen: [
    'inline mb-[16px]',
    'sm:hidden'
  ],
  projectDescriptionSmallScreen: [
    'block text-sm',
    'sm:hidden'
  ],
  projectTech: [
    'hidden',
    'sm:pl-2 sm:block'
  ]
});

const Projects = () => {
  const [projectImagePath, setProjectImagePath] = useState(null);
  const [projectDescription, setProjectDescription] = useState(null);
  const [projectTech, setProjectTech] = useState(null);
  const [isMouseLeave, setIsMouseLeave] = useState(true);

  const handleProjectMouseEnter = (index) => {
    setIsMouseLeave(false);
    setProjectImagePath(portfolio[index].image);
    setProjectDescription(portfolio[index].description);
    setProjectTech(portfolio[index].tech);
  };

  const handleProjectMouseExit = () => {
    setIsMouseLeave(true);
  };

  return (
    <section className={styles.projects}>
      <div className={styles.content}>
        <div className={styles.column1}>
          <h2 className="text-6xl font-semibold pb-[40px] mt-[30px]">Projects</h2>
          <ul className={styles.projectsList}>
            {portfolio.map((project, index) => (
              <li
                key={`project-${index}`}
                className={styles.projectListItem}
                onMouseEnter={() => {handleProjectMouseEnter(index)}}
                onMouseLeave={() => {handleProjectMouseExit()}}>
                
                <div className="flex flex-row mb-[12px] items-center">
                  {project.link ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noreferrer">
                        
                      <h2 className={styles.projectTitle}>{project.title}</h2>
                    </a>
                  ) : (
                    <h2
                      className={styles.projectTitle}
                      onMouseEnter={() => {handleProjectMouseEnter(index)}}
                      onMouseLeave={() => {handleProjectMouseExit()}}>
                      {project.title}
                    </h2>
                  )}
                </div>
              
                <img src={project.image} className={styles.projectImageSmallScreen}/>
                <p className={styles.projectDescriptionSmallScreen}>{project.description} (tech: {project.tech.join(', ')})</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column2}>
          <ProjectImage imagePath={projectImagePath} description={projectDescription} tech={projectTech} show={!isMouseLeave} />
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