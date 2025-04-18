import './index.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import FruitGroup from './FruitGroup.jsx';
import Nav from './components/Nav.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';

function Home() {
  
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 bottom-0 right-0 left-0 mt-5 px-8">
        <section id="home" className="h-auto mb-[100px]">
          <h1 className="text-8xl font-bold mb-[10px]">Emma Gardner</h1>
          <Nav />
          <p className="text-8xl leading-26">A reliable full-stack engineer with a proven track record of building shippable web experiences through a technically agnostic lens.</p>
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
