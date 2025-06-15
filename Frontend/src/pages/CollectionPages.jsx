import React, {  useEffect, useRef, useState } from 'react'
import { FaFilter } from "react-icons/fa";
import FilterSidebar from '../components/Product/FilterSidebar';
import SortOption from '../components/Product/SortOption';
import ProducrGrid from '../components/Product/ProducrGrid';

const CollectionPages = () => {
    const[product,selectproduct] = useState([]);
    const sidebarRef = useRef(null)
    const[issidebaropen,setissidebaropen] = useState(false);

    const togglesidebar = ()=>{
        setissidebaropen(!issidebaropen);
    };

    const handleClickOutSide=(e)=>{
        if(sidebarRef.current && !sidebarRef.contains(e.target))
            setissidebaropen(false);
    }

    useEffect(()=>{
        // Add event Listerner for click
        document.addEventListener("mousedown",handleClickOutSide)
        return ()=>{
            document.removeEventListener("mousedown",handleClickOutSide);
        }
        // clea event listerner 
     
    },[]);


    useEffect(()=>{
        setTimeout(()=>{
            const fetchedproducts=  [
    {
      _id: "1",
      name: "Product 1",
      price: 120,
      images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket" }],
    },
    {
      _id: "2",
      name: "Product 2",
      price: 85,
      images: [{ url: "https://picsum.photos/500/500?random=2", altText: "Casual Hoodie" }],
    },
    {
      _id: "3",
      name: "Product 3",
      price: 99,
      images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Denim Jeans" }],
    },
    {
      _id: "4",
      name: "Product 4",
      price: 150,
      images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Leather Boots" }],
    },
    {
      _id: "5",
      name: "Product 5",
      price: 45,
      images: [{ url: "https://picsum.photos/500/500?random=5", altText: "Trendy T-Shirt" }],
    },
    {
      _id: "6",
      name: "Product 6",
      price: 60,
      images: [{ url: "https://picsum.photos/500/500?random=6", altText: "Summer Shorts" }],
    },
    {
      _id: "7",
      name: "Product 7",
      price: 110,
      images: [{ url: "https://picsum.photos/500/500?random=7", altText: "Woolen Sweater" }],
    },
    {
      _id: "8",
      name: "Product 8",
      price: 95,
      images: [{ url: "https://picsum.photos/500/500?random=8", altText: "Sneakers" }],
    },
  ]; selectproduct(fetchedproducts);

        },1000);
    })
  return (
    <div className='flex flex-col lg:flex-row'>
        {/* mobile filtered button */}

        <button
        onClick={togglesidebar}
         className="lg:hidden border p-2 flex justify-center items-center">
            <FaFilter className='mr-2 ' /> Filters
        </button>

        {/* filtere sizebar */}
        <div ref={sidebarRef} 
        className={`${issidebaropen ? "translate-x-0":"-translate-x-full"} fixed 
        inset-y-0 z-50 w-80 left-0 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-1`}
        >
            <FilterSidebar/>
        </div>
        <div className="flex-grow p-4">
            <h2 className="text-1xl uppercase mb-4">All Collection</h2>

            {/* sort option */}
            <SortOption/>
           
           {/* product Grid */}
           <ProducrGrid products={product}/>
        </div>

    </div>
  )
}

export default CollectionPages