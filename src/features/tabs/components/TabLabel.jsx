import React, { use } from 'react';
import { useLabelledClassnames } from '../../../shared/hooks/useLabelledClassnames.js';

const styles = useLabelledClassnames({
  tabsNavItem: [
    'z-1 mb-[30px] hover:text-shadow-[-4px_-1px_5px_rgb(158_158_158_/_0.6)] cursor-pointer',
    'text-xl',
    'sm:text-4xl sm:hover:text-shadow-[-10px_-10px_5px_rgb(158_158_158_/_0.9)]'
  ]
});

const TabLabel =  ({ children }) => {
  return (
    <span className={styles.tabsNavItem}>
      <h2>{children}</h2>
    </span>
  );
};

export default TabLabel;