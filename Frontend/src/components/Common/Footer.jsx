import React from 'react';
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io';
import { TbBrandMeta } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="border-t py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
          {/* Newsletter */}
          <div>
            <h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
            <p className="text-gray-800 mb-4 text-sm">
              Be the first to hear about new products, exclusive events and online offers.
            </p>
            <p className="font-medium text-sm">Sign up and get 10% off your first product</p>

            {/* Newsletter form */}
            <form className="flex mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-full border-t border-l border-b border-gray-800 rounded-l-md 
                focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
            <ul className="text-sm space-y-2 text-gray-800 uppercase">
              <li>
                <Link to="#" className="hover:text-black transition-colors">Men's Top Wear</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition-colors">Women's Top Wear</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition-colors">Men's Bottom Wear</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition-colors">Women's Bottom Wear</Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg text-gray-800 mb-4">Support</h3>
            <ul className="text-sm space-y-2 text-gray-800 uppercase">
              <li>
                <Link to="#" className="hover:text-black transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-black transition-colors">Features</Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4 mb-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
              >
                <TbBrandMeta className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
              >
                <IoLogoInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500"
              >
                <IoLogoTwitter className="h-5 w-5" />
              </a>
            </div>
            <p className='text-gray-800'>Call Us</p>
            <p>
                <FaPhoneAlt  className='inline-block mr-2'/>
                97665451326
            </p>
          </div>
        </div>
        {/* fotter bottom */}
        <div className='container mx-auto mt-12 lg:px-0 border-t border-gray-400 pt-6'>
            <p className='text-gray-800 text-smtracking-tighter text-center'>@2025, CompileTap, all Rights Reserved.</p>
             </div>
      </footer>
    </div>
  );
};

export default Footer;
