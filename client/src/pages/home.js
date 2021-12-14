import React, { Fragment } from "react";
import NavBar from "../components/Navbar";
import Gallery from "../components/Gallery";


const Home = () => (
  <Fragment>
    <Navbar />

    <h1 className="font-bold text-6xl py-8 mx-8 lg:mx-20">{term}</h1>
    
    <Gallery />

  </Fragment>
);

export default Home;