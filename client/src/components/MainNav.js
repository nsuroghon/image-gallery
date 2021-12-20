import React, {useState} from 'react';
import { Input, Button } from 'reactstrap';
import Search from "./Search";
import { SiAffinityphoto } from 'react-icons/si';

const MainNav = () => {
    const [term, setTerm] = useState("");
  return (
    <div>
      <h1>Title!</h1>
      <Search />
    </div>
  //   <nav className="grid grid-flow-col grid-cols-2 sm:grid-cols-3 shadow sticky top-0 bg-white w-full mx-none pb-4">
  //       <div className="flex items-center justify-self-start ml-4 my-2"> 
  //       <SiAffinityphoto size="3em"/>
  //           <div className="pl-2">
  //               <h1 className="text-grey-800 font-serif font-bold lg:font-medium text-sm lg:text-xl antialiased">Gallery App</h1>
  //               <h1 className="text-sm lg:text-sm font-serif font-light"> HD photos for everyone </h1> 
  //           </div>
  //       </div>
        
  //       <Search searchText={(text) => setTerm(text)}/>
  // </nav>
  );
};

export default MainNav;