import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'

(function () {
  let token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common['Token'] = token;
  } else {
    axios.defaults.headers.common['Token'] = null;
  }
})();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

