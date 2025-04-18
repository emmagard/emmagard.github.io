import React, {useRef} from "react";

const NavItem = ({label, path, handleClick, handleIsActive, isActive, isMenuOpen}) => {
  const itemRef = useRef(null);

  return (
    <li ref={itemRef} className={`text-4xl z-1 mb-[30px] ${isActive ? 'text-black' : 'text-red'}`}>
      <a href={path}>{label}</a>
    </li>
  );
};

export default NavItem;