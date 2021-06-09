import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // development URL
  axios.defaults.baseURL = "https://api.funtranslations.com/translate/";
} else {
  // production URL
  axios.defaults.baseURL = "https://api.funtranslations.com/translate/";
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
