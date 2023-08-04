import axios from 'axios';

// on créé une instance de axios avec de la config par défaut : la baseURL et le timeout (temps max avant annulation de la requete)
const axiosInstance = axios.create({
  // todo baseURL: 'https://mathiasmurcia-server.eddi.cloud/deploiement/projet-o-quiz-back/public/api',
  baseURL:
    'http://mathiasmurcia-server.eddi.cloud/deploiement/projet-o-quiz-back/public/api',
  timeout: 3000,
});

export default axiosInstance;
