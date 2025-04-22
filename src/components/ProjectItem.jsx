import React from 'react';
import { getLcn } from '../utils/labelled-classnames';

const styles = getLcn({
  projectListItem: [
    'mb-[50px] border-b-gray border-b pb-[20px]',
    'sm:mb-[10px] sm:border-0 sm:pb-0 sm:hover:text-shadow-[-4px_-1px_5px_rgb(158_158_158_/_0.6)]'
  ],
  projectTitle: [
    'hover:text-shadow-[-4px_-1px_5px_rgb(158_158_158_/_0.6)]',
    'text-2xl',
    'sm:text-4xl',
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
    'block text-md',
    'sm:hidden'
  ],
});

const ProjectItem = ({project, index, handleMouseEnter, handleMouseExit}) => {
  return (
    <li
      key={`project-${index}`}
      className={styles.projectListItem}
      onMouseEnter={() => {handleMouseEnter(index)}}
      onMouseLeave={() => {handleMouseExit()}}>
      
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
            onMouseEnter={() => {handleMouseEnter(index)}}
            onMouseLeave={() => {handleMouseExit()}}>
            {project.title}
          </h2>
        )}
      </div>
    
      <img src={project.image} className={styles.projectImageSmallScreen}/>
      <p className={styles.projectDescriptionSmallScreen}>{project.description} (tech: {project.tech.join(', ')})</p>
    </li>
  );
}

export default ProjectItem;