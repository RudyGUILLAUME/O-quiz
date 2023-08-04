import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.scss';
import { NavLink } from 'react-router-dom';
import WoW from '../../../assets/images/WoW.png';
import Kaamelott from '../../../assets/images/kaamelott.png';
import Fromage from '../../../assets/images/fromage.png';

/* TODO : 
- Faire un appel API pour récupérer l'image / l'ID des différents quiz 
-
-
*/

function Slider() {
  const datas = [
    {
      id: 1,
      image: WoW,
      title: 'World of Warcraft',
      slug: 'World-of-Warcraft',
      text: `Vous êtes vous déjà perdu dans la forêt d'Elwynn, ou dans Durotar ? `,
    },
    {
      id: 2,
      image: Kaamelott,
      title: 'Kaamelott',
      text: `La seule réponse de ce quiz est "C'est pas faux"`,
    },
    {
      id: 3,
      image: Fromage,
      title: 'Le Fromage',
      text: `Sommes nous d'accord, pour dire que le Babybel ou la vache qui rit, sont les meilleurs fromages français ?`,
    },
    {
      id: 4,
      image: WoW,
      title: 'Football',
      text: `Savez vous le point commun entre Thierry Henry et Maradonna (non ce n'est pas la coke) c'est la main qui a permis de marquer un but`,
    },
    {
      id: 5,
      image: Fromage,
      title: 'Star Wars',
      text: `Piou piou piou (Non ce n'est pas le poussin), c'est un stormtrooper qui tire`,
    },
    {
      id: 6,
      image: Kaamelott,
      title: 'Final Fantasy VII',
      text: `Un quiz sur qui a la plus grosse épée `,
    },
  ];
  return (
    <Carousel
      autoPlay // Permet de jouer le carousel en automatique
      interval={6000} // Avec un interval de 6 sec
      infiniteLoop // Sur une boucle infinie
      thumbWidth={120} // Modifie la taille du slider (petites images en bas du gros slider)
      showIndicators={false} // Cache les dots des différentes images
      showStatus={false} // Cache les n° d'images
    >
      {/* On boucle sur le tableau de data pour récupérer les différents top quiz /les images des top quiz / le titre du Quiz / la description */}
      {datas.map((slide) => (
        <div key={slide.id} className="container">
          <img src={slide.image} alt="" />
          <div className="overlay">
            <h3 className="overlay__title">{slide.title}</h3>
            <p className="overlay__text">{slide.text}</p>
            <NavLink to={`/quiz/${slide.slug}`}>
              Jouez à ce quiz! Parce que vous êtes toutes et tous magnifique
            </NavLink>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
export default Slider;
