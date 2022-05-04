import { useState, useEffect, useRef } from 'react';

const useIntersection = () => {
  const [showScreen, setShowScreen] = useState(false);
  const elemenRef = useRef(null);
  let observer;

  useEffect(() => {
    const callback = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShowScreen(true);
        observer.disconnect();
      }
      return () => observer.disconnect();
    };

    let options = {
      root: null,
      rootMargin: '500px',
      threshold: 0.01,
    };

    observer = new IntersectionObserver(callback, options);

    observer.observe(elemenRef.current);
  }, [showScreen, elemenRef]);

  return { showScreen, elemenRef };
};

export default useIntersection;
