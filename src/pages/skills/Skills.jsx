import React from 'react';

//*-----Iconos Cards-----*//
import DownArrow from '../../../assets/downarrow.svg';
import BackIcon from '../../../assets/backend.svg';
import DesingIcon from '../../../assets/desing.svg';
import FrondIcon from '../../../assets/skillfrond.svg';

import Skill from './skill/Skill';
//*-----Iconos Front-end-----*//
import HtmlIcon from '../../../assets/html.svg';
import CssIcon from '../../../assets/css.svg';
import JavaScriptIcon from '../../../assets/javascripts.svg';
import ReactIcon from '../../../assets/react.svg';
import NextIcon from '../../../assets/nextjs.svg';
//*-----Iconos Back-end-----*//
import NodeIcon from '../../../assets/node.svg';
import PhpIcon from '../../../assets/php.svg';
//*-----Iconos Desing-----*//
import FigmaIcon from '../../../assets/figma.svg';
//*-----Data Base-----*//

import './skills.sass';

function Skills() {
  return (
    <section className="SkillsContainer">
      <h1>
        SKILLS
        <span>SKILLS</span>
      </h1>
      <div className="SkillItem">
        <Skill
          title={'Desarrollador Front-end'}
          images={[HtmlIcon, CssIcon, JavaScriptIcon, ReactIcon, NextIcon]}
          imgCard={FrondIcon}
          imgCardTwo={DownArrow}
        />
        <Skill
          title={'Desarrollador Back-end'}
          images={[NodeIcon, PhpIcon]}
          imgCard={BackIcon}
          imgCardTwo={DownArrow}
        />
      </div>
    </section>
  );
}

export default Skills;
