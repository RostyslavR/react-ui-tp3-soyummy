import globalAxios from 'axios';

export const axios = globalAxios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};
