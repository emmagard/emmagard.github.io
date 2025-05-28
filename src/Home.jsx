import './index.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { getLcn } from './utils/labelled-classnames';
import FruitGroup from './FruitGroup.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';
import { Tabs, Tab, TabPanel } from './components/Tabs.jsx';

const styles = getLcn({
  title: [
    'font-bold',
    'text-5xl mb-[5px] ml-[20px]',
    'sm:text-[7rem] sm:mb-[10px] sm:ml-[30px]',
  ],
  summary: [
    'text-4xl relative z-2 mx-[20px] mb-[30px]',
    'sm:text-[5rem] sm:leading-21 sm:mx-[30px] sm:mb-[50px]',
  ],
  tabsNav: [
    'flex flex-row gap-[8px] relative z-10 mx-[22px] justify-between',
    'sm:gap-[36px] sm:ml-[30px] sm:justify-start'
  ],
  tabsNavItem: [
    'z-1 mb-[30px] hover:text-shadow-[-4px_-1px_5px_rgb(158_158_158_/_0.6)] cursor-pointer',
    'text-xl',
    'sm:text-4xl sm:hover:text-shadow-[-10px_-10px_5px_rgb(158_158_158_/_0.9)]'
  ],
  tabsContainer: [
    'flex flex-col flex-grow justify-between'
  ],
  siteContent: [
    'flex flex-col justify-start h-full pt-5 max-w-[1200px] my-0 mx-auto'
  ]
});

function Home() {
  return (
    <div className="relative w-full h-full">
      <div className={styles.siteContent}>
          <h1 className={styles.title}>Emma Gardner</h1>
          <Tabs className={styles.tabsContainer}>
            <div className={styles.tabsNav}>
              <Tab index={0}><span className={styles.tabsNavItem}><h2>Home</h2></span></Tab>
              <Tab index={1}><span className={styles.tabsNavItem}><h2>Projects</h2></span></Tab>
              <Tab index={2}><span className={styles.tabsNavItem}><h2>Skills</h2></span></Tab>
              <Tab index={3}><span className={styles.tabsNavItem}><h2>Contact</h2></span></Tab>
            </div>
            <div className="mt-[30px] sm:mt-[50px] h-full flex flex-col justify-end">
              <TabPanel index={0} className="self-end">
                <p className={styles.summary}>A reliable full-stack engineer with a proven ability to build dynamic, scalable, and technology-agnostic web experiences.</p>
                <div className="absolute top-0 bottom-0 right-0 left-0">
                  <Canvas camera={ {fov: 75, near: 0.1, far: 1000, position: [1, 0, 6]} }>
                    <Environment files={"background-home.jpeg"}/>
                    <ambientLight intensity={0.7} />
                    <spotLight color="#ffffff" position={[3, 1, 4]}  intensity={1} castShadow={true} />
                    <directionalLight color="#f4c5e0" position={[12, 4, 1]} intensity={1} />
                    <directionalLight color="#ffffff" position={[0, 1, 3]} intensity={1} />
                    <FruitGroup />
                  </Canvas>
                </div>
              </TabPanel>
              <TabPanel index={1}>
                <Projects />
              </TabPanel>
              <TabPanel index={2} className="grow">
                <Skills />
              </TabPanel>
              <TabPanel index={3} className="grow">
              <Contact />
              </TabPanel>
            </div>
          </Tabs>
      </div>
    </div>
  );
}

export default Home;
