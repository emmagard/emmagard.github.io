import './index.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { getLcn } from './utils/labelled-classnames.jsx';
import { useViewportSize } from './hooks/useViewportSize';
import FruitGroup from './FruitGroup.jsx';
import Projects from './components/Tabs/Projects.jsx';
import Skills from './components/Tabs/Skills.jsx';
import Contact from './components/Tabs/Contact.jsx';
import { Tabs, Tab, TabPanel } from './components/Tabs/Tabs.jsx';

const styles = getLcn({
  title: [
    'font-display',
    'text-5xl mb-[5px] ml-[20px]',
    'sm:text-[6rem] sm:mb-[10px] sm:ml-[30px]',
  ],
  summary: [
    'text-2xl relative z-2 mx-[20px] mb-[30px]',
    'sm:text-[4rem] sm:leading-[1.2] sm:mx-[30px] sm:mb-[50px]',
  ],
  tabsNav: [
    'font-display flex flex-row gap-[8px] relative z-10 mx-[22px] justify-between',
    'sm:gap-[36px] sm:ml-[30px] sm:justify-start'
  ],
  tabsNavItem: [
    'z-1 mb-[30px] hover:text-shadow-[-4px_-1px_5px_rgb(158_158_158_/_0.6)] cursor-pointer',
    'text-xl',
    'sm:text-4xl sm:hover:text-shadow-[-10px_-10px_5px_rgb(158_158_158_/_0.9)]'
  ],
  tabsContainer: [
    'flex flex-col flex-grow justify-between border-b-[10px] border-b-black'
  ],
  siteContent: [
    'flex flex-col justify-start h-full pt-10 max-w-[1200px] my-0 mx-auto'
  ]
});

const App = () => {
  const viewportSize = useViewportSize();
  const isMobile = viewportSize.width < 640;
  const fruitGroupPos = isMobile ? [2, 3, 0] : [6, 2.75, -0.8];

  
  return (
    <div className="h-screen" style={{ height: '100dvh' }}>
      <div className="relative w-full h-full">
        <div className={styles.siteContent}>
          <h1 className={styles.title}>EMMA GARDNER</h1>
          <Tabs className={styles.tabsContainer}>
            <div className={styles.tabsNav}>
              <Tab index={0}><span className={styles.tabsNavItem}><h2>Home</h2></span></Tab>
              <Tab index={1}><span className={styles.tabsNavItem}><h2>Projects</h2></span></Tab>
              <Tab index={2}><span className={styles.tabsNavItem}><h2>Skills</h2></span></Tab>
              <Tab index={3}><span className={styles.tabsNavItem}><h2>Contact</h2></span></Tab>
            </div>
            <div className="mt-[30px] sm:mt-[50px] h-full">
              <TabPanel index={0} className="h-full flex flex-col justify-end">
                <p className={styles.summary}>A reliable full-stack engineer with a proven ability to build dynamic, scalable, and technology-agnostic web experiences.</p>
                <div className="absolute top-0 bottom-0 right-0 left-0">
                  <Canvas camera={ {fov: 75, near: 0.1, far: 1000, position: [1, 0, 6]} }>
                    <Environment files={"background-home.jpeg"}/>
                    <ambientLight intensity={0.7} />
                    <spotLight color="#ffffff" position={[3, 1, 4]}  intensity={1} castShadow={true} />
                    <directionalLight color="#f4c5e0" position={[12, 4, 1]} intensity={1} />
                    <directionalLight color="#ffffff" position={[0, 1, 3]} intensity={1} />
                    <FruitGroup position={fruitGroupPos} />
                  </Canvas>
                </div>
              </TabPanel>
              <TabPanel index={1} className="flex flex-col justify-end">
                <Projects />
              </TabPanel>
              <TabPanel index={2} className="flex flex-col">
                <Skills />
              </TabPanel>
              <TabPanel index={3} className="flex flex-col justify-end h-full">
                <Contact />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default App;