import React from "react";
import { useLabelledClassnames } from '../../../shared/hooks/useLabelledClassnames.js';

const styles = useLabelledClassnames({
  skillsListTitle: [
    'font-semibold text-black',
    'text-xl mb-[10px]',
    'sm:text-3xl sm:mb-[20px]'
  ],
  skillsList: [
    'columns-2',
    'xl:columns-3 mb-[30px] text-black',
    'sm:mb-[50px]'
  ],
  skillsListItem: [
    'text-md mb-0',
    'sm:text-2xl sm:mb-[4px]'
  ]
});

export const SkillsList = ({
  title,
  items
}) => {
  return (
    <>
      <h3 className={styles.skillsListTitle}>{ title }</h3>
      <ul className={styles.skillsList}>
        {items.map((item, i) => (
          <li key={`${item}-${i}`} className={styles.skillsListItem}>{item}</li>
        ))}
      </ul>
    </>
  );
};