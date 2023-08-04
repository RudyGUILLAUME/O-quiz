import React from 'react';

import './Contact.scss';

function Contact() {
  return (
    <div className="main-containers">
      <h2 className="Titre">Ceci est la page de contact</h2>
      <div className="containner">
        <form action="#" method="post">
          <div className="name__fields">
            <div>
              <label htmlFor="nom">Nom :</label>
              <input type="text" id="nom" name="nom" required />
            </div>
            <div>
              <label htmlFor="prenom">Prénom :</label>
              <input type="text" id="prenom" name="prenom" required />
            </div>
          </div>

          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="sujet">Sujet de la demande :</label>
          <input type="text" id="sujet" name="sujet" required />

          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" required></textarea>

          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
