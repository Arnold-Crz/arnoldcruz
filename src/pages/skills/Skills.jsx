import React from 'react';

//*-----Iconos Cards-----*//
import DownArrow from '../../../assets/downarrow.svg';
import BackIcon from '../../../assets/backend.svg';
import DesingIcon from '../../../assets/desing.svg';
import FrondIcon from '../../../assets/skillfrond.svg';
import DataBaseIcon from '../../../assets/database.svg';

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
import PhotoshopIcon from '../../../assets/photoshop.svg';
//*-----Data Base-----*//
import MongoIcon from '../../../assets/mongo.svg';
import SqlIcon from '../../../assets/sql.svg';
import MySqlIcon from '../../../assets/mysql.svg';

import './skills.sass';

function Skills() {
  return (
    <section className="SkillsContainer" id="skills">
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
        <Skill
          title={'Diseñador Web'}
          images={[FigmaIcon, PhotoshopIcon]}
          imgCard={DesingIcon}
          imgCardTwo={DownArrow}
        />
        <Skill
          title={'Base de Datos'}
          images={[MongoIcon, SqlIcon, MySqlIcon]}
          imgCard={DataBaseIcon}
          imgCardTwo={DownArrow}
        />
      </div>
    </section>
  );
}

export default Skills;
