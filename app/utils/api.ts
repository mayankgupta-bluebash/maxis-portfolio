import axios from 'axios';
import toast from 'react-hot-toast';

// Create axios instance with default configuration
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptor for adding auth tokens, etc.
api.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling success and error messages
api.interceptors.response.use(
  (response) => {
    // Handle success messages from API
    if (response.data?.meta?.message) {
      toast.success(response.data.meta.message);
    }
    return response;
  },
  (error) => {
    // Handle error messages
    const errorMessage = error.response?.data?.meta?.message || error.response?.data?.error || error.message || 'Something went wrong';

    toast.error(errorMessage);

    // Handle common errors here
    if (error.response?.status === 401) {
      console.error('Unauthorized request');
    } else if (error.response?.status === 500) {
      console.error('Server error:', error.response.data);
    }
    return Promise.reject(error);
  }
);

export default api;
