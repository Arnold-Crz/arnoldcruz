import Whatsapp from '../../../assets/Vectorwhatsapp.svg';
import Instagram from '../../../assets/Vectorinstagram.svg';
import Email from '../../../assets/Vectoremail.svg';

import './footer.sass';

function Footer() {
  return (
    <footer className="FoterContainer">
      <div className="FoterContainer__content">
        <div className="FoterContainer__content__left">
          <h2 className="Footer__Nombre">
            Nombre<span>Arnold Cruz</span>
          </h2>
          <h2 className="Footer__Pais">
            Pais<span>Honduras</span>
          </h2>
          <h2 className="Footer__Profesiono">
            Profesion<span>Ingeniero de Software</span>
          </h2>
        </div>
        <div className="FoterContainer__content__right">
          <div>
            <img src={Whatsapp} alt="Whatsapp" />
            <h3>+504 33038039</h3>
          </div>
          <div>
            <img src={Email} alt="Email" />
            <h3>arnoldcrzdev@gmail.com</h3>
          </div>
          <div>
            <img src={Instagram} alt="Instagram" />
            <h3>@arnold_crz</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
