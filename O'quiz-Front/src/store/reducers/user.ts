import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import type { RootState } from '..';

import axiosInstance from '../../axios/axios';

interface UserState {
  logged: boolean;
  email: string;
  password: string;
  pseudo: string;
  token: string;
  error: string | null;
  isLoading: boolean;
  toggleForm: boolean;
  toggleConnectionModal: boolean;
}
export const initialState: UserState = {
  logged: false,
  email: 'bob@mail.io',
  password: 'bobo',
  pseudo: '',
  token: '',
  error: null,
  isLoading: false,
  toggleForm: false,
  toggleConnectionModal: false,
};

export const setInput = createAction<{
  value: string;
  name: 'pseudo' | 'email' | 'password';
}>('user/SETINPUT');

export const checkLogin = createAsyncThunk(
  'user/CHECKLOGIN',
  async (params, thunkAPI) => {
    // recuperer les valeurs de email et password :
    // - soit c'est AppHeader qui les envoie dans params
    // - soit on va les chercher direct dans le state avec thunkAPI.getState()
    const state = thunkAPI.getState() as RootState;
    const { email, password } = state.user;

    // comme on utilise l'instance qui contient deja le baseURL on met juste "/login"
    // sinon on aurait du specifier "https://orecipes-api.onrender.com/api/login"
    const result = await axiosInstance.post('/login', {
      email, // prop raccourcie car meme nom pour la prop et pour la variable
      password, // equivalent à password: password
    });
    console.log(result);

    // on est connecté on a reçu le token, on va l'enregistrer dans l'instance axios pour qu'il soit envoyé a chaque nouvelle requette
    // sinon à chaque requette on aurait du l'ajouter à la main comme ça :
    /*
    axios.get('URL de l'api', {
      Header: {
        Authorization: `Bearer token`
      }
    })
    */
    //todo add authentification to api requests that require being logged in   axiosInstance.defaults.headers.common.Authorization = `Bearer ${result.data.token}`;

    // on recupère le pseudo et un token , on va demander au reducer de les sauvergarder dans le state
    // ce token est un JWT, on va le stocker dans le state pour l'instant (on aurait pu le mettre en localStorage ou dans les cookies du navigateur)
    // on en aura besoin si on fait une requete vers /favorites plus tard
    // on envoie les info dans le payload de l'action fullfilled avec un return
    return {
      pseudo: result.data.pseudo,
      token: result.data.token,
      logged: result.data.logged,
    };
  }
);

export const logOut = createAction('user/LOGOUT');

export const closeModal = createAction('user/CLOSEMODAL');

export const openModal = createAction('user/OPENMODAL');

export const swapForm = createAction('user/SWAPFORM');

/*
notre reducer est une fonction qui quand on l'execute return un nouveau state
on pourrait tester que quand on l'execute il renvoie bien le state attendu
*/
const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setInput, (state, action) => {
      // mettre à jour la valeur de l'input action.payload.name avec la valeur action.payload.value
      state[action.payload.name] = action.payload.value;
    })
    .addCase(checkLogin.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(checkLogin.fulfilled, (state, action) => {
      // enregistrer le pseudo et le token dans le state
      state.pseudo = action.payload.pseudo;
      state.token = action.payload.token;
      state.logged = true; // true
      state.error = null;
      state.isLoading = false;
    })
    .addCase(checkLogin.rejected, (state, action) => {
      state.error =
        'La connexion a échouée : mauvais mot de passe ou mauvais email.';
      state.isLoading = false;
    })
    .addCase(logOut, (state) => {
      // passer logged à false et supprimer token et pseudo
      state.logged = false;
      state.pseudo = '';
      state.token = '';
    })
    .addCase(closeModal, (state) => {
      // passer openConnectionModal à false et revenir au formulaire de connexion
      state.toggleConnectionModal = false;
      state.toggleForm = false;
      state.error = null;
    })
    .addCase(openModal, (state) => {
      // passer openConnectionModal à false et revenir au formulaire de connexion
      state.toggleConnectionModal = true;
      state.toggleForm = false;
    })
    .addCase(swapForm, (state) => {
      // inverser le boolen qui determine quel formulaire afficher
      state.toggleForm = !state.toggleForm;
    });
});

export default userReducer;
