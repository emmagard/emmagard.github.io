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

const ProjectImage = ({imagePath, description, tech, show}) => {
  const showHideStyles = show ? 'opacity-100 duration-800' : 'opacity-0 duration-300';

  return (
    <div className={`${styles.projectImage} ${showHideStyles}`}>
      <img src={imagePath} className={styles.image} />
      <div className={styles.description}>
        <p><span className="font-bold">Tech:</span> {tech?.join(', ')}</p>
        <p className="text-black"><span className="font-bold">Description:</span> {description}</p>
      </div>
    </div>
  );
};

export default ProjectImage;