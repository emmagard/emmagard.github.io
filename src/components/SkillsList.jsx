import React from "react";
import { getLcn } from '../utils/labelled-classnames';

const styles = getLcn({
  skillsListTitle: [
    'font-semibold mb-[20px] text-black',
    'text-2xl',
    'sm:text-4xl'
  ],
  skillsList: [
    'columns-2',
    'xl:columns-3 mb-[50px] text-black'
  ],
  skillsListItem: [
    'text-2xl mb-0',
    'sm:text-3xl sm:mb-[10px]'
  ]
});

const SkillsList = ({ title, items }) => {
  return (
    <div>
      <h3 className={styles.skillsListTitle}>{ title }</h3>
      <ul className={styles.skillsList}>
        {items.map((item, i) => (
          <li key={`${item}-${i}`} className={styles.skillsListItem}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;