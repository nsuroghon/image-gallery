import React, {useState, useEffect} from 'react';
import { Input, Button } from 'reactstrap';
import axios from 'axios';
import Card from './Card';
import PaginationNav from './Pagination';
import Search from './Search';


const Gallery = () => {
  const [images , setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
 
  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(15);

  useEffect(() => {
    const fetchImages = async() => {
      setIsLoading(true);
      const res = await axios.get(`https://pixabay.com/api/?key=22126125-95b100b3f165139e739090fac&q=${term}&image_type=photo&pretty=true&safesearch=true`);
      setImages(res.data.hits);
      setIsLoading(false);
    }
    fetchImages();
  }, [term]);

  // get current images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
 
  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // change search term
  const searchText = (text) => setTerm(text);

  return (
    <div>
      <Search searchText={searchText}/>
      <div>
        {/* <h1 className="font-bold text-6xl py-8 mx-8 lg:mx-20">{term}</h1> */}

      
      </div>
      <div className="container mx-auto py-0">
        {isLoading ? 
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>: 
        
        // <div className="grid grid-flow-row-dense grid-cols-3 gap-x-6 gap-y-6">
        <div className="masonry before:box-inherit after:box-inherit overflow-y-scroll">
        {currentImages.map(image => (
        // without pagination
          <Card key={image.id} image={image}/>
        // with pagination
          // <Card key={image.id} image={currentImages}/>
          ))}
        </div>}
      </div>
      <PaginationNav 
        imagesPerPage={imagesPerPage} 
        totalImages={images.length} 
        paginate={paginate}/>
    </div>

    )
}

export default Gallery;
