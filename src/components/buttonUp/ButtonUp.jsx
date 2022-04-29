import { useRef, useState } from 'react';
import BtnUp from '../../../assets/btnup.svg';
import './button.sass';

function ButtonUp() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const refUp = useRef();

  const handleScroll = () => {
    if (window.pageYOffset > 500) {
      refUp.current?.classList?.add('active');
    } else {
      refUp.current?.classList?.remove('active');
    }
  };

  useState(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <button ref={refUp} className="ButtonUp" onClick={handleClick}>
      <img src={BtnUp} alt="up" />
    </button>
  );
}

export default ButtonUp;
