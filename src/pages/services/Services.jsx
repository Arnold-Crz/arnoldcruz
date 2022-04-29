import React from 'react';

import './services.sass';

import ImgServicesOne from '../../../assets/imgone.svg';
import ImgServicesTwo from '../../../assets/imgtwo.svg';
import ImgServicesThree from '../../../assets/imgthree.svg';
import IconArrow from '../../../assets/servicesarrow.svg';

const services = [
  {
    id: 1,
    title: 'PROGRAMADOR WEB',
    img: ImgServicesOne,
    descriptionBack:
      'Brindo soluciones tecnologicas, cumpliendo con cada uno de los requerimientos y objetivos que necesites al contratar mis servicios  como programador (desarrollo de un portafolio, pagina web, e-commerce, apliacion web.)',
  },
  {
    id: 2,
    title: 'DISEÑADOR WEB',
    img: ImgServicesTwo,
    descriptionBack:
      'Necesitas ayuda para un diseño web moderno profesional y así ofrecer tus productos o servicios a tus clientes, brindándoles una mejor expericia de visualización.',
  },
  {
    id: 3,
    title: 'TECNICO INFORMATICO',
    img: ImgServicesThree,
    descriptionBack:
      'Necesitas ayuda profesional para administrar o dar mantenimiento a tus equipos informaticos o darles una mejor rendimiento y funcionamiento.',
  },
];

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
    <section className="ServiciosContainer" id="servicios">
      <h1>
        SERVICIOS
        <span>SERVICIOS</span>
      </h1>
      <article>
        {services.map(({ id, title, img, descriptionBack }) => (
          <div className="ServicesData" key={id}>
            <h2 className="color">{title}</h2>
            <img src={img} alt="servicesOne" />
            <button onClick={(e) => handleOpen(e)}>Ver mas</button>
            <div className="MasInfo">
              <h3>{descriptionBack}</h3>
              <img
                src={IconArrow}
                alt="arrow"
                onClick={(e) => handleClose(e)}
              />
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Services;
