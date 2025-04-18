import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function Layout() {  
  return (
    <div className="h-screen">
      {/* <div className="relative max-w-[1200px] m-auto py-0 px-[1rem]">
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
        </div> */}
        {/* <Nav /> */}
        <Outlet />
      {/* </div> */}
    </div>
  )
}

export default Layout