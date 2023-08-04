import { Link } from 'react-router-dom';
import logo from '../../assets/profil/blank-profile-picture-gf70664b5b_1280.png';
import logo1 from '../../assets/profil/png-clipart-computer-icons-woman-avatar-woman-people-logo-thumbnail.png';
import './Category.scss';

function Category() {
  return (
    <div className="container">
      <h2 className="category_title">Nom de la catégorie</h2>
      <div className="category_container">
        <h3 className="gamemode">Classique</h3>
        <div className="quiz_container">
          <ul className="quiz_list">
            <li className="quiz_name">Quiz 1</li>
            <li className="quiz_name">Quiz 2</li>
            <li className="quiz_name">Quiz 3</li>
          </ul>
        </div>
      </div>
      <h3 className="rank">Classement</h3>
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

export default Category;
