import React from 'react';
import './navbar.sass';

function Navbar() {
  return (
    <nav className="navContainer">
      <div className="navList">
        <div className="navItemLogo">
          <a href="#">Cruz</a>
        </div>
        <ul className="navItemMenu">
          <a className="active" href="#">
            Inicio
          </a>
          <a href="#">Servicios</a>
          <a href="#">Proyectos</a>
          <a href="#">Contacto</a>
          <span className="start-home effect"></span>
        </ul>
        <ul className="navItemSocial">
          <a href="#">
            <img src="../../../assets/Vectorgithub.svg" alt="Github" />
          </a>
          <a href="#">
            <img src="../../../assets/Vectorlinkedin.svg" alt="Linkedin" />
          </a>
          <a href="#">
            <img src="../../../assets/Vectortwitter.svg" alt="Twitter" />
          </a>
        </ul>

        <img
          className="toggleMenu"
          src="../../../assets/Vectormenu.svg"
          alt=""
        />
      </div>
    </nav>
  );
}

export default Navbar;
