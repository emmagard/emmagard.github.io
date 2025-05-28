import React from "react";
import { getLcn } from '../utils/labelled-classnames';

const styles = getLcn({
  skillsListTitle: [
    'font-semibold text-black',
    'text-2xl mb-[10px]',
    'sm:text-3xl sm:mb-[20px]'
  ],
  skillsList: [
    'columns-2',
    'xl:columns-3 mb-[30px] text-black',
    'sm:mb-[50px]'
  ],
  skillsListItem: [
    'text-1xl mb-0',
    'sm:text-2xl sm:mb-[4px]'
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