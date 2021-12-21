import React, {useState, useEffect} from 'react';
// import { Pagination, PaginationLink, PaginationItem, Input, Button } from 'reactstrap';
import axios, { Axios } from 'axios';
import Card from './Card';
import PaginationNav from './Pagination';


const Gallery = () => {
  const [images , setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1)
  const [imagesPerPage, setImagesPerPage] = useState(10)

  useEffect(() => {
    const fetchImages = async() => {
      setIsLoading(true);
      const res = await axios.get(`https://pixabay.com/api/?key=22126125-95b100b3f165139e739090fac&q=${term}&image_type=photo&pretty=true`);
      setImages(res.data.hits);
      setIsLoading(false);
    }
    fetchImages();
    // fetch(`https://pixabay.com/api/?key=22126125-95b100b3f165139e739090fac&q=${term}&image_type=photo&pretty=true`)
    // .then( res => res.json())
    // .then(data => {
    //   console.log(data)
    //   setImages(data.hits);
    //   setIsLoading(false);
    // })
    // .catch(err => console.log(err))
    // whenever the search term changes makes sure the fetch called again with new parameter
  }, [term]);

  // get current images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);


  return (
    <div>
      {/* <div>
        <h1 className="font-bold text-6xl py-8 mx-8 lg:mx-20">{term}</h1>

        <Input onChange={e => setText(e.target.value)} type='search'></Input>
            <Button onSubmit={onSubmit}
                color="secondary"
                outline
                >
                Search
            </Button>
      </div> */}
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
      <PaginationNav imagesPerPage={imagesPerPage} totalImages={images.length}/>

      {/* <Pagination style={{display: 'flex', justifyContent: 'center', margin: '2%'}}>
        <PaginationItem>
          <PaginationLink
            first
            href="#"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            previous
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            next
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            last
          />
        </PaginationItem>
      </Pagination> */}
    </div>

    )
}

export default Gallery;
