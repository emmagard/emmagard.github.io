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
  const isMobile = window.innerWidth < 640;
  const { pathname } = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(null);
  const [flowerPostion, setFlowerPosition] = useState({
    top: '-35px',
    transform: 'translateX(0px) rotateZ(234deg)'
  });

  const handleIsActive = (leftVal, path) => {
    if (leftVal) {
      setFlowerPosition({
        top: '-35px',
        transform: `translateX(${leftVal}px) rotateZ(234deg)`
      });
    }
    setActivePath(path);
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative overflow-hidden bg-black">
      <div className="relative max-w-[1200px] m-auto py-0 px-[1rem]">
        <div className="grid-ref hidden absolute top-0 bottom-0 left-0 right-0">
          <div className="grid grid-cols-12 gap-2">
            <div className="bg-black/20 h-[100vh] col-span-1"></div>
            <div className="bg-black/20 h-[100vh] col-span-1"></div>
            <div className="bg-black/20 h-[100vh] col-span-1"></div>
            <div className="bg-black/20 h-[100vh] col-span-1"></div>
            <div className="bg-black/20 h-[100vh] col-span-1"></div>
            <div className="bg-black/20 h-[100vh] col-span-1"></div>
            <div className="bg-black/20 h-[100vh] col-span-1"></div>
            <div className="bg-black/20 h-[100vh] col-span-1"></div>
            <div className="bg-black/20 h-[100vh] col-span-1"></div>
            <div className="bg-black/20 h-[100vh] col-span-1"></div>
            <div className="bg-black/20 h-[100vh] col-span-1"></div>
            <div className="bg-black/20 h-[100vh] col-span-1"></div>
          </div>
        </div>
        <button className="visible sm:invisible absolute text-white bg-black z-2 px-[10px] py-[12px]" onClick={handleOpenMenu}>menu</button>
        <nav className={`${isMenuOpen ? 'visible z-1' : 'invisible'} sm:visible bg-black absolute w-full mt-5 top-0 bottom-0 right-0 left-0 sm:top-auto sm:bottom-auto sm:right-auto sm:left-auto pl-[1rem] sm:pl-0`}>
          <ul className={`relative flex flex-col sm:flex-row justify-center gap-11 pl-[10px] sm:pl-0 mt-[50px] sm:mt-0`}>
            {nav.map((item, index) => (
              <NavItem
                key={`nav-item-${index}`}
                label={item.label}
                path={item.path}
                isActive={item.path === pathname}
                handleClick={() => {setIsMenuOpen(false)}}
                handleIsActive={handleIsActive} />
            ))}
          </ul>
          
        </nav>
        <Outlet />
      </div>
      {/* set the postition of the flower to half its size so that we can translate it's position from it's "center" */}
      <FlowerMain className={`invisible sm:visible absolute size-[150px] -left-[75px] ${activePath ? 'opacity-100 ease-[cubic-bezier(0,0,0.3,1)] transition-transform duration-150' : 'hidden'}`} style={flowerPostion}/>
    </div>
  )
}

export default Layout