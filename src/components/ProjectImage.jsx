import React from "react";
import { getLcn } from '../utils/labelled-classnames';

const styles = getLcn({
  projectImage: [
    'hidden relative rounded-md shadow-md shadow-shadow/50',
    'sm:block'
  ],
  image: [
    'relative w-full z-6 rounded-t-md transition border-b  mt-[88px]'
  ],
  description: [
    'p-[20px]'
  ]
});

const ProjectImage = ({imagePath, description, tech, show, pos}) => {
  const showHideStyles = show ? 'opacity-100 duration-800' : 'opacity-0 duration-300';
  const posStyles = {transform: `translateY(${pos}px)`};

  return (
    <div className={`${styles.projectImage} ${showHideStyles}`} style={posStyles}>
      <img src={imagePath} className={styles.image} />
      <div className={styles.description}>
        <div className="flex">
          <h4 className="font-bold no-underline mr-[8px]">Tech:</h4>
          <ul className="flex flex-wrap gap-x-3">
            {tech.map((item)=> (
              <li className="underline">{item}</li>
            ))}
          </ul>
        
        </div>
        <div className="text-black">
          <h4 className="font-bold inline mr-[6px]">Description:</h4> 
          <p className="inline">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectImage;