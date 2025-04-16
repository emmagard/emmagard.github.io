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

  // bg-linear-45 from-pink-fire to-transparent

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
          
        </nav>
        <Outlet />
      </div>
      {/* set the postition of the flower to half its size so that we can translate it's position from it's "center" */}
      <FlowerMain className={`absolute size-[150px] -left-[75px] ${activePath ? 'opacity-100 ease-[cubic-bezier(0,0,0.3,1)] transition-transform duration-150' : 'hidden'}`} style={flowerPostion}/>
    </div>
  )
}

export default Layout