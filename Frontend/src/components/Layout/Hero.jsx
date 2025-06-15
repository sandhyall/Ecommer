import React from 'react';
import HeroImg from '../../assets/hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <section className="relative">
        <img
          src={HeroImg}
          alt="hero"
          className="w-full h-[400px] md:h-[600px] lg:h-[600px] object-cover"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight uppercase mb-4">
              Vacation <br /> Ready
            </h1>

            <p className="text-base md:text-lg mb-6 max-w-xl mx-auto leading-relaxed">
              Explore our vacation-ready outfits with fast worldwide shipping.
            </p>

            <Link
              to="#"
              className="inline-block bg-white text-black hover:bg-gray-100 px-6 py-3 text-sm md:text-base font-medium rounded transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
