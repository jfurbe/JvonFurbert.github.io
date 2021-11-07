import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import app from './firebase';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


ReactDOM.render(
      <app>
      <App />
      </app>,

  document.getElementById('root')
);

