import React, {useState, useEffect} from 'react'
import Card from './Card';

const Gallery = () => {
  // Images from api --> state
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
    <div>
      <div>
        <h1 className="font-bold text-6xl py-8 mx-8 lg:mx-20">{term}</h1>
      </div>
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

    )
}

export default Gallery;
