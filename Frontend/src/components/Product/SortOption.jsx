import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SortOption = () => {
    const[searchParams,setSearchParams] = useSearchParams();

    const handlesortChange = (e) => {
        const sortBy = e.target.value
        searchParams.set("sortBy",sortBy);
        setSearchParams(searchParams);
    }
  return (
    <div className='mb-3 flex items-center justify-end'>
        <select 
         id="sort" 
        onChange={handlesortChange}
        value={searchParams.get("sortBy")||""} 
        className='border p-1 rounded-md focus:outline-none'>
            <option value="default">Default</option>
            <option value="priceAsc">Price:Low to High</option>
            <option value="priceDesc">Price:High to Low</option>
            <option value="popularity">Popularity</option>
        </select>

    </div>
  )
}

export default SortOption