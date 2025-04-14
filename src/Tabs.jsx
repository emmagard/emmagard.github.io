import React from 'react';
import {librariesFrameworks, programmingLanguages, tools} from './portfolio.js';
const Tabs = () => {
  return (
    <div>
      <h3 className="font-display text-3xl font-semibold">Programming Languages</h3>
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
  );
};

export default Tabs;