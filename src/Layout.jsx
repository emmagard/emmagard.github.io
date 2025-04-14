import React, {useState} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavItem from './NavItem';
import FlowerMain from './FlowerMain';

const nav = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Projects',
    path: '/projects/'
  },
  {
    label: 'Skills',
    path: '/skills/'
  },
  {
    label: 'Resume',
    path: '#'
  },
  {
    label: 'Contact',
    path: '#'
  }
];

function Layout() {
  const { pathname } = useLocation();

  const [activePath, setActivePath] = useState(null);
  const [flowerPostion, setFlowerPosition] = useState({
    top: '-50px',
    transform: 'translateX(0px) rotateZ(234deg)'
  });

  const handleIsActive = (leftVal, path) => {
    if (leftVal) {
      setFlowerPosition({
        top: '-50px',
        transform: `translateX(${leftVal}px) rotateZ(234deg)`
      });
    }
    setActivePath(path);
  };

  const randBgColor = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
  };

  const bgColor = randBgColor(['#4fe91e', '#607d8b', '#e91e63']);

  return (
    <div className="relative overflow-hidden" style={{background: `linear-gradient(45deg, ${bgColor}, transparent)`}}>
      <nav className="absolute w-full mt-5">
        <ul className="relative flex justify-center gap-11">
          {nav.map((item, index) => (
            <NavItem
              key={`nav-item-${index}`}
              label={item.label}
              path={item.path}
              isActive={item.path === pathname}
              handleIsActive={handleIsActive} />
          ))}
        </ul>
        {/* set the postition of the flower to half its size so that we can translate it's position from it's "center" */}
        <FlowerMain className={`absolute size-[150px] -left-[75px] ${activePath ? 'opacity-100 ease-[cubic-bezier(0,0,0.3,1)] transition-transform duration-150' : 'hidden'}`} style={flowerPostion}/>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout