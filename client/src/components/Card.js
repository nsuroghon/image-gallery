import React from 'react'

const Card = ({ image, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>
  }

    const tags = image.tags.split(',');


    return (
      <div className="m-0 pb-0 break-inside">
        <img className="" src={image.webformatURL} alt=""></img>
        
        {/* photographer */}

        {/* <div className="px-6 py-4">
          <div className="font-bold text-xl text-purple-500 mb-2">Photo by {image.user}</div>
        </div> */}

        {/* Sub headings */}

          {/* <ul>
            <li>
              <strong>
                Views: {image.views}
              </strong>
            </li>
            <li>
              <strong>
              Downloads: {image.downloads}
              </strong>
            </li>
            <li>
              <strong>
                Likes: {image.liked}
              </strong>
            </li>
          </ul> */}


          {/* tags */}

        <div className="py-2 w-full grid-cols-3 justify-start">
            {tags.map((tag, index) => (
                <span key={index} className="inline-block bg-gray-100 px-2 py-1 
                text-sm font-serif text-gray-600 m-1">
                {tag}
            </span>
            ))}
        </div>
      </div>
    )
}

export default Card
