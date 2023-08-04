import React, { useState } from 'react';
import LoginForm from '../../Form/LoginForm';
import CreationForm from '../../Form/CreationForm';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  checkLogin,
  logOut,
  setInput,
  closeModal,
  swapForm,
} from '../../../store/reducers/user';
import './ConnectionModal.scss';

function ConnectionModal() {
  // pour pratiquer redux aller chercher des valeurs dans le store pour piloter mes input
  // 1- avoir dans le state des valeur pour piloter les input
  // 2- forcer les value des input avec les valeurs du state
  const email = useAppSelector((state) => state.user.email);
  const password = useAppSelector((state) => state.user.password);
  const pseudo = useAppSelector((state) => state.user.pseudo);
  const logged = useAppSelector((state) => state.user.logged);
  const error = useAppSelector((state) => state.user.error);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const toggleForm = useAppSelector((state) => state.user.toggleForm);
  const toggleConnectionModal = useAppSelector(
    (state) => state.user.toggleConnectionModal
  );

  // 3- au change dispatcher une action pour changer la valeur dans le state
  const dispatch = useAppDispatch();
  const changeField = (
    value: string,
    name: 'pseudo' | 'email' | 'password'
  ) => {
    // au change on dispatch l'action pour modifier le state
    dispatch(setInput({ value, name }));
  };

  const handleLogin = () => {
    // envoyer les valeurs email et password au back pour qu'il verifie si on est authentifié
    // on demande à un thunk de faire cette requete car c'est son role
    dispatch(checkLogin());
  };
  const handleToggleForm = () => {
    dispatch(swapForm());
  };
  const closeConnectionModal = () => {
    dispatch(closeModal());
  };

  const handleCreate = () => {
    // envoyer les valeurs email et password au back pour qu'il verifie si on est authentifié
    // on demande à un thunk de faire cette requete car c'est son role
    // todo dispatch(createAccount());
  };

  const handleLogout = () => {
    // deconnecter le user = mettre logged à false et supprimer le pseudo et le token
    // on demande au reducer de faire ça car c'est son role
    dispatch(logOut());
  };

  if (!toggleConnectionModal) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        <button
          type="button"
          onClick={() => closeConnectionModal()}
          className="closeBtn"
        >
          X
        </button>
        {logged === false && (
          <button
            type="button"
            onClick={() => handleToggleForm()}
            className="account-creation-button"
          >
            {toggleForm === false
              ? 'Creer un compte?'
              : 'Retour à la connexion'}
          </button>
        )}

        {toggleForm === false && (
          <div>
            <LoginForm
              // valeur affichée dans le input email
              email={email}
              // valeur affichée dans le input password
              password={password}
              // fonction executée à chaque fois que le user tape dans un des inputs
              // et elle reçoit en paramètre la valeur de l'input + le nom de l'input
              changeField={changeField}
              // fonction executée au submit du form
              handleLogin={handleLogin}
              handleLogout={handleLogout}
              // si isLogged est faux le formulaire est affiché
              // si isLogged est true loggedMessage + un bouton de deconnexion sont affichés
              isLogged={logged}
              loggedMessage={`Bienvenue ${pseudo}`}
            />
            <div> {error}</div>
          </div>
        )}
        {toggleForm === true && (
          <div>
            <CreationForm
              // valeur affichée dans le input pseudo
              pseudo={pseudo}
              // valeur affichée dans le input email
              email={email}
              // valeur affichée dans le input password
              password={password}
              // fonction executée à chaque fois que le user tape dans un des inputs
              // et elle reçoit en paramètre la valeur de l'input + le nom de l'input
              changeField={changeField}
              // fonction executée au submit du form
              handleCreate={handleCreate}
              // si isCreated est faux le formulaire est affiché
              // si isCreated est true createdMessage est afficher
              // TODO isCreated={created}
              createdMessage={`Bienvenue ${pseudo}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ConnectionModal;
