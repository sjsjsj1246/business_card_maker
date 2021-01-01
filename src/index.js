import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AutinService from './service/auth_service';

const authService = new AutinService();
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root'),
);
