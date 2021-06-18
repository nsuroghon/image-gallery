import React, { useState } from 'react'

const Search = ({ searchText }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text);
    }

    return (
    <div className="flex justify-center">
      <form onSubmit={onSubmit} className="form-inline my-2 w-full max-w-md border-gray-800 border-2 rounded">
            <div className="flex items-center border-b">
            <input
                className="px-2 w-full appearance-none bg-transparent border-none text-gray-700 mr-3 leading-tight focus:outline-none"
                onChange={e => setText(e.target.value)}
                type="text"
                placeholder="Enter Image Term..."
            />
           <button class="px-4 py-1 mr-2 mt-2 mb-2  text-sm     font-medium   rounded-full block  border-b border-purple-300 bg-indigo-200 hover:bg-indigo-300 text-indigo-900" type="submit">Search</button>
            </div>
        </form>
    </div>
    )
}

export default Search
