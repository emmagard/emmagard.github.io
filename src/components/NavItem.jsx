import React, {useRef} from "react";
import { getLcn } from '../utils/labelled-classnames';

const styles = getLcn({
   navItem: [
    'z-1 mb-[30px] hover:text-shadow-[-4px_-1px_5px_rgb(158_158_158_/_0.6)]',
    'text-xl',
    'sm:text-4xl'
   ]
});

const NavItem = ({label, path}) => {
  const itemRef = useRef(null);

  return (
    <li ref={itemRef} className={styles.navItem}>
      <a href={path}>{label}</a>
    </li>
  );
};

export default NavItem;