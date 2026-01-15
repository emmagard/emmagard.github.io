export const sendGATabClick = (tabLabel) => {
  if (!window.gtag) return false;
  
  gtag('event', 'tab_click', {
    event_category: 'engagement',
    event_label: tabLabel
  });
};
