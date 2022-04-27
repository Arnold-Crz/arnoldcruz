import React, { useState } from 'react';
import Vectorcontact from '../../../assets/Vectorcontact';
import Vectorhome from '../../../assets/Vectorhome';
import Vectormenu from '../../../assets/Vectormenu';
import Vectorproyects from '../../../assets/Vectorproyects';
import Vectorservices from '../../../assets/Vectorservices';
import Vectorclose from '../../../assets/Vectorclose';
import LinkedinSvg from '../../../assets/Vectorlinkeding.svg';
import InstagramSvg from '../../../assets/Vectorinstagram.svg';
import GithubSvg from '../../../assets/Vectorgithub.svg';
import './navbar.sass';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

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
        <div className={`navMenuMobil ${isOpen ? 'active' : ''}`}>
          <ul className="navItemMenuMobil grid">
            <li className="navListmobil">
              <a href="#" className="navLinkMobile">
                <Vectorhome />
                Inicio
              </a>
            </li>

            <li className="navListmobil">
              <a href="#" className="navLinkMobile">
                <Vectorproyects />
                Proyectos
              </a>
            </li>
            <li className="navListmobil">
              <a href="#" className="navLinkMobile">
                <Vectorservices />
                Servicios
              </a>
            </li>
            <li className="navListmobil">
              <a href="#" className="navLinkMobile">
                <Vectorcontact />
                Contact
              </a>
            </li>
          </ul>
          <div className="navMobileClose">
            <Vectorclose onClick={handleOpen} />
          </div>
        </div>

        <ul className="navItemSocial">
          <a href="#">
            <img src={LinkedinSvg} alt="linkedin" />
          </a>
          <a href="#">
            <img src={InstagramSvg} alt="instagram" />
          </a>
          <a href="#">
            <img src={GithubSvg} alt="github" />
          </a>
        </ul>

        <div className="toggleMenu">
          <Vectormenu onClick={handleOpen} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
