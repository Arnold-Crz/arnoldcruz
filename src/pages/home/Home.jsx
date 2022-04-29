import React from 'react';
import Homejavascripts from '../../../assets/homejavascripts.svg';
import Homecss from '../../../assets/homecss.svg';
import Homehtml from '../../../assets/homehtml.svg';
import Homenext from '../../../assets/homenext.svg';
import Homereact from '../../../assets/homereact.svg';

// social import
import Vectortwitter from '../../../assets/Vectortiwtter.svg';
import Vectorlinkedin from '../../../assets/Vectorlinkeding.svg';
import VectorInstagram from '../../../assets/Vectorinstagram.svg';
import Vectorwhatsapp from '../../../assets/Vectorwhatsapp.svg';

import Navbar from '../../components/navbar/Navbar';

import './home.sass';

function Home() {
  return (
    <section className="home" id="home">
      <Navbar />
      <h1>Hola👋, soy</h1>
      <div className="homeContent">
        <div className="homeContenHeader">
          <div className="homeContentImg">
            <img src="../../../assets/my.png" alt="cruz" />
            <ul>
              <li>
                <img src={Homejavascripts} alt="Homejavascripts" />
              </li>
              <li>
                <img src={Homecss} alt="Homecss" />
              </li>
              <li>
                <img src={Homehtml} alt="Homehtml" />
              </li>
              <li>
                <img src={Homenext} alt="Homenext" />
              </li>
              <li>
                <img src={Homereact} alt="Homereact" />
              </li>
            </ul>
          </div>
        </div>
        <div className="HomeContentSocial">
          <ul>
            <li>
              <img src={Vectortwitter} alt="Vectortwitter" />
            </li>
            <li>
              <img src={Vectorlinkedin} alt="Vectorlinkedin" />
            </li>
            <li>
              <img src={VectorInstagram} alt="VectorInstagram" />
            </li>
            <li>
              <img src={Vectorwhatsapp} alt="Vectorwhatsapp" />
            </li>
          </ul>
        </div>
        <div className="HomeContentInfo">
          <h2>Arnold cruz</h2>
          <p>Desarrollador Frontend</p>
          <p>Ingeniero de Software especializado en las tecnologias web </p>
        </div>

        <div className="BtnCv">
          <a href="#">CV</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
