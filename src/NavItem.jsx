import React, {useEffect, useRef} from "react";
import { Link } from 'react-router-dom';

const NavItem = ({label, path, handleIsActive, isActive}) => {
  const itemRef = useRef(null);

  useEffect(() => {
    if (isActive && itemRef.current) {
      // hacky way to wait for font to load before getting rect
      setTimeout(() => {
        const rect = itemRef.current?.getBoundingClientRect();
        if (rect) {
          const left = (rect.left + (rect.width/2));
          handleIsActive(left, path);
        }
      }, 10);
    }
  },[itemRef.current, isActive]);

  return (
    <li ref={itemRef} className={`relative font-display text-2xl font-bold ${isActive ? 'text-light-blue' : 'text-black'}`}>
      <Link className='relative z-2' to={path}>{label}</Link> 
    </li>
  );
};

export default NavItem;