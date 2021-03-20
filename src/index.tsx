import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
// import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
