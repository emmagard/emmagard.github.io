import React, { useState, createContext, useContext } from "react";
const TabsContext = createContext();

export const Tabs = ({children, ...rest}) => {
  const [activeTab, setActiveTab] = useState(0);
  const className = rest.className || '';

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div
        role="tablist"
        className={className}
        {...rest}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const Tab = ({ index, onClick = null, children, ...rest }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = index === activeTab;
  const handleClick = () => {
    setActiveTab(index);
    onClick && onClick();
  };

  return (
    <div className="tab">
      <button
        role="tab"
        id={`tab-${index}`}
        aria-controls={`panel-${index}`}
        onClick={handleClick}
        className={isActive ? 'uppercase' : 'normalcase'}
        {...rest}
        aria-selected={isActive}
      >
        {children}
      </button>
    </div>
  );
};

export const TabPanel = ({ index, children, ...rest }) => {
  const { activeTab } = useContext(TabsContext);
  const className = rest.className || '';

  return index === activeTab ? (
      <div
        role="tabpanel"
        id={`panel-${index}`}
        className={`tab-panel ${className}`}
        aria-labelledby={`tab-${index}`}
        aria-hidden={index !== activeTab}
        {...rest}
      >
        {children}
      </div>
  ) : null
};