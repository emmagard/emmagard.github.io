import './index.css';
import React, { useState } from 'react';
import portfolio from './portfolio.js';
import Name2 from './Name2.jsx';
import FlowerMain from './FlowerMain.jsx';

function App() {
  const [portfolioImagePath, setPortfolioImagePath] = useState(null);
  const [isMouseLeave, setIsMouseLeave] = useState(true);

  const handleProjectMouseEnter = (index) => {
    setIsMouseLeave(false);
    setPortfolioImagePath(portfolio[index].image);
  };

  const handleProjectMouseExit = () => {
    setIsMouseLeave(true);
  };

  return (
    <div className="relative overflow-x-clip">
      <section className="relative flex items-center justify-center h-screen">
        <Name2 className="w-[60%]" />

        <FlowerMain className="absolute size-[200px] top-[3%] left-[3%] rotate-z-10" />
        <FlowerMain className="absolute size-[150px] -top-[3%] left-[34%] rotate-z-120" />
        <FlowerMain className="absolute size-[100px] top-[15%] right-[30%] rotate-z-100" />
        <FlowerMain className="absolute size-[300px] -top-[12%] right-0 -rotate-z-15" />

        <FlowerMain className="absolute size-[100px] left-[2%] rotate-z-70" />
        <FlowerMain className="absolute size-[200px] right-0" />
        
        <FlowerMain className="absolute size-[300px] -bottom-[14%] left-[5%] rotate-60" />
        <FlowerMain className="absolute size-[100px] bottom-[5%] left-[40%] rotate-185" />
        <FlowerMain className="absolute size-[150px] -bottom-[2%] right-[24%] rotate-180" />
        <FlowerMain className="absolute size-[80px] bottom-[18%] right-[12%]" />
        <FlowerMain className="absolute size-[200px] -bottom-[10%] -right-[3%] -rotate-z-110" />

      </section>

      <section className="relative flex h-screen pt-42">
        <div className="relative w-[40%] ml-48 overflow-hidden">
          <h2 className="font-display text-5xl font-bold mb-10">Portfolio</h2>
          <ul className="h-[75vh] overflow-y-scroll pl-8 pb-[80px]">
            {portfolio.map((project, index) => (
              <li className="mb-4" key={index}>
                {project.link ? (
                  <a 
                    href={project.link}
                    onMouseEnter={() => {handleProjectMouseEnter(index)}}
                    onMouseLeave={() => {handleProjectMouseExit()}}
                    target="_blank"
                    rel="noreferrer">
                     <h3 className="font-display text-3xl font-semibold">{project.title}</h3>
                   </a>
                ) : (
                  <h3 className="font-display text-3xl font-semibold" onMouseEnter={() => {handleProjectMouseEnter(index)}}
                  onMouseLeave={() => {handleProjectMouseExit()}}>{project.title}</h3>
                )}
               
                <p>{project.description}</p>
                <ul className="pl-2">
                  {project.tech.map((tech, index) => (
                    <li className="text-sm" key={index}>{tech}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="absolute h-[100px] bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-white"></div>
        </div>
        
        <div className="absolute top-[14%] left-[40%] min-w-[60%]">
          <FlowerMain className={`absolute top-0 left-0 transition ${isMouseLeave ? 'opacity-100  duration-300' : 'opacity-0 duration-800'}`} />
          <img src={portfolioImagePath} className={`absolute top-0 w-full transition ${isMouseLeave ? 'opacity-0 duration-300' : 'opacity-50 duration-800'}`} />
          <img src={portfolioImagePath} className={`absolute top-0 w-full transition ${isMouseLeave ? 'opacity-0 duration-300' : 'opacity-100 duration-800'}`} style={{clipPath: 'path("M145.328 438.14C188.117 467.024 277.759 393.372 260.56 298.192C307.149 314.036 399.387 387.878 442.822 322.05C477.571 269.388 384.559 210.478 341.02 208.273C364.655 189.071 439.218 125.8 400.188 82.0814C346.346 21.7702 253.928 132.366 255.795 129.599C257.663 126.832 322.038 11.4567 218.075 0.934404C123.017 -8.68657 192.061 164.356 171.653 139.001C104.668 55.7767 -35.885 179.637 9.6663 235.557C55.2176 291.477 136.842 233.557 150.029 247.744C166.983 265.985 58.5047 391.11 145.328 438.14Z")'}}/>
        </div>
      </section>
    </div>
  )
}

export default App
