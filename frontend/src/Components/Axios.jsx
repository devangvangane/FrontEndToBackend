// src/AxiosInstance.js
// Import the axios library for making HTTP requests
import axios from 'axios';

// Create a custom Axios instance with default settings
const AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000/', // Base URL for all API requests
  headers: {
    'Content-Type': 'application/json', // Send data as JSON
    "Accept": "application/json",       // Expect JSON responses
  },
});

// Export the Axios instance to use in other files
export default AxiosInstance;
