import Slider from './Slider/Slider';
import './Home.scss';
import logo from '../../assets/profil/blank-profile-picture-gf70664b5b_1280.png';
import logo1 from '../../assets/profil/png-clipart-computer-icons-woman-avatar-woman-people-logo-thumbnail.png';
/* TODO : 

- Faire un appel API pour récupérer le pseudo / l'image de profil / le score du joueur pour le classement 

*/
function Home() {
  return (
    <div className="content">
      <h2 className="header__title">Top quiz</h2>
      <Slider />
      {/* <button type="button" className="chatButton">
        T
      </button> */}
      <div className="ranking__top">
        <ul className="best__player">
          <li className="top__one">1</li>
          <li className="top__two">2</li>
          <li className="top__three">3</li>
        </ul>
      </div>
      <div className="container__bottom">
        <div className="ranking__bottom">
          <ul className="top__ten">
            <li className="rank__bottom">
              04 <img src={logo} alt="profil" className="logo__rank__bottom" />
              <p className="pseudo">Pseudo</p>
              <p className="total__score">150 pts</p>
            </li>
            <li className="rank__bottom">
              05 <img src={logo1} alt="profil" className="logo__rank__bottom" />
              <p className="pseudo">Pseudo</p>
              <p className="total__score">148 pts</p>
            </li>
            <li className="rank__bottom">
              06 <img src={logo1} alt="profil" className="logo__rank__bottom" />
              <p className="pseudo">Pseudo</p>
              <p className="total__score">147 pts</p>
            </li>
            <li className="rank__bottom">
              07 <img src={logo} alt="profil" className="logo__rank__bottom" />
              <p className="pseudo">Pseudo</p>
              <p className="total__score">130 pts</p>
            </li>
            <li className="rank__bottom">
              08 <img src={logo1} alt="profil" className="logo__rank__bottom" />
              <p className="pseudo">Pseudo</p>
              <p className="total__score">121 pts</p>
            </li>
            <li className="rank__bottom">
              09 <img src={logo} alt="profil" className="logo__rank__bottom" />
              <p className="pseudo">Pseudo</p>
              <p className="total__score">120 pts</p>
            </li>
            <li className="rank__bottom">
              10 <img src={logo} alt="profil" className="logo__rank__bottom" />
              <p className="pseudo">Pseudo</p>
              <p className="total__score">112 pts</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
