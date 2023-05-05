import axios from 'axios'


const API = axios.create({ baseURL: 'https://bookhub-server.vercel.app/api/auth' });

export const logIn = (formData) => API.post('/login', formData);

export const signUp = (formData) => API.post('/register', formData);
