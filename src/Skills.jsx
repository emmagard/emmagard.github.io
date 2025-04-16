import React from "react";
import FlowerMain from "./FlowerMain";
import { programmingLanguages, librariesFrameworks, tools } from "./portfolio";

const Skills = () => {
  return (
    <section id="projects" className="projects relative flex h-screen pt-[10%] overflow-hidden grid grid-cols-12 gap-2">
      <div className="column1 relative col-start-2 col-span-4 overflow-hidden">
        <h1 className="font-display text-5xl font-bold mb-10 text-white">Skills</h1>
        <div>
          <h2 className="font-display text-2xl font-semibold mb-5 text-white">Programming Languages</h2>
          <ul className="columns-2 mb-4 text-white">
            {programmingLanguages.map((language, index) => (
              <li className="" key={`programming-language-${index}`}>{language}</li>
            ))}
          </ul>
          <h2 className="font-display text-2xl font-semibold mb-5 text-white">Libraries & Frameworks</h2>
          <ul className="columns-2 mb-4 text-white">
            {librariesFrameworks.map((library, index) => (
              <li className="" key={`library-framework-${index}`}>{library}</li>
            ))}
          </ul>
          <h2 className="font-display text-2xl font-semibold mb-5 text-white">Tools, Platforms & Services</h2>
          <ul className="columns-2 mb-4 text-white">
            {tools.map((tool, index) => (
              <li className="" key={`tool-${index}`}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
      <FlowerMain className="absolute size-[250px] left-[2%] -top-[20%] rotate-z-75" />
      <FlowerMain className="absolute size-[250px] right-[2%] top-[4%] rotate-z-75" />

      <div className="absolute top-[14%] left-[40%] min-w-[60%]">
      <FlowerMain className={`absolute top-0 left-0 transition`}/>
      </div>
      <FlowerMain className="absolute size-[100px] left-[2%] bottom-[4%] rotate-z-215" />
      <FlowerMain className="absolute size-[300px] right-[23%] -bottom-[11%] -rotate-z-70" />
      <FlowerMain className="absolute size-[170px] right-[1%] -bottom-[4%] rotate-z-215" />
    </section>
  );
};

export default Skills;