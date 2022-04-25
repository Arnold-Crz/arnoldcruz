import React from 'react';

import './services.sass';

import ImgServicesOne from '../../../assets/servicesone.svg';
import IconArrow from '../../../assets/servicesarrow.svg';
import ImgServicesTwo from '../../../assets/servicesdesing.svg';

function Services() {
  const handleOpen = (e) => {
    const ClassOne = e.target.nextElementSibling;
    if (ClassOne !== 'active') {
      ClassOne.classList.add('active');
    }
  };

  const handleClose = (e) => {
    const ClassTwo = e.target.parentElement;
    if (ClassTwo !== 'active') {
      ClassTwo.classList.remove('active');
    }
  };

  return (
    <div className="ServiciosContent">
      <h1>SERVICIOS</h1>
      <span>SERVICIOS</span>
      <section>
        <article>
          <div className="ServicesData">
            <h2 className="color">PROGRAMADOR WEB</h2>
            <img src={ImgServicesOne} alt="servicesOne" />
            <p>
              Brindo soluciones tecnologicas, cumpliendo con cada uno de los
              requerimientos y objetivos que necesites al contratar mis
              servicios como programador (desarrollo de un portafolio, pagina
              web, e-commerce, apliacion web.)
            </p>
            <button onClick={(e) => handleOpen(e)}>LEER MAS</button>
            <div className="MasInfo">
              <h3>
                Brindo soluciones tecnologicas, cumpliendo con cada uno de los
                requerimientos y objetivos que necesites al contratar mis
                servicios como programador (desarrollo de un portafolio, pagina
                web, e-commerce, apliacion web.)
              </h3>
              <img
                src={IconArrow}
                alt="arrow"
                onClick={(e) => handleClose(e)}
              />
            </div>
          </div>

          <div className="ServicesData">
            <h2 className="color">PROGRAMADOR WEB</h2>
            <img src={ImgServicesTwo} alt="servicesOne" />
            <p>
              Brindo soluciones tecnologicas, cumpliendo con cada uno de los
              requerimientos y objetivos que necesites al contratar mis
              servicios como programador (desarrollo de un portafolio, pagina
              web, e-commerce, apliacion web.)
            </p>
            <button onClick={(e) => handleOpen(e)}>LEER MAS</button>
            <div className="MasInfo">
              <h3>
                Brindo soluciones tecnologicas, cumpliendo con cada uno de los
                requerimientos y objetivos que necesites al contratar mis
                servicios como programador (desarrollo de un portafolio, pagina
                web, e-commerce, apliacion web.)
              </h3>
              <img
                src={IconArrow}
                alt="arrow"
                onClick={(e) => handleClose(e)}
              />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Services;
