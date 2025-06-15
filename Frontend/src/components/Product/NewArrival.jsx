import React, { useEffect, useRef, useState } from 'react';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const NewArrival = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    { _id: "1", name: "Stylish Jacket", price: 120, images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket" }] },
    { _id: "2", name: "Casual Hoodie", price: 85, images: [{ url: "https://picsum.photos/500/500?random=2", altText: "Casual Hoodie" }] },
    { _id: "3", name: "Denim Jeans", price: 99, images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Denim Jeans" }] },
    { _id: "4", name: "Leather Boots", price: 150, images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Leather Boots" }] },
    { _id: "5", name: "Trendy T-Shirt", price: 45, images: [{ url: "https://picsum.photos/500/500?random=5", altText: "Trendy T-Shirt" }] },
    { _id: "6", name: "Summer Shorts", price: 60, images: [{ url: "https://picsum.photos/500/500?random=6", altText: "Summer Shorts" }] },
    { _id: "7", name: "Woolen Sweater", price: 110, images: [{ url: "https://picsum.photos/500/500?random=7", altText: "Woolen Sweater" }] },
    { _id: "8", name: "Sneakers", price: 95, images: [{ url: "https://picsum.photos/500/500?random=8", altText: "Sneakers" }] },
  ];

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons(); // Run initially

      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
      };
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStart(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // speed
    scrollRef.current.scrollLeft = scrollStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className='container mx-auto text-center mb-16 relative px-4'>
      <h2 className='text-2xl font-bold mb-4'>Explore New Arrivals</h2>
      <p className='text-1xl text-gray-800 mb-8 max-w-1xl mx-auto'>
        Discover the latest styles off the runway, freshly added to keep your wardrobe on the cutting edge of fashion.
      </p>

      <div className='relative'>
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className='absolute top-1/2 left-0 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100 disabled:opacity-40'
        >
          <FaCircleChevronLeft className='text-2xl' />
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className='absolute top-1/2 right-0 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-100 disabled:opacity-40'
        >
          <FaCircleChevronRight className='text-2xl text-black' />
        </button>

        {/* Scrollable List */}
        <div
          ref={scrollRef}
          className='mt-10 flex space-x-6 overflow-x-auto pb-4 px-8 scrollbar-hide cursor-grab active:cursor-grabbing'
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          {newArrivals.map((product) => (
            <div key={product._id} className='min-w-[200px]'>
              <img
                src={product.images[0].url}
                alt={product.images[0].altText || product.name}
                className='w-full h-64 object-cover rounded shadow'
              />
              <Link to={`/product/${product._id}`} className='block'>
                <h3 className='mt-2 text-md font-medium text-gray-800'>{product.name}</h3>
                <p className='text-sm text-gray-500'>${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
