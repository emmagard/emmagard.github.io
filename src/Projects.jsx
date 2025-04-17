import React, { useState } from "react";
import portfolio from './portfolio.js';
import FlowerMain from './FlowerMain.jsx';

const Projects = () => {
  const [projectImagePath, setProjectImagePath] = useState(null);
  const [projectDescription, setProjectDescription] = useState(null);
  const [isMouseLeave, setIsMouseLeave] = useState(true);

  const handleProjectMouseEnter = (index) => {
    setIsMouseLeave(false);
    setProjectImagePath(portfolio[index].image);
    setProjectDescription(portfolio[index].description);
  };

  const handleProjectMouseExit = () => {
    setIsMouseLeave(true);
  };

  return (
    <section id="projects" className="projects relative flex h-screen pt-[10%] overflow-hidden grid grid-cols-12 gap-2">
      <div className="column1 relative col-start-2 col-span-4 overflow-hidden">
        <h2 className="font-display text-5xl font-bold mb-10 text-white">Projects</h2>
        <ul className="h-[75vh] overflow-y-scroll pb-[140px] text-white">
          {portfolio.map((project, index) => (
            <li className="mb-4" key={`project-${index}`}
            onMouseEnter={() => {handleProjectMouseEnter(index)}}
            onMouseLeave={() => {handleProjectMouseExit()}}
            >
              {project.link ? (
                <a 
                  href={project.link}
                 
                  target="_blank"
                  rel="noreferrer">
                  <h3 className="font-display text-3xl font-semibold">{project.title}</h3>
                </a>
              ) : (
                <h3 className="font-display text-3xl font-semibold" onMouseEnter={() => {handleProjectMouseEnter(index)}}
                onMouseLeave={() => {handleProjectMouseExit()}}>{project.title}</h3>
              )}
              <ul className="pl-2">
                {project.tech.map((tech, index) => (
                  <li className="text-sm" key={index}>{tech}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
          
      {/* <svg className="cloud absolute left-0 -bottom-[200px]" xmlns="http://www.w3.org/2000/svg" width="560" height="360" viewBox="0 0 560 360" fill="none">
        <g filter="url(#filter0_f_640_91)">
        <ellipse cx="280" cy="180" rx="200" ry="100" fill="#e91e63"/>
        </g>
        <defs>
          <filter id="filter0_f_640_91" x="0" y="0" width="560" height="360" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_640_91"/>
          </filter>
        </defs>
      </svg> */}

      <div className="column2 col-start-6 col-span-6">
        <div className="relative">
          <img src={projectImagePath} className={`relative w-full z-6 transition rounded-md shadow-md shadow-shadow/50 mt-[88px] ${isMouseLeave ? 'opacity-0 duration-300' : 'opacity-100 duration-800'}`} />
          <div className={`absolute -right-[50px] -bottom-[50px] w-[50%] bg-white shadow-md shadow-shadow/50 rounded-xl p-[30px] z-6 ${isMouseLeave ? 'opacity-0 duration-300' : 'opacity-100 duration-800'}`}>
            <p className="text-black">{projectDescription}</p>
          </div>
        </div>
        <FlowerMain className={`absolute top-[14%] left-[40%] ${isMouseLeave ? 'opacity-100 duration-300' : 'opacity-0 duration-800'}`}/>
        <FlowerMain className="absolute size-[250px] left-[2%] -top-[20%] rotate-z-75" />
        <FlowerMain className="absolute size-[250px] right-[2%] top-[4%] rotate-z-75" />
        <FlowerMain className="absolute size-[100px] left-0 bottom-[4%] rotate-z-215" />
        <FlowerMain className="absolute size-[300px] right-[23%] -bottom-[11%] -rotate-z-70" />
        <FlowerMain className="absolute size-[170px] right-[1%] -bottom-[4%] rotate-z-215" />
      </div>
    </section>
  );
};

export default Projects;