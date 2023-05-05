import axios from "axios";

const API = axios.create({ baseURL: "https://bookhub-server.vercel.app/api" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const getBook = (bookId) => API.get(`/books/${bookId}`);
export const getCategoryBooks = (category) => API.get(`/books/category/${category}`);
export const getSubCategory = (subCategory) => API.get(`/books/subCategory/${subCategory}`);
export const searchBook = (searchTerm) => API.get(`books/search/books?query=${searchTerm}`);
export const getAllBooks = () => API.get('/books')
export const followbook = (id, data) => API.put(`/book/${id}/follow`, data)
export const unfollowbook = (id, data) => API.put(`/book/${id}/unfollow`, data)