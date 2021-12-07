import React from 'react';
import ReactDOM from 'react-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history'
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  // <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

