import React, { useState, useEffect } from 'react';

const getViewportSize = () => {
  if (!window) return { width: 0, height: 0 };
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

export const useViewportSize = () => {
  const [viewportSize, setViewportSize] = useState(getViewportSize());

  useEffect(() => {
    const handleResize = () => {
      setViewportSize(getViewportSize());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return viewportSize;
}