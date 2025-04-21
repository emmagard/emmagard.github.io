import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { getLcn } from '../utils/labelled-classnames';
import NavItem from './NavItem';

const nav = [
  {
    label: 'Projects',
    path: '#projects'
  },
  {
    label: 'Skills',
    path: '#skills'
  },
  {
    label: 'Resume',
    path: '#'
  },
  {
    label: 'Contact',
    path: '#contact'
  }
];

const styles =  getLcn({
  nav: [
    'pl-0',
    'sm:pl-[5px]',
  ],
  navList: [
    'flex flex-row gap-[8px]',
    'sm:gap-[20px]'
  ],
});

const Nav = ({}) => {
  const { pathname } = useLocation();

  return (
    <div className="mb-[80px]">
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {nav.map((item, index) => (
            <NavItem
              key={`nav-item-${index}`}
              label={item.label}
              path={item.path}
              isActive={item.path === pathname}
            />
          ))}
        </ul>

      </nav>
  </div>
  );
};

export default Nav;