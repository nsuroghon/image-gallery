import React, { useState, useEffect } from "react";

// Pages
import Home from "./pages/home";
import Loading from './components/Loading';

// import { Home, Profile, ExternalApi } from './views';
import { BrowserRouter as Router, Redirect, Route, Switch, Link, useHistory } from "react-router-dom";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

function App() {
  const { checkLoading } = useAuth0();

  if (checkLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Auth0Provider>
      <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
      </Auth0Provider>
    </Router>
  );
}

export default App;
