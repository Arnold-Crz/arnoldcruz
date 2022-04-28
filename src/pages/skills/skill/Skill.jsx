import React, { useRef } from 'react';

import './skill.sass';

function Skill({ title, images, imgCard, imgCardTwo }) {
  const card = useRef();

  const activeCard = (e) => {
    const Class = e.target;
    Class.classList.toggle('active');
    card.current.classList.toggle('active');
  };

  return (
    <div className="Skills">
      <img className="FrondIcon" src={imgCard} alt="FrondIcon" />
      <h2>{title}</h2>
      <button onClick={(e) => activeCard(e)}>
        <img className="DownArrow" src={imgCardTwo} alt="DownArrow" />
      </button>
      <div ref={card} className={`ContentIcons `}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={image} />
        ))}
      </div>
    </div>
  );
}

export default Skill;
