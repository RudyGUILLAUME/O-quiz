import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import actionFetchCategories from '../../store/thunks/categories';
import Loading from './Loading/Loading';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Categories from '../Categories/Categories';
import Category from '../Category/Category';
import ErrorPage from '../ErrorPage/ErrorPage';
import Classements from '../Classements/Classements';
import Profil from '../Profil/Profil';
import MentionLegales from '../MentionLegales/MentionLegales';
import Contact from '../Contact/Contact';
import QuiSommesNous from '../QuiSommesNous/QuiSommesNous';
import Quiz from '../Quiz/Quiz';

// Import du style SCSS pour APP
import './App.scss';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // au premier rendu du composant principal on veut aller fetch les categories et les enregistrer dans le state de redux
    dispatch(actionFetchCategories());
  }, [dispatch]);
  // on recupère loading depuis le state de redux
  const loading = useAppSelector((state) => state.categories.loading);

  if (loading) {
    // si on est en train de fetch les data on affiche pas les routes
    // comme ça l'url de l'api ne matche pas
    // on essaye meme pas d'affiocher la page des categories qu'on a pas encore
    // on a plus le bug de la redirection vers la page erreur

    /* plan d'action : 
   - ajouter un etat de loading dans le state de redux initialisé à vrai pour quand on arrive sur la page on affiche direct le loader
   - au moment ou la requete est finie on remet loading à false et les routes pourront s'afficher
   */
    return (
      <Routes>
        <Route path="/" element={<Loading />} />
      </Routes>
    );
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/quiz/:slug" element={<Quiz />} />
        <Route path="/categorie/:slug" element={<Category />} />
        <Route path="/classements" element={<Classements />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionLegales />} />
        <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

App.defaultProps = {
  loading: false,
};

export default App;
