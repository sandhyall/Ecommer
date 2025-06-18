import React, { useState } from 'react';

const EditProduct = () => {
  const [productData, setProductdata] = useState({
    name: '',
    description: '',
    price: 0,
    sku: '',
    countInStock: 0,
    category: '',
    brand: '',
    sizes: [],
    colors: [],
    collections: '',
    material: '',
    gender: '',
    images: [
      { url: 'https://picsum.photos/500/500?random=1' },
      { url: 'https://picsum.photos/500/500?random=2' }
    ]
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setProductdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImagesUpload = async (e) => {
    const files = e.target.files[0];
    console.log(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };

  return (
    <div className="w-[900px] mx-auto p-8 bg-white shadow-md rounded-lg max-w-4xl">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8 border-b pb-3">Edit Product</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handlechange}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Count In Stock */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Count In Stock</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        {/* SKU */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handlechange}
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        {/* Sizes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sizes (comma separated)</label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(', ')}
            onChange={(e) =>
              setProductdata({
                ...productData,
                sizes: e.target.value.split(',').map((size) => size.trim())
              })
            }
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Colors */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Colors (comma separated)</label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(', ')}
            onChange={(e) =>
              setProductdata({
                ...productData,
                colors: e.target.value.split(',').map((color) => color.trim())
              })
            }
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
          <input
            type="file"
            onChange={handleImagesUpload}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:font-medium file:bg-blue-100 file:text-blue-800 hover:file:bg-blue-200"
          />

          <div className="flex gap-3 mt-4 flex-wrap">
            {productData.images.map((image, index) => (
              <div key={index} className="w-16 h-16 rounded overflow-hidden shadow border">
                <img
                  src={image.url}
                  alt={image.altText || 'Product'}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md text-sm font-medium hover:bg-green-700 transition duration-200"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
