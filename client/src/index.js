import React from 'react';
import ReactDOM from 'react-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history'
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  ,
  document.getElementById('root')
);

