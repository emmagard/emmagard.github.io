import React from "react";
import FlowerMain from "./FlowerMain";
import { programmingLanguages, librariesFrameworks, tools } from "./portfolio";

const Skills = () => {
  return (
    <section id="projects" className="projects relative flex h-screen pt-[10%] overflow-hidden">
      <div className="column1 relative w-[30%] ml-[10%] overflow-hidden">
        <h2 className="font-display text-5xl font-bold mb-10">Skills</h2>
        <div>
          <h3 className="font-display text-2xl font-semibold mb-5">Programming Languages</h3>
          <ul className="columns-2 mb-4">
            {programmingLanguages.map((language, index) => (
              <li className="" key={`programming-language-${index}`}>{language}</li>
            ))}
          </ul>
          <h3 className="font-display text-2xl font-semibold mb-5">Libraries & Frameworks</h3>
          <ul className="columns-2 mb-4">
            {librariesFrameworks.map((library, index) => (
              <li className="" key={`library-framework-${index}`}>{library}</li>
            ))}
          </ul>
          <h3 className="font-display text-2xl font-semibold mb-5">Tools, Platforms & Services</h3>
          <ul className="columns-2 mb-4">
            {tools.map((tool, index) => (
              <li className="" key={`tool-${index}`}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
      <FlowerMain className="absolute size-[250px] left-[2%] -top-[20%] rotate-z-75" />
      <FlowerMain className="absolute size-[250px] right-[2%] top-[4%] rotate-z-75" />
      <FlowerMain className="absolute size-[100px] left-[2%] bottom-[4%] rotate-z-215" />
      <FlowerMain className="absolute size-[300px] right-[23%] -bottom-[11%] -rotate-z-70" />
      <FlowerMain className="absolute size-[170px] right-[1%] -bottom-[4%] rotate-z-215" />
    </section>
  );
};

export default Skills;