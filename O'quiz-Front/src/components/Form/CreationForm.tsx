import { FormEvent } from 'react';
import Field from './Field/Field';

interface CreationFormProps {
  pseudo: string;
  // valeur affichée dans le input email
  email: string;
  // valeur affichée dans le input password
  password: string;
  // fonction executée à chaque fois que le user tape dans un des inputs
  // elle reçoit en paramètre la valeur de l'input + le nom de l'input
  changeField: (value: string, name: 'pseudo' | 'email' | 'password') => void;
  // fonction executée au submit du form
  handleCreate: () => void;

  // si isLogged est faux le formulaire est affiché
  // si isLogged est true loggedMessage + un bouton de deconnexion sont affichés
  isCreated?: boolean;
  createdMessage?: string;
}
function CreationForm({
  pseudo,
  email,
  password,
  changeField,
  handleCreate,
  isCreated,
  createdMessage,
}: CreationFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCreate();
  };

  const handleChangeField =
    (name: 'pseudo' | 'email' | 'password') => (value: string) => {
      changeField(value, name);
    };

  return (
    <div className="creation-form">
      {isCreated && (
        <div className="creation-form-logged">
          <p className="creation-form-message">{createdMessage}</p>
          <button type="button" className="creation-form-button">
            X
          </button>
        </div>
      )}
      {!isCreated && (
        <form
          autoComplete="off"
          className="Creation-form-element"
          onSubmit={handleSubmit}
        >
          <Field
            placeholder="Pseudo"
            onChange={handleChangeField('pseudo')}
            value={pseudo}
          />
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
            Valider
          </button>
        </form>
      )}
    </div>
  );
}

CreationForm.defaultProps = {
  isCreated: false,
  createdMessage: 'Compte Crée',
};

export default CreationForm;
