import React from 'react';
import { Link } from 'react-router-dom';
import MencollectionImage from '../../assets/mencollection.png';
import WomencollectionImage from '../../assets/womencollection.png';

const Gendercollectionsection = () => {
  return (
    <div>
      <section className="py-14 px-4 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row gap-6">
          
          {/* Women's Collection */}
          <div className="relative flex-1">
            <img
              src={WomencollectionImage}
              alt="Women's Collection"
              className="w-full h-[500px] object-cover rounded-md"
            />
            <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 rounded shadow">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Women's Collection
              </h2>
              <Link
                to="/collection/all?gender=Women"
                className="text-gray-800 underline hover:text-black transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Men's Collection */}
          <div className="relative flex-1">
            <img
              src={MencollectionImage}
              alt="Men's Collection"
              className="w-full h-[500px] object-cover rounded-md"
            />
            <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 rounded shadow">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Men's Collection
              </h2>
              <Link
                to="/collection/all?gender=Men"
                className="text-gray-800 underline hover:text-black transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Gendercollectionsection;
