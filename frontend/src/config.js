// src/config.js

const PRODUCTION_URL = 'http://localhost:5000';
const DEVELOPMENT_URL = 'http://localhost:5000';

const config = {
  // Base API URL will automatically switch based on environment
  baseURL: process.env.NODE_ENV === 'production' ? PRODUCTION_URL : DEVELOPMENT_URL,
  
  // Helper function to get full API URL
  getApiUrl: (endpoint) => {
    const base = process.env.NODE_ENV === 'production' ? PRODUCTION_URL : DEVELOPMENT_URL;
    return `${base}${endpoint}`;
  },

  // Helper function to get full asset URL (for images etc)
  getAssetUrl: (path) => {
    const base = process.env.NODE_ENV === 'production' ? PRODUCTION_URL : DEVELOPMENT_URL;
    return `${base}${path}`;
  }
};

export default config;