import React, { useState, useEffect } from "react";

function App() {
  const [images , setImage] = useState([]);
  const [isLoading, setIsLoading] =useState(true);

  return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://source.unsplash.com/random" alt=""></img>
        
        {/* photographer */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-purple-500 mb-2">Photo by John Doe</div>
        </div>

        {/* Sub headings */}
          <ul>
            <li>
              <strong>
                Views: 1000
              </strong>
            </li>
            <li>
              <strong>
                Downloads: 100
              </strong>
            </li>
            <li>
              <strong>
                Likes: 500
              </strong>
            </li>
          </ul>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 
          text-sm font-semibold text-gray-700 mr-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 
          text-sm font-semibold text-gray-700 mr-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 
          text-sm font-semibold text-gray-700 mr-2">
            #tag1
          </span>
        </div>
      </div>

  );
}

export default App;
