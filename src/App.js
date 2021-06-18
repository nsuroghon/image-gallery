import React, { useState, useEffect } from "react";
import Card from "./components/card";

function App() {
  const [images , setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // if left empty returns random photos
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=22126125-95b100b3f165139e739090fac&q=${term}&image_type=photo&pretty=true`)
    .then(async res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="container mx-auto">

    </div>
      // <Card />

  );
}

export default App;
