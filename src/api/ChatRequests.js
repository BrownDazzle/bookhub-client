import axios from 'axios'


const API = axios.create({ baseURL: 'https://bookhub-server.vercel.app' });

export const createChat = (data) => API.post('/chat/', data);

export const userChats = (id) => API.get(`/chat/${id}`);

export const getAdmin = () => API.get(`/chat/admin`);

export const findChat = (firstId, secondId) => API.get(`/chat/find/${firstId}/${secondId}`);