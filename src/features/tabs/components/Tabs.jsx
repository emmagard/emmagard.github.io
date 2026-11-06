import React, { useState, createContext, useContext, useEffect } from "react";
import { TAB_COUNT } from "../../../shared/constants";
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
  const isValidIndex = (i) => i >= 0 && i < TAB_COUNT;
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab');
    const parsedTab = tabParam ? parseInt(tabParam) : 0;
    if (isValidIndex(parsedTab)) {
      setActiveTab(parsedTab);
    } else {
      setActiveTab(0); // Default to the first tab if no 'tab' parameter is present or if it's out of range
    }
  }, []);

  
  const handleClick = (index) => {
    setActiveTab(index);
    const url = new URL(window.location);

    // Update the URL with the selected tab index unless it's the first tab (index 0), 
    // in which case we remove the 'tab' for a traditional homepage URL.
    if (index === 0) {
      url.searchParams.delete('tab');
    } else if (isValidIndex(index)) {
      url.searchParams.set('tab', index);
    }
    
    // Update the browser's URL without reloading the page
    window.history.pushState({}, '', url);

    // add backbutton functionality to the browser history
    window.onpopstate = () => {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      const parsedTab = tabParam ? parseInt(tabParam) : 0;
      if (isValidIndex(parsedTab)) {
        setActiveTab(parsedTab);
      } else {
        setActiveTab(0); // Default to the first tab if no 'tab' parameter is present
      }
    }
  
    onClick && onClick();
  };


  return (
    <div className="tab">
      <button
        role="tab"
        id={`tab-${index}`}
        aria-controls={`panel-${index}`}
        onClick={() => handleClick(index)}
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