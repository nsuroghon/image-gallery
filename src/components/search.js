import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go';

const Search = ({ searchText }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text);
    }

    return (
    <div className="flex justify-center sm:justify-end rounded-full shadow-xl ml-8 my-2">
      <form onSubmit={onSubmit} className="rounded-full w-full  px-6 leading-tight focus:outline-none bg-gray-100">
            <div className="flex items-center">
                <input
                className="rounded-l-full w-full py-2 px-6 mt-2 text-gray-600 bg-gray-100 leading-tight focus:outline-none text-sm font-serif"
                onChange={e => setText(e.target.value)}
                type="text"
                placeholder="Search free high-resolution photos..."
                />
                <button className="bg-none text-gray-600 hover:text-gray-900 focus:outline-none w-12 h-8 mt-2 flex items-center justify-center"><GoSearch /></button>
            </div>
        </form>
    </div>

    )
}

export default Search
