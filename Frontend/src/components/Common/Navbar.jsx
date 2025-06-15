import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaShoppingBag } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import SearchBar from './SearchBar';
import CartDraw from '../Layout/CartDraw';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [Drawopen, setDrawOpen] = useState(false);
  const [navDraweropen, setNavdraweropen] = useState(false);

  const toggleNavDrawer = () => {
    setNavdraweropen(!navDraweropen);
  };

  const toggleCartDraw = () => {
    setDrawOpen(!Drawopen);
  };

  return (
    <div>
      <nav className="container flex mx-auto items-center justify-between py-2 px-2">
        {/* Logo */}
        <div>
          <Link to="/" className="text-xl font-medium">
            Sandhya
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/collection/all" className="text-gray-700 hover:text-gray-600 text-sm font-medium uppercase">Men</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-600 text-sm font-medium uppercase">Women</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-600 text-sm font-medium uppercase">Top Wear</Link>
          <Link to="/" className="text-gray-700 hover:text-gray-600 text-sm font-medium uppercase">Bottom Wear</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
            <Link to="/admin" className='block bg-black px-1 text-sm text-white rounded'>Admin</Link>
          <Link to="/profile" className="hover:text-black">
            <CgProfile className="h-6 w-6 text-gray-700" />
          </Link>

          <button
            onClick={toggleCartDraw}
            className="hover:text-black relative"
          >
            <FaShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">
              4
            </span>
          </button>

          <div className="overflow-hidden">
            <SearchBar />
          </div>

          {/* Mobile menu icon */}
          <button onClick={toggleNavDrawer} className="md:hidden">
            <FaBarsStaggered className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDraw Drawopen={Drawopen} toggleCartDraw={toggleCartDraw} />

      {/* Mobile Navigation Drawer */}
      <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDraweropen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col space-y-4 p-6 text-gray-700 text-sm font-medium uppercase">
            <h2 className='text-xl font-semibold mb-4'>Menu</h2>
          <Link to="#" onClick={toggleNavDrawer} >Men</Link>
          <Link to="#" onClick={toggleNavDrawer}>Women</Link>
          <Link to="#" onClick={toggleNavDrawer}>Top Wear</Link>
          <Link to="#" onClick={toggleNavDrawer} >Bottom Wear</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
