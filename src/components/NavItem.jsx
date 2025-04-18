import React, {useRef} from "react";

const NavItem = ({label, path, handleClick, handleIsActive, isActive, isMenuOpen}) => {
  const itemRef = useRef(null);

  return (
    <li ref={itemRef} className={`text-4xl z-1 mb-[30px] hover:text-shadow-[-4px_-1px_5px_rgb(158_158_158_/_0.6)] ${isActive ? 'text-black' : 'text-red'}`}>
      <a href={path}>{label}</a>
    </li>
  );
};

export default NavItem;