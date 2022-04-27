import React, { useState, useRef, useEffect } from 'react';
import Project from './project/Project';
import './projects.sass';

import ImgProject from '../../../assets/imgproject.svg';
import ImgCss from '../../../assets/css.svg';
import ImgHtml from '../../../assets/html.svg';
import ImgJs from '../../../assets/javascripts.svg';
import ImgReact from '../../../assets/react.svg';
import ImgSass from '../../../assets/sass.svg';
import ImgFigma from '../../../assets/figma.svg';

const projects = [
  {
    id: 1,
    imgOne: ImgProject,
    title: 'Web',
    description: 'landing page food',
    paragraph: 'Tecnologias Web',

    tags: [
      {
        img: ImgHtml,
        name: 'HTML',
      },
      {
        img: ImgCss,
        name: 'CSS',
      },
      {
        img: ImgJs,
        name: 'JS',
      },
      {
        img: ImgReact,
        name: 'React',
      },
      {
        img: ImgSass,
        name: 'Sass',
      },
    ],
  },
  {
    id: 2,
    imgOne: ImgProject,
    title: 'Diseño',
    description: 'landing page food',
    paragraph: 'Tecnologias de diseño',
    tags: [
      {
        img: ImgFigma,
        name: 'Figma',
      },
    ],
  },
  {
    id: 3,
    imgOne: ImgProject,
    title: 'Web',
    description: 'landing page servicios',
    paragraph: 'Tecnologias Web',
    tags: [
      {
        img: ImgHtml,
        name: 'HTML',
      },
      {
        img: ImgCss,
        name: 'CSS',
      },
      {
        img: ImgJs,
        name: 'JS',
      },
      {
        img: ImgReact,
        name: 'React',
      },
      {
        img: ImgSass,
        name: 'Sass',
      },
    ],
  },
  {
    id: 4,
    imgOne: ImgProject,
    title: 'Diseño',
    description: 'landing page servicios',
    paragraph: 'Tecnologias de Diseño',
    tags: [
      {
        img: ImgFigma,
        name: 'Figma',
      },
    ],
  },
];

function Proyects() {
  const [project, setProject] = useState(projects);
  const [All, setAll] = useState(true);
  const [Web, setWeb] = useState(false);
  const [Design, setDesign] = useState(false);

  const all = () => {
    setAll(!All);
    setWeb(false);
    setDesign(false);
  };

  const web = () => {
    setWeb(!Web);
    setAll(false);
    setDesign(false);
  };

  const design = () => {
    setDesign(!Design);
    setAll(false);
    setWeb(false);
  };

  const filterAll = () => {
    setProject(projects);
    all();
  };

  const filterDesing = () => {
    const filter = projects.filter((project) => project.title !== 'Web');
    setProject(filter);
    design();
  };

  const filterWeb = () => {
    const filter = projects.filter((project) => project.title !== 'Diseño');
    setProject(filter);
    web();
  };

  return (
    <section className="ProyectosContainer">
      <h1>
        PROYECTOS
        <span>PROYECTOS</span>
      </h1>
      <div className="ProyectosFilter">
        <button onClick={filterAll} className={`${All ? 'active' : ''}`}>
          All
        </button>
        <button onClick={filterDesing} className={`${Design ? 'active' : ''}`}>
          Diseños
        </button>
        <button onClick={filterWeb} className={`${Web ? 'active' : ''}`}>
          Desarrollo
        </button>
      </div>
      <Project project={project} />
    </section>
  );
}

export default Proyects;
