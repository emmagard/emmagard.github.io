import React from "react";
import { useLabelledClassnames } from "../../../shared/hooks/useLabelledClassnames";

const styles = useLabelledClassnames({
  projectImage: [
    'hidden relative rounded-md shadow-[0_0_26px_rgb(158_158_158_/_0.9)]',
    'sm:block'
  ],
  image: [
    'relative w-full z-6 rounded-t-md aspect-3/2 object-cover transition mt-[20px]  shadow-[0_1px_1px_rgb(158_158_158_/_0.9)]'
  ],
  projectInfo: [
    'p-[20px] relative',
  ],
  projectInfoLabel: [
    'inline mr-[6px] tracking-[1px]'
  ],
  techList: [
    'flex flex-wrap gap-3'
  ],
  techName: [
    'px-2 bg-gray-200 rounded'
  ]
});

export const ProjectImage = ({
  imagePath,
  description,
  tech,
  show,
  pos
}) => {
  const showHideStyles = show ? 'opacity-100 duration-800' : 'opacity-0 duration-300';
  const posStyles = `translateY(${pos}px)`;

  return (
    <div className={`${styles.projectImage} ${showHideStyles}`} style={{transform: posStyles}}>
      <img src={imagePath} className={styles.image} />
      <div className={styles.projectInfo}>
        <div className="flex mb-[10px]">
          <h4 className={styles.projectInfoLabel}>TECH:</h4>
          <ul className={styles.techList}>
            {tech?.length && tech.map((item, i)=> (
              <li key={`${item}-${i}`} className={styles.techName}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={styles.projectInfoLabel}>DESCRIPTION:</h4>
          <p className="inline">{description}</p>
        </div>
      </div>
    </div>
  );
};