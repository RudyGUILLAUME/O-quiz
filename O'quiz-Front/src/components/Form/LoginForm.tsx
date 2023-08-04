import { FormEvent } from 'react';
import Field from './Field/Field';

interface LoginFormProps {
  // valeur affichée dans le input email
  email: string;
  // valeur affichée dans le input password
  password: string;
  // fonction executée à chaque fois que le user tape dans un des inputs
  // elle reçoit en paramètre la valeur de l'input + le nom de l'input
  changeField: (value: string, name: 'email' | 'password') => void;
  // fonction executée au submit du form
  handleLogin: () => void;
  handleLogout: () => void;
  // si isLogged est faux le formulaire est affiché
  // si isLogged est true loggedMessage + un bouton de deconnexion sont affichés
  isLogged?: boolean;
  loggedMessage?: string;
}
function LoginForm({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}: LoginFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin();
  };

  const handleChangeField = (name: 'email' | 'password') => (value: string) => {
    changeField(value, name);
  };

  return (
    <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">{loggedMessage}</p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (
        <form
          autoComplete="off"
          className="login-form-element"
          onSubmit={handleSubmit}
        >
          <Field
            placeholder="Adresse Email"
            onChange={handleChangeField('email')}
            value={email}
          />
          <Field
            type="password"
            placeholder="Mot de passe"
            onChange={handleChangeField('password')}
            value={password}
          />
          <button type="submit" className="login-form-button">
            OK
          </button>
        </form>
      )}
    </div>
  );
}

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
