import { useRef, useState } from 'react';
import BtnUp from '../../../assets/btnup.svg';
import './button.sass';

function ButtonUp() {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useState(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`Button__Up ${isVisible ? 'active' : ''}`}
      onClick={handleClick}
    >
      <img src={BtnUp} alt="up" />
    </button>
  );
}

export default ButtonUp;
