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

      <nav className="grid grid-flow-col grid-cols-3 border-b-2 border-gray-600 w-full mx-none">
        
        <div className="flex items-center justify-self-start ml-4 my-2"> 
          <SiAffinityphoto size="3em"/>
          <div className="pl-2">
            <h1 className="text-black font-bold">Gallery.app</h1>
            <h1> Photos for Everyone </h1> 
          </div>
        </div>

        {/* <SearchBar searchtext={(text) => setTerm(text)} /> */}
        {/* <div className="flex items-center rounded-full shadow-xl ml-8">
          <input className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search"></input>
          <div className="p-4">
            <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">Icon</button>
          </div>
        </div> */}

        <Search searchText={(text) => setTerm(text)}/>

        <div></div>

      </nav>
      
      <div className="container mx-auto py-2">
        {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>: <div className="grid grid-cols-4 gap-4">
        {images.map(image => (
          <Card key={image.id} image={image}/>
        ))}
      </div>}
      </div>
    </div>

  );
}

export default App;
