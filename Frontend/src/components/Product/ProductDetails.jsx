import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import ProducrGrid from './ProducrGrid';

const selectproduct = {
  name: "Stylish Jacket",
  price: "120",
  originalprice: "150",
  description: "This is a stylish jacket perfect for any occasion",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 2",
    },
  ],
};
const similarProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/500/500?random=1"
      }
    ]
  },
  {
    _id: 2,
    name: "Product 2",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/500/500?random=2"
      }
    ]
  },
  {
    _id: 3,
    name: "Product 3",
    price: 90,
    images: [
      {
        url: "https://picsum.photos/500/500?random=3"
      }
    ]
  },
  {
    _id: 4,
    name: "Product 4",
    price: 110,
    images: [
      {
        url: "https://picsum.photos/500/500?random=4"
      }
    ]
  }
];


const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const[isButtonDisabled,setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectproduct?.images?.length > 0) {
      setMainImage(selectproduct.images[0].url);
    }
  }, []);

  const handleQuantity = (action) => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddTOCart=()=>{
    if(!selectedSize || !selectedColor){
        toast.error("please select a size and color before adding to cart.",{
            duration:1000,
        })
        return;
    }
    setIsButtonDisabled(true);
    setTimeout(()=>{
        toast.success("Product added the cart!",{
            duration:1000,
    })
    setIsButtonDisabled(false);

    },500)
  }

  return (
    <div className='p-6'>
      <div className='max-w-5xl mx-auto bg-white p-8 rounded-lg'>
        <div className='flex flex-col md:flex-row'>

          <div className='hidden md:flex flex-col space-y-4 mr-6'>
            {selectproduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border 
                  ${mainImage === image.url ? "border-black" : "border-gray-600"}`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          <div className='md:w-1/2'>
            <div className='mb-4'>
              <img
                src={mainImage}
                alt="Main product"
                className='w-full h-auto object-cover rounded-lg'
              />
            </div>

            <div className='md:hidden flex overflow-x-auto space-x-4 mb-4'>
              {selectproduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Thumbnail ${index}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border 
                    ${mainImage === image.url ? "border-black" : "border-gray-600"}`}
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>
          </div>

          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-xl md:text-2xl font-semibold mb-4">
              {selectproduct.name}
            </h1>
            <p className="text-1xl text-gray-800 mb-1 line-through">
              {selectproduct.originalprice && `$${selectproduct.originalprice}`}
            </p>
            <p className="text-1xl text-gray-500 mb-2">
              ${selectproduct.price}
            </p>
            <p className="text-gray-800 mb-2">
              {selectproduct.description}
            </p>

            <div className="mb-3">
              <p className="text-gray-800">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectproduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-7 h-7 rounded-full border 
                      ${selectedColor === color ? 'border-black' : 'border-gray-400'}`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.6)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className='text-gray-800'>Size:</p>
              <div className="flex gap-2 mt-2">
                {selectproduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded border 
                      ${selectedSize === size ? 'border-black font-semibold' : 'border-gray-400'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-800">Quantity:</p>
              <div className="flex items-center space-x-2 mt-2">
                <button
                  className="px-2 py-1 bg-gray-300 rounded-lg text-lg"
                  onClick={() => handleQuantity("decrease")}
                >-</button>
                <span className="text-xl">{quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-300 rounded-lg text-lg"
                  onClick={() => handleQuantity("increase")}
                >+</button>
              </div>
            </div>

            <button
            onClick={handleAddTOCart}
             disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 
                ${isButtonDisabled ?"cursor-not-allowed opacity-50":"hover:bg-gray-900"}`}
            >
              {isButtonDisabled?"Adding..." : "ADD TO CART"}
            </button>

            <div className="mt-10 text-gray-800">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className='w-full text-left text-sm text-gray-600'>
                <tbody>
                  <tr>
                    <td className='py-1'>Brand</td>
                    <td className='py-1'>{selectproduct.brand}</td>
                  </tr>
                  <tr>
                    <td className='py-1'>Material</td>
                    <td className='py-1'>{selectproduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
            <h2 className="text-2xl text-center font-medium mb-4">
                You May Also Like
            </h2>
            <ProducrGrid products={similarProducts}/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
