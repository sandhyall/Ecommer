import React from 'react';
import { Link } from 'react-router-dom';

const AdminHomepage = () => {
  const orders = [
    {
      _id: 12345,
      user: { name: "John Doe" },
      totalPrice: 110,
      status: "processing",
    },
    {
      _id: 12346,
      user: { name: "Jane Smith" },
      totalPrice: 220,
      status: "delivered",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="p-6 shadow-lg rounded-lg bg-white border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Revenue</h2>
          <p className="text-2xl font-bold text-green-600">$1000</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg bg-white border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Orders</h2>
          <p className="text-2xl font-bold text-blue-600">200</p>
          <Link to="/admin/orders" className="mt-2 inline-block text-sm text-blue-500 hover:underline">
            Manage Orders
          </Link>
        </div>

        <div className="p-6 shadow-lg rounded-lg bg-white border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Products</h2>
          <p className="text-2xl font-bold text-purple-600">100</p>
          <Link to="/admin/products" className="mt-2 inline-block text-sm text-blue-500 hover:underline">
            Manage Products
          </Link>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-gray-800">Recent Orders</h2>
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-md">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 uppercase text-xs text-gray-600">
              <tr>
                <th className="py-3 px-5">Order ID</th>
                <th className="py-3 px-5">User</th>
                <th className="py-3 px-5">Total Price</th>
                <th className="py-3 px-5">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id} className="border-t hover:bg-gray-50">
                    <td className="py-3 px-5 font-medium">{order._id}</td>
                    <td className="py-3 px-5">{order.user.name}</td>
                    <td className="py-3 px-5">${order.totalPrice}</td>
                    <td className="py-3 px-5 capitalize">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-4 px-5 text-center text-gray-500">
                    No recent orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomepage;
