import React, { useState } from 'react';

import './services.sass';

import ImgServicesOne from '../../../assets/servicesone.svg';
import IconArrow from '../../../assets/servicesarrow.svg';

const services = [
  {
    title: 'PROGRAMADOR WEB',
    img: ImgServicesOne,
    descriptionFront:
      'Brindo soluciones tecnologicas, cumpliendo con cada uno de los requerimientos y objetivos que necesites al contratar mis servicios  como programador (desarrollo de un portafolio, pagina web, e-commerce, apliacion web.)',
    descriptionBack:
      'Brindo soluciones tecnologicas, cumpliendo con cada uno de los requerimientos y objetivos que necesites al contratar mis servicios  como programador (desarrollo de un portafolio, pagina web, e-commerce, apliacion web.)',
  },
];

function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="ServiciosContent">
      <h1>SERVICIOS</h1>
      <span>SERVICIOS</span>
      <section>
        <article>
          {services.map((ser) => (
            <div className="ServicesData">
              <h2>{ser.title}</h2>
              <img src={ser.img} alt="servicesOne" />
              <p>{ser.descriptionFront}</p>
              <button onClick={handleOpen}>LEER MAS</button>
              <div className={`MasInfo ${isOpen ? 'active' : ''}`}>
                <h3>{ser.descriptionBack}</h3>
                <img src={IconArrow} alt="arrow" onClick={handleOpen} />
              </div>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
}

export default Services;
