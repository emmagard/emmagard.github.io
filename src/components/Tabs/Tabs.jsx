import React, { useState, createContext, useContext } from "react";

const TabContext = createContext();

const Tabs = ({children, ...rest}) => {
  const [activeTab, setActiveTab] = useState(0);
  const className = rest.className || '';

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div role="tablist" className={className}>{children}</div>
    </TabContext.Provider>
  );
};

const Tab = ({ index, children }) => {
  const { activeTab, setActiveTab } = useContext(TabContext);

  return (
    <div className="tab">
      <button
        role="tab"
        id={`tab-${index}`}
        aria-controls={`panel-${index}`}
        onClick={() => setActiveTab(index)}
        className={index === activeTab ? 'uppercase' : 'normalcase'}
        aria-selected={index === activeTab}
      >
        {children}
      </button>
    </div>
  );
};

const TabPanel = ({ index, children, ...rest }) => {
  const { activeTab } = useContext(TabContext);
  const className = rest.className || '';


  return index === activeTab ? (
      <div
        role="tabpanel"
        id={`panel-${index}`}
        className={`tab-panel ${className}`}
        aria-labelledby={`tab-${index}`}
        aria-hidden={index !== activeTab}
      >
        {children}
      </div>
  ) : null
}

export {
  Tabs,
  Tab,
  TabPanel,
};