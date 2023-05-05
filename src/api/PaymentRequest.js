import axios from "axios";

const API = axios.create({ baseURL: "https://bookhub-server.vercel.app/api/orders/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token
      }`;
  }

  return req;
});

export const paymentPost = (path, data) => API.post(`/${path}`, data);
