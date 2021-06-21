import React, { useState } from 'react'

const SearchBar = ({ searchText }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text);
    }

    return (
        <div className="flex items-center rounded-full shadow-xl ml-8">
        <form onSubmit={onSubmit}>
            <input className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none" 
                    id="search" 
                    type="text" 
                    onChange={e => setText(e.target.value)}
                    placeholder="Search">
            </input>
          <div className="p-4">
            <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">Icon</button>
          </div>

        </form>
        </div>
    )
}

export default SearchBar
