import globalAxios from "axios";

// console.log(process.env.REACT_APP_SERVER_URL);

// const { REACT_APP_SERVER_URL } = process.env;

const REACT_APP_SERVER_URL = "https://yummy-project-backend.onrender.com";

console.log("123", REACT_APP_SERVER_URL);

//  REACT_APP_BASE_URL="https://yummy-project-backend.onrender.com"

export const axios = globalAxios.create({
  // baseURL: process.env.REACT_APP_SERVER_URL,
  baseURL: REACT_APP_SERVER_URL,
});

export const setToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearToken = () => {
  axios.defaults.headers.common["Authorization"] = "";
};
