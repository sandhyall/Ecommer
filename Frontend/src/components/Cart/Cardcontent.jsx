import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const Cardcontent = () => {
  const cartproduct = [
    {
      productId: 1,
      name: "shirt",
      size: "M",
      color: "red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "jeans",
      size: "L",
      color: "blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=2",
    },
  ];

  return (
    <div>
      {cartproduct.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b border-gray-200"
        >
          {/* Product Info */}
          <div className="flex items-start space-x-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover rounded"
            />
            <div>
              <h3 className="font-medium text-base">{product.name}</h3>
              <p className="text-sm text-gray-600">
                Size: {product.size.toUpperCase()} | Color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">-</button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">+</button>
              </div>
            </div>
          </div>

          {/* Price & Delete */}
          <div className="flex flex-col items-end justify-between">
            <p className="text-base font-semibold">${product.price.toLocaleString()}</p>
            <button className="mt-2">
              <RiDeleteBin6Line className="h-6 w-6 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cardcontent;
