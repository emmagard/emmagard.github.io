import React, { useState } from "react";
import portfolio from './portfolio.js';
import { getLcn } from './utils/labelled-classnames';
import ProjectImage from './components/ProjectImage.jsx';

const styles = getLcn({
  projects: [
    'flex flex-row justify-between gap-[30px] mb-[100px]'
  ],
  column1: [
    'w-[30%]',
    ''
  ],
  column2: [
    'w-[66%] hidden',
    'sm:block'
  ],
  projectsList: [
    'text-black',
    ''
  ],
  projectTitle: [
    'text-4xl hover:text-shadow-[-4px_-1px_5px_rgb(158_158_158_/_0.6)]',
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
      <div className={styles.column1}>
        <h2 className="text-6xl font-semibold pb-[40px] mt-[30px]">Projects</h2>
        <ul className={styles.projectsList}>
          {portfolio.map((project, index) => (
            <li
              key={`project-${index}`}
              className="mb-[10px]" 
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
              
              {/* <ul className={styles.projectTech}>
                {project.tech.map((tech, index) => (
                  <li className="text-sm mr-[10px] bg-gray" key={index}>{tech}</li>
                ))}
              </ul> */}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.column2}>
        <ProjectImage imagePath={projectImagePath} description={projectDescription} tech={projectTech} show={!isMouseLeave} />
      </div>
    </section>
  );
};

export default Projects;