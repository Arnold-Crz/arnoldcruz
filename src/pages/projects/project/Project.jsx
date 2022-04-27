import React from 'react';

import ImgCompartir from '../../../../assets/compartir.svg';

import './project.sass';

function Project({ project }) {
  return (
    <div className="CardContainer">
      {project.map(({ id, imgOne, title, description, paragraph, tags }) => (
        <div className="CardItem" key={id}>
          <a href="#">
            <img src={ImgCompartir} alt="enlace" />
          </a>
          <img className="imgproject" src={imgOne} alt="project" />
          <h2>{title}</h2>
          <h3>{description}</h3>
          <p>{paragraph}</p>
          <div className="ContainerTags">
            {tags.map(({ img, name }, index) => (
              <div className="Tag" key={index}>
                <img src={img} alt="tag" />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
