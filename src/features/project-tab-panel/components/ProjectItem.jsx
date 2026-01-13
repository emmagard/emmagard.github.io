import React from 'react';
import { useLabelledClassnames } from '../../../shared/hooks/useLabelledClassnames';
import { useMobileViewport } from '../../../shared/hooks/useViewportSize.js';

const styles = useLabelledClassnames({
  projectListItem: [
    'mb-[20px] border-b-gray border-b pb-[20px] flex flex-col',
    'sm:mb-[0px] sm:border-0 sm:pb-0'
  ],
  projectTitle: [
    'hover:text-shadow-[-4px_-1px_5px_rgb(158_158_158_/_0.6)] order-2',
    'text-xl font-sans font-bold tracking-wide mb-[14px]',
    'sm:text-3xl sm:font-normal sm:mb-[10px] sm:hover:text-shadow-[-10px_-10px_5px_rgb(158_158_158_/_0.9)]',
  ],
  projectImageMobile: [
    'inline mb-[20px]',
    'sm:hidden'
  ],
  projectDescriptionMobile: [
    'block text-md leading-[1.4] order-3',
    'sm:hidden'
  ],
});

const ProjectItemTitle = ({ project }) => {
  return (
    <h3 className={styles.projectTitle}>
      {project.link ? (
        <a href={project.link} target="_blank" rel="noreferrer">
          {project.title}
        </a>
      ) : (
        project.title
      )}
    </h3>
  );
};

export const ProjectItem = ({
  project,
  index,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) => {
  const isMobile = useMobileViewport();
  const handleMouseEnter = () => onMouseEnter(index);
  const handleMouseExit = () => onMouseLeave();
  
  return (
    <li
      className={styles.projectListItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
      {...rest}
    >
      <ProjectItemTitle project={project} />
      
      {isMobile && (
        <>
          <img src={project.image} className={styles.projectImageMobile} />
          <p className={styles.projectDescriptionMobile}>{project.description} (tech: {project.tech.join(', ')})</p>
        </>
      )}
    </li>
  );
};