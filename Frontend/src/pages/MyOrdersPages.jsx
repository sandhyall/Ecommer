import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyOrdersPages = () => {
  const [order, setorder] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockorder = [
      {
        _id: "1234",
        createAt: new Date("2024-05-20"),
        shippingAddress: { city: "New York", country: "USA" },
        orderItems: [
          {
            name: "Product 1",
            image: "https://picsum.photos/500/500?random=1",
          },
        ],
        totalPrice: 100,
        ispaid: true,
      },
      {
        _id: "5678",
        createAt: new Date("2024-06-01"),
        shippingAddress: { city: "London", country: "UK" },
        orderItems: [
          {
            name: "Product 2",
            image: "https://picsum.photos/500/500?random=2",
          },
          {
            name: "Product 3",
            image: "https://picsum.photos/500/500?random=3",
          },
        ],
        totalPrice: 180,
        ispaid: false,
      }
    ];
    setorder(mockorder);
  }, []);

  const handleRowClick =(orderId)=>{
    navigate(`/order/${orderId}`);

  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">My Orders</h2>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 text-left">Image</th>
              <th className="px-6 py-4 text-left">Order ID</th>
              <th className="px-6 py-4 text-left">Created</th>
              <th className="px-6 py-4 text-left">Shipping</th>
              <th className="px-6 py-4 text-left">Items</th>
              <th className="px-6 py-4 text-left">Price</th>
              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {order.length > 0 ? (
              order.map((order) => (
                <tr key={order._id} 
                onClick={()=>handleRowClick(order._id)}
                className="border-b hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="h-12 w-12 object-cover rounded-md border"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">{order._id}</td>
                  <td className="px-6 py-4">
                    {new Date(order.createAt).toLocaleDateString()}{" "}
                    {new Date(order.createAt).toLocaleTimeString()}
                  </td>
                  <td className="px-6 py-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="px-6 py-4">{order.orderItems.length}</td>
                  <td className="px-6 py-4 font-semibold">${order.totalPrice}</td>
                  <td className="px-6 py-4">
                    {order.ispaid ? (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Paid
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Unpaid
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPages;
