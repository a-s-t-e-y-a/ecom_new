import axios from 'axios';

const baseURL = 'http://localhost:5000/api'; // Your default base URL goes here

const axiosInstance = axios.create({
  baseURL,
  // You can add other configurations here if needed
});

// Add a request interceptor to include the token from localStorage in every request
axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

