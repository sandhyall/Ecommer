import React from 'react';
import { Link } from 'react-router-dom';
import Featured from '../../assets/featured.png';

const FeratureCollection = () => {
  return (
    <div>
      <section className="py-14 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row bg-green-100 rounded-3xl overflow-hidden items-center">
          
          {/* Left Content */}
          <div className="lg:w-1/2 p-8 text-center lg:text-left text-gray-800">
            <h2 className="text-lg font-semibold mb-2">Comfort and Style</h2>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Apparel made for your everyday life
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Discover high-quality, comfortable clothing that effortlessly blends fashion
              and function. Designed to make you look and feel great every day.
            </p>
            <Link
              to="/collections/all"
              className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 inline-block"
            >
              Shop Now
            </Link>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2">
            <img
              src={Featured}
              alt="Featured collection"
              className="w-full h-full object-contain lg:rounded-r-3xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeratureCollection;
