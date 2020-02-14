import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.25.1.196:3333'
});

export default api;