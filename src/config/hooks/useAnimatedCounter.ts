import { useState, useEffect } from 'react';


export const useAnimatedCounter = (endValue: number, duration: number = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOutProgress * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);

  }, [endValue, duration]);

  return count;
};