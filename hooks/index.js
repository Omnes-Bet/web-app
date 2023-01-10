import axios from "axios";
import { parseCookies } from "nookies";

const { 'nextauth.token': token } = parseCookies();

const Provider = axios.create({
    baseURL: `https://omnes-api.herokuapp.com/v1`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  if (token) {
    Provider.defaults.headers['Authorization'] = token;
   }

  Provider.interceptors.request.use(config => {
    console.log(config);

    return config;
  })

export default Provider;