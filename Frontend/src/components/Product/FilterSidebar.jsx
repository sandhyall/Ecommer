import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
   const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top wear", "Bottom Wear"];
  const colors = ["Red", "Blue", "Black", "Green", "Yellow", "Gray", "White", "Pink", "Navy", "Beige"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Polyester", "Wool", "Denim", "Silk", "Linen", "Viscose", "Fleece"];
  const brands = ["Urban Threads", "Modern Fit", "Street Style", "Beach Breeze", "Fashionista", "ChicStyle"];
  const genders = ["Men", "Female"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });

    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
  const { name, value, checked, type } = e.target;
  let newFilters = { ...filters };

  if (type === "checkbox") {
    if (checked) {
      newFilters[name] = [...(newFilters[name] || []), value];
    } else {
      newFilters[name] = (newFilters[name] || []).filter((item) => item !== value);
    }
  } else {
    newFilters[name] = value;
  }

  setFilters(newFilters);
  updateURLParams(newFilters);
};
const updateURLParams = (newFilters) => {
  const params = new URLSearchParams();

  Object.keys(newFilters).forEach((key) => {
    if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
      params.append(key, newFilters[key].join(","));  // e.g. size=XS,S,M
    } else if (newFilters[key]) {
      params.append(key, newFilters[key]);            // e.g. category=Top wear
    }
  });

  setSearchParams(params);                  // React Router updates the URL params (hooks-based)
  navigate(`?${params.toString()}`);        // Optional: manually push to URL (if needed)
};

const handlePriceChange=(e)=>{
    const newprice = e.target.value;
    setPriceRange([0,newprice])
    const newFilters = {...filters,minPrice:0,maxPrice:newprice};
    setFilters(filters)
    updateURLParams(newFilters);
}




  return (
    <div className="p-3">
      <h3 className="text-lg font-normal text-gray-800 mb-2">Filter</h3>

      {/* Category filters */}
      <div className="mb-5">
        <label className="block text-gray-800 font-normal mb-1">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked ={filters.category=== category}
              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-800">{category}</span>
          </div>
        ))}
      </div>
       {/* gender filters */}
      <div className="mb-5">
        <label className="block text-gray-800 font-normal mb-1">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked ={filters.gender===gender}
              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-gray-800">{gender}</span>
          </div>
        ))}
      </div>

{/* Color Filters */}
<div className="mb-5">
  <label className="block text-gray-800 font-normal mb-1">Color</label>
  <div className="flex flex-wrap gap-2">
    {colors.map((color) => (
      <button
        key={color}
        name="color"
        value={color}
        onClick={handleFilterChange}
         
        className={`w-7 h-7 rounded-full border border-gray-400 cursor-pointer 
            transition-transform hover:scale-105 ${filters.color === color ? "ring-2 ring-blue-600":""}`}
        style={{ backgroundColor: color.toLowerCase() }}
        aria-label={color}
      >
      </button>
    ))}
  </div>
</div>


{/* Size Filters */}
<div className="mb-5">
  <label className="block text-gray-800 font-normal mb-1">Size</label>
  {sizes.map((size) => (
    <div key={size} className="flex items-center mb-1">
      <input
        type="checkbox"
        name="size"
        value={size}
         onChange={handleFilterChange}
          checked ={filters.size.includes(size)}
        className=" mr-1 h-3 w-3 text-blue-600 border-gray-300 focus:ring-blue-500 border-gray-500"
      />
      <span className=" text-gray-800">{size}</span>
    </div>
  ))}
</div>

{/* Material Filters */}
<div className="mb-5">
  <label className="block text-gray-800 font-normal mb-1">Material</label>
  {materials.map((material) => (
    <div key={material} className="flex items-center mb-1">
      <input
        type="checkbox"
        name="material"
        value={material}
         onChange={handleFilterChange}
          checked ={filters.material.includes(material)}
        className=" mr-1 h-3 w-3 text-blue-600 border-gray-300 focus:ring-blue-500 border-gray-500"
      />
      <span className=" text-gray-800">{material}</span>
    </div>
  ))}
</div>

{/* Brand Filters */}
<div className="mb-5">
  <label className="block text-gray-800 font-normal mb-1">Brand</label>
  {brands.map((brand) => (
    <div key={brand} className="flex items-center mb-1">
      <input
        type="checkbox"
        name="brand"
        value={brand}
         onChange={handleFilterChange}
          checked ={filters.brand.includes(brand)}
        className=" mr-1 h-3 w-3 text-blue-600 border-gray-300 focus:ring-blue-500 border-gray-500"
      />
      <span className=" text-gray-800">{brand}</span>
    </div>
  ))}
</div>

{/* Price Range Slider */}
<div className="mb-8">
  <label className="block text-gray-800 font-normal mb-1">Price Range</label>
  
    <input
      type="range"
      name='priceRange'
      min={0}
      max={100}
      value={priceRange[1]}
      onChange={handlePriceChange}
      className="w-full h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer"
      readOnly
    />
    <div className=" flex justify-between text-gray-600 mt-2">
         <span className="">$0</span>
         <span>${priceRange[1]}</span>
    </div>
    </div>
    </div>
    
    );
    };
    
 
export default FilterSidebar;
