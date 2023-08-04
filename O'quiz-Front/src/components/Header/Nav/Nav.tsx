import './Nav.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { openModal, logOut } from '../../../store/reducers/user';
import ConnectionModal from '../../Modals/ConnectionModal/ConnectionModal';

function Nav() {
  // a state for displaying the content of the burger menu, by default we set it to false
  const [isOpen, setIsOpen] = useState(false);

  // a function that inverts the value of state
  const handleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };
  const logged = useAppSelector((state) => state.user.logged);
  const toggleConnectionModal = useAppSelector(
    (state) => state.user.toggleConnectionModal
  );
  const dispatch = useAppDispatch();
  const openConnectionModal = () => {
    dispatch(openModal());
  };
  const handleLogout = () => {
    // deconnecter le user = mettre logged à false et supprimer le pseudo et le token
    // on demande au reducer de faire ça car c'est son role
    dispatch(logOut());
  };

  return (
    <nav className={isOpen ? 'show-nav navbar' : 'navbar'}>
      <ul className="navbar__links">
        <li className="navbar__item">
          <NavLink
            to="/categories"
            className={
              // callback qui reçoit en param un boolen isActive et qui renvoie la classe à afficher
              ({ isActive }) =>
                isActive
                  ? 'navbar__link navbar__link--selected'
                  : 'navbar__link'
            }
          >
            Catégories
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/classements"
            className={
              // callback qui reçoit en param un boolen isActive et qui renvoie la classe à afficher
              ({ isActive }) =>
                isActive
                  ? 'navbar__link navbar__link--selected'
                  : 'navbar__link'
            }
          >
            Classements
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/profil"
            className={
              // callback qui reçoit en param un boolen isActive et qui renvoie la classe à afficher
              ({ isActive }) =>
                isActive
                  ? 'navbar__link navbar__link--selected'
                  : 'navbar__link'
            }
          >
            Profil
          </NavLink>
        </li>
        <button
          type="button"
          className="navbar__item navbar__button"
          onClick={() => {
            if (logged === false) {
              openConnectionModal();
            } else {
              handleLogout();
            }
          }}
        >
          {logged === false ? 'Connexion' : 'Déconnexion'}
        </button>
        <ConnectionModal />
      </ul>
      <button
        type="button"
        className="navbar__burger"
        // we call the function "handleBurgerMenu" (that modifies the value of the state)
        // when the button is clicked
        onClick={handleBurgerMenu}
      >
        <span className="burger-bar" />
      </button>
    </nav>
  );
}
export default Nav;
