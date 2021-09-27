import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3005/api';

const api = axios.create({
  baseURL,
  timeout: 5000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtoken');
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
