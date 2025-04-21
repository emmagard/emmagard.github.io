import './index.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { getLcn } from './utils/labelled-classnames';
import FruitGroup from './FruitGroup.jsx';
import Nav from './components/Nav.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';

const styles = getLcn({
  title: [
    'font-bold',
    'text-4xl mb-[5px]',
    'sm:text-8xl sm:mb-[10px]',
  ],
  summary: [
    'text-4xl',
    'sm:text-8xl sm:leading-26',
  ]
});

function Home() {
  
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 bottom-0 right-0 left-0 mt-5 px-8">
        <section id="home" className="h-auto mb-[100px]">
          <h1 className={styles.title}>Emma Gardner</h1>
          <Nav />
          <p className={styles.summary}>A reliable full-stack engineer with a proven track record for building dynamic and technically agnostic  web experiences.</p>
        </section>
       
        <div id="projects">
          <Projects />
        </div>
        
        <div id="skills">
          <Skills />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>
      
      <Canvas camera={ {fov: 75, near: 0.1, far: 1000, position: [0, 0, 6]} }>
        <ambientLight intensity={0.7} />
        <spotLight color="#ffffff" position={[0, 1, 4]}  intensity={0.9} castShadow={true} />
        <directionalLight color="#f4c5e0" position={[12, 4, 1]} intensity={0.1}/>
        <directionalLight color="#ffffff" position={[0, 1, 3]} intensity={0.8}/>
        <FruitGroup />
      </Canvas>
    </div>
  );
}

export default Home;
