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
    id: [1],
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
    id: [2],
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
    id: [1],
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
    id: [2],
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
  const [filter, setfilter] = useState(0);

  useEffect(() => {
    if (filter === 0) {
      setProject(projects);
      return;
    }
    const filterProject = projects.filter((project) =>
      project.id.includes(filter)
    );

    setProject(filterProject);
  }, [filter]);

  return (
    <section className="ProyectosContainer" id="proyectos">
      <h1>
        PROYECTOS
        <span>PROYECTOS</span>
      </h1>
      <div className="ProyectosFilter">
        <button
          onClick={() => setfilter(0)}
          className={`${filter === 0 ? 'active' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => setfilter(1)}
          className={`${filter === 1 ? 'active' : ''}`}
        >
          Desarrollo
        </button>
        <button
          onClick={() => setfilter(2)}
          className={`${filter === 2 ? 'active' : ''}`}
        >
          Diseños
        </button>
      </div>
      <Project project={project} />
    </section>
  );
}

export default Proyects;
