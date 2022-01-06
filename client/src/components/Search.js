import React, { useState } from 'react'
import { Input, Form, Button, InputGroup, FormGroup, List, ListGroupItem, ListInlineItem } from 'reactstrap';
// import { GoSearch } from 'react-icons/go';

const Search = ({ searchText, searchCategory}) => {
    const [text, setText] = useState('');

    const categories = ['backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings', 'health', 'people', 'religion', 'places', 'animals', 'industry', 'computer', 'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music']

// setting search term from user input
    const onSubmit = (e) => {
        e.preventDefault();
        // set new term for image search
        searchText(text);
    }

 // setting term to category onclick of category button
    const onClick = (e) => {
        e.preventDefault();
        searchText(e.target.value);   
    }

    return (
    <div>
        <Form onSubmit={onSubmit}>
            <InputGroup>
                    <Input 
                    type='text'
                    placeholder='Search...'
                    onChange={ e => setText(e.target.value)}
                    />
                    <Button
                    type='submit'
                    color="secondary"
                    outline
                    >
                    Submit
                    </Button>
            </InputGroup>   
        </Form>

        <List type='inline'>
            <ListInlineItem>
                
                {categories.map( (category) => 
                    <Button 
                    outline
                    type='submit'
                    key={category}
                    value={category}
                    onClick={onClick}
                    >
                    {category}
                    </Button>
                )}
            </ListInlineItem>
        </List>  
    </div>


    // <div className="flex justify-auto md:justify-center lg:justify-center rounded-full shadow-xl ml-0 sm:ml-8 my-4 lg:my-2 mr-4 sm:mr-0 w-auto lg:w-full">
    //   <form onSubmit={onSubmit} className="rounded-full w-max-xl lg:w-full px-6 leading-tight focus:outline-none bg-gray-100">
    //         <div className="flex items-center lg:items-center align-middle">
    //             <input
    //             className="rounded-l-full w-full py-0 lg:py-2 px-6 mt-0 lg:mt-2 text-gray-600 bg-gray-100 leading-tight focus:outline-none text-sm font-serif"
    //             onChange={e => setText(e.target.value)}
    //             type="text"
    //             placeholder="Search free high-resolution photos..."
    //             />
    //             <button className="bg-none text-gray-600 hover:text-gray-900 focus:outline-none w-12 h-8 mt-2 flex items-center justify-center"><GoSearch /></button>
    //         </div>
    //     </form>
    // </div>

    )
}

export default Search
