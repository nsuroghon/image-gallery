import React, { useState, useEffect } from "react";
import Card from "./components/card";

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
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4">
        {images.map(image => (
          <Card key={image.id} image={image}/>
        ))}
      </div>
    </div>

  );
}

export default App;
