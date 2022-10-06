import axios from 'axios';
 
const api = axios.create({
  baseURL: 'https://teste.ignisdigital.tec.br',
  headers: {
    Authorization: typeof window !== "undefined" ? (localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : '') : ""
  }
});

export default api;
