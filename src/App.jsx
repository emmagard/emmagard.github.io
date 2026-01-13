import './index.css';
import React, { use } from 'react';
import { useLabelledClassnames } from './shared/hooks/useLabelledClassnames.js';
import { Home } from './features/home-tab-panel';
import { Projects} from './features/project-tab-panel/components/Projects.jsx';
import { Skills } from './features/skills-tab-panel/components/Skills.jsx';
import Contact from './features/contact-tab-panel/Contact.jsx';
import { Tabs, Tab, TabPanel, TabLabel } from './features/tabs/index.js';

const styles = useLabelledClassnames({
  title: [
    'font-display',
    'text-5xl mb-[5px] ml-[20px]',
    'sm:text-[6rem] sm:mb-[10px] sm:ml-[30px]',
  ],
  tabsNav: [
    'font-display flex flex-row gap-[8px] relative z-10 mx-[22px] justify-between',
    'sm:gap-[36px] sm:ml-[30px] sm:justify-start'
  ],
  tabsContainer: [
    'flex flex-col flex-grow justify-between border-b-[10px] border-b-black'
  ],
  tabPanel: [
    'flex flex-col'
  ],
  siteContent: [
    'flex flex-col justify-start h-full pt-10 max-w-[1200px] my-0 mx-auto'
  ]
});

const App = () => {
  return (
    <div className="h-screen" style={{ height: '100dvh' }}>
      <div className="relative w-full h-full">
        <div className={styles.siteContent}>
          <h1 className={styles.title}>EMMA GARDNER</h1>
          <Tabs className={styles.tabsContainer}>
            <div className={styles.tabsNav}>
              <Tab index={0}><TabLabel>Home</TabLabel></Tab>
              <Tab index={1}><TabLabel>Projects</TabLabel></Tab>
              <Tab index={2}><TabLabel>Skills</TabLabel></Tab>
              <Tab index={3}><TabLabel>Contact</TabLabel></Tab>
            </div>
            <div className="mt-[30px] sm:mt-[50px] h-full">
              <TabPanel index={0} className={`${styles.tabPanel} h-full justify-end`}>
                <Home />
              </TabPanel>
              <TabPanel index={1} className={`${styles.tabPanel} justify-end`}>
                <Projects />
              </TabPanel>
              <TabPanel index={2} className={`${styles.tabPanel}`}>
                <Skills />
              </TabPanel>
              <TabPanel index={3} className={`${styles.tabPanel} h-full justify-end`}>
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