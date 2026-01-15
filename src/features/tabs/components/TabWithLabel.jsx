import { useLabelledClassnames } from '../../../shared/hooks/useLabelledClassnames.js';
import { sendGATabClick } from '../../../shared/hooks/useGoogleAnalytics.js';
import { Tab } from './Tabs.jsx';

const styles = useLabelledClassnames({
  tabsNavItem: [
    'z-1 mb-[30px] hover:text-shadow-[-4px_-1px_5px_rgb(158_158_158_/_0.6)] cursor-pointer',
    'text-xl',
    'sm:text-4xl sm:hover:text-shadow-[-10px_-10px_5px_rgb(158_158_158_/_0.9)]'
  ]
});

export const TabWithLabel = ({ index, tabLabel }) => {
  const handleTabClick = () => sendGATabClick(tabLabel);

  return (
    <Tab index={index} onClick={handleTabClick}>
      <h2 className={styles.tabsNavItem}>{tabLabel}</h2>
    </Tab>
  );
};

export default TabWithLabel;