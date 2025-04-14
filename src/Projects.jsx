import React, { useState } from "react";
import portfolio from './portfolio.js';
import FlowerMain from './FlowerMain.jsx';

const Projects = () => {
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
    <section id="projects" className="projects relative flex h-screen pt-[10%] overflow-hidden">
      <div className="column1 relative w-[30%] ml-[10%] overflow-hidden">
        <h2 className="font-display text-5xl font-bold mb-10">Projects</h2>
        <ul className="h-[75vh] overflow-y-scroll pb-[140px]">
          {portfolio.map((project, index) => (
            <li className="mb-4" key={`project-${index}`}>
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
      </div>

      <svg className="cloud absolute left-0 -bottom-[200px]" xmlns="http://www.w3.org/2000/svg" width="560" height="360" viewBox="0 0 560 360" fill="none">
        <g filter="url(#filter0_f_640_91)">
        <ellipse cx="280" cy="180" rx="200" ry="100" fill="#607D8B"/>
        </g>
        <defs>
          <filter id="filter0_f_640_91" x="0" y="0" width="560" height="360" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_640_91"/>
          </filter>
        </defs>
      </svg>

      <div className="column2">
        <FlowerMain className="absolute size-[250px] left-[2%] -top-[20%] rotate-z-75" />
        <FlowerMain className="absolute size-[250px] right-[2%] top-[4%] rotate-z-75" />
        <FlowerMain className="absolute size-[100px] left-[2%] bottom-[4%] rotate-z-215" />
        <FlowerMain className="absolute size-[300px] right-[23%] -bottom-[11%] -rotate-z-70" />
        <FlowerMain className="absolute size-[170px] right-[1%] -bottom-[4%] rotate-z-215" />
        <div className="absolute top-[14%] left-[40%] min-w-[60%]">
          <FlowerMain className={`absolute top-0 left-0 transition ${isMouseLeave ? 'opacity-100  duration-300' : 'opacity-0 duration-800'}`} />
          <img src={portfolioImagePath} className={`absolute top-0 w-full transition ${isMouseLeave ? 'opacity-0 duration-300' : 'opacity-70 duration-800'}`} />
          <img src={portfolioImagePath} className={`absolute top-0 w-full transition ${isMouseLeave ? 'opacity-0 duration-300' : 'opacity-100 duration-800'}`} style={{clipPath: 'path("M145.328 438.14C188.117 467.024 277.759 393.372 260.56 298.192C307.149 314.036 399.387 387.878 442.822 322.05C477.571 269.388 384.559 210.478 341.02 208.273C364.655 189.071 439.218 125.8 400.188 82.0814C346.346 21.7702 253.928 132.366 255.795 129.599C257.663 126.832 322.038 11.4567 218.075 0.934404C123.017 -8.68657 192.061 164.356 171.653 139.001C104.668 55.7767 -35.885 179.637 9.6663 235.557C55.2176 291.477 136.842 233.557 150.029 247.744C166.983 265.985 58.5047 391.11 145.328 438.14Z")'}}/>
        </div>
      </div>
    </section>
  );
};

export default Projects;