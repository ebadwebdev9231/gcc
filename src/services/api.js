// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "/api", // this now points to your Vercel serverless functions
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

export default api;
