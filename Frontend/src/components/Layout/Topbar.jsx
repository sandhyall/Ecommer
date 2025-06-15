import React from 'react'
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";

const Topbar=()=> {
  return (
    <div className='text-white bg-rabbit-red '>
        <div className='container mx-auto flex justify-between items-center py-1 px-1'>
            <div className=' hidden md:flex items-center space-x-4'>
                <a href='#' className='hover:text-gray-300'>
                    <TbBrandMeta className='h-5 w-5' />
                </a>
                <a href='#' className='hover:text-gray-300'>
                    <IoLogoInstagram  className='h-5 w-5' />
                </a>
                <a href='#' className='hover:text-gray-300'>
                    <IoLogoTwitter  className='h-5 w-5' />
                </a>

            </div>
            <div className='text-sm text-center'>
                <span>We ship worldwide -fast and realible shipping!</span>

            </div>
            <div className='text-sm hidden md:block'>
           <a href='tel:9766545136' className='hover:text-gray-300'>9766545136</a>
            </div>
        </div>
        
        </div>
  )
}

export default Topbar