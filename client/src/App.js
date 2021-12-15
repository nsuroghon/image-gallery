import React, { useState, useEffect } from "react";

import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Loading from './components/Loading';

// import { Home, Profile, ExternalApi } from './views';

import { Route, Router, Switch } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Gallery from "./components/Gallery";

function App() {
  const [images , setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // if left empty returns random photos
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=22126125-95b100b3f165139e739090fac&q=${term}&image_type=photo&pretty=true`)
    .then( res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err))
    // whenever the search term changes makes sure the fetch called again with new parameter
  }, [term]);

  const { checkLoading } = useAuth0();

  if (checkLoading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Router>
        <Navbar />
        <br/>
        <Route path="/" component={Home} />
      </Router>
      {/* <Gallery /> */}
    </div>
  );
}

export default App;
