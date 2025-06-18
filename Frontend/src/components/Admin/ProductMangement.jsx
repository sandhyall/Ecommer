import React from 'react';
import { Link } from 'react-router-dom';

const ProductMangement = () => {
  const products = [
    {
      _id: "1234512",
      name: "Shirt",
      price: "100",
      sku: "123455"
    },
  ];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the product?")) {
      console.log("Delete product with id:", id);
    }
  };

  return (
    <div className='max-w-7xl mx-auto p-6'>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Product Management</h2>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className='min-w-full divide-y divide-gray-200 text-sm text-gray-700'>
          <thead className='bg-gray-50 uppercase text-xs text-gray-600'>
            <tr>
              <th className="px-6 py-3 text-left font-medium">Name</th>
              <th className="px-6 py-3 text-left font-medium">Price</th>
              <th className="px-6 py-3 text-left font-medium">SKU</th>
              <th className="px-6 py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id} className='hover:bg-gray-50 border-b'>
                  <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                    {product.name}
                  </td>
                  <td className='px-6 py-4'>${product.price}</td>
                  <td className='px-6 py-4'>{product.sku}</td>
                  <td className='px-6 py-4'>
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className='inline-block bg-yellow-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-yellow-600 transition'
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className='px-6 py-4 text-center text-gray-500'>
                  No Products Found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductMangement;
