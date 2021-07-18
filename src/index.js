import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import ReactGA from 'react-ga';

require('dotenv').config();

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALITYCS_KEY);
ReactGA.pageview(window.location.pathname);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
