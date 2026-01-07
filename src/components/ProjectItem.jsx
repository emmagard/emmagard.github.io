import React from 'react';
import { getLcn } from '../utils/labelled-classnames';

const styles = getLcn({
  projectListItem: [
    'mb-[20px] border-b-gray border-b pb-[20px] hover:text-shadow-[-4px_-1px_5px_rgb(158_158_158_/_0.6)] flex flex-col',
    'sm:mb-[0px] sm:border-0 sm:pb-0 sm:hover:text-shadow-[-10px_-10px_5px_rgb(158_158_158_/_0.9)]'
  ],
  projectTitle: [
    'hover:text-shadow-[-4px_-1px_5px_rgb(158_158_158_/_0.6)]',
    'text-xl font-sans font-bold tracking-wide',
    'sm:text-3xl sm:font-normal sm:hover:text-shadow-[-10px_-10px_5px_rgb(158_158_158_/_0.9)]',
  ],
  projectImage: [
    'inline order-2',
    'sm:hidden'
  ],
  projectImageSmallScreen: [
    'inline mb-[20px]',
    'sm:hidden'
  ],
  projectDescriptionSmallScreen: [
    'block text-md leading-[1.4] order-3',
    'sm:hidden'
  ],
});

const ProjectItem = ({project, index, handleMouseEnter, handleMouseExit}) => {
  return (
    <li
      className={styles.projectListItem}
      onMouseEnter={() => {handleMouseEnter(index)}}
      onMouseLeave={() => {handleMouseExit()}}>
      
      <div className="flex flex-row mb-[14px] sm:mb-[10px] items-center order-2">
        {project.link ? (
          <a 
            href={project.link}
            target="_blank"
            rel="noreferrer">
              
            <h3 className={styles.projectTitle}>{project.title}</h3>
          </a>
        ) : (
          <h3
            className={styles.projectTitle}
            onMouseEnter={() => {handleMouseEnter(index)}}
            onMouseLeave={() => {handleMouseExit()}}>
            {project.title}
          </h3>
        )}
      </div>
    
      <img src={project.image} className={styles.projectImageSmallScreen}/>
      <p className={styles.projectDescriptionSmallScreen}>{project.description} (tech: {project.tech.join(', ')})</p>
    </li>
  );
}

export default ProjectItem;