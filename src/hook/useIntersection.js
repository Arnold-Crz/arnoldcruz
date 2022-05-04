import { useState, useEffect } from 'react';

const useIntersection = ({ elementObserver }) => {
  const [show, setShow] = useState(false);
  let observer;

  useEffect(() => {
    const callback = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        console.log(el.isIntersecting);
        setShow(true);
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

    observer.observe(elementObserver.current);
  }, []);

  return show;
};

export default useIntersection;
