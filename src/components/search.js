import React from 'react'

const Search = () => {
    return (
    <div className="flex justify-center">
      <form className="form-inline my-2 w-full max-w-md">
          <div className="border-2 rounded border-gray-800 py-1">
            <input
                className="form-control px-2"
                type="text"
                placeholder="Search Image Term..."
            />
          </div>
        </form>
    </div>
    )
}

export default Search
