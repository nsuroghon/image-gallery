import React, { useState, useEffect } from "react";
import Card from "./components/card";
import Search from "./components/search";
import { SiAffinityphoto } from 'react-icons/si';

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

  return (
    <div className="app">

      {/* Navigation */}
      <nav className="grid grid-flow-col grid-cols-2 sm:grid-cols-3 shadow sticky top-0 bg-white w-full mx-none pb-4">
        <div className="flex items-center justify-self-start ml-4 my-2"> 
          <SiAffinityphoto size="3em"/>
          <div className="pl-2">
            <h1 className="text-grey-800 font-serif font-bold lg:font-medium text-sm lg:text-xl antialiased">Gallery App</h1>
            <h1 className="text-sm lg:text-sm font-serif font-light"> HD photos for everyone </h1> 
          </div>
        </div>
        <Search searchText={(text) => setTerm(text)}/>
        {/* <div></div> */}
      </nav>

      <h1 className="font-bold text-6xl py-8 mx-8 lg:mx-20">{term}</h1>
    
      {/* Gallery */}
      <div className="container mx-auto py-0">
        {isLoading ? 
          <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>: 
          
          // <div className="grid grid-flow-row-dense grid-cols-3 gap-x-6 gap-y-6">
          <div className="masonry before:box-inherit after:box-inherit overflow-y-scroll">
          {images.map(image => (
            <Card key={image.id} image={image}/>
            ))}
          </div>}
      </div>
    </div>

  );
}

export default App;
