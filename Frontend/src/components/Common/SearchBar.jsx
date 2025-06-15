import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";

const SearchBar=()=> {
    const[searchterm, setsearchterm] = useState("");
    const[isOpen,setIsOpen] = useState(false);

    const handleSearchToggle = ()=>{
        setIsOpen(!isOpen)
    };

    const handleSearch =(e)=>{
        e.preventDefault();
           console.log("Search Term :", searchterm);
        setIsOpen(false);


    }
  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 
    ${isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"}`}>
  
  {isOpen ? (
    <form 
    onSubmit={handleSearch}
    className="relative flex items-center justify-center w-full space-x-4 px-4">
      
      <div className="relative w-full max-w-lg">
        <input 
          type="text" 
          placeholder="Search" 
          value={searchterm}
          onChange={(e)=>setsearchterm(e.target.value)}
          className="bg-gray-100 px-4 py-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
        />
        <button 
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
        >
          <CiSearch className="h-5 w-6" />
        </button>
      </div>

      <button type="button" onClick={handleSearchToggle}>
        <FaXmark className="h-5 w-6 text-gray-700 hover:text-gray-900" />
      </button>

    </form>
  ) : (
    <button onClick={handleSearchToggle}>
      <CiSearch className="h-5 w-6 text-gray-700" />
    </button>
  )}
</div>
  )
}

export default SearchBar