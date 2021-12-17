import React, { Fragment } from "react";
import Navigation from "../components/Navigation";
import Gallery from "../components/Gallery";


const Home = () => (
  <Fragment>
    {/* <h1>Hello World!</h1> */}
    <Navigation />

    {/* <h1 className="font-bold text-6xl py-8 mx-8 lg:mx-20">{term}</h1> */}
    
    <Gallery />

  </Fragment>
);

export default Home;