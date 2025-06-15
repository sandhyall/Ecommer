import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const OrderDetails = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      ispaid: true,
      isDelivered: false,
      paymentMethod: "Paypal",
      shippingMethod: "Standard",
      shippingAddress: { city: "New York", country: "USA" },
      orderItems: [
        {
          productId: "1",
          name: "Jacket",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/500/500?random=1",
        },
        {
          productId: "2",
          name: "Shirt",
          price: 130,
          quantity: 2,
          image: "https://picsum.photos/500/500?random=2",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className='max-w-6xl mx-auto p-4 sm:p-6'>
      <h2 className="text-1xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (
        <p>No Order details found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          {/* Order Info */}
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Order ID: #{orderDetails._id}
              </h3>
              <p className="text-gray-800">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-end mt-3 sm:mt-0">
              <span className={`${orderDetails.ispaid
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-700"
              } px-3 py-1 rounded-full text-sm font-medium mb-2`}>
                {orderDetails.ispaid ? "Approved" : "Pending"}
              </span>
              <span className={`${orderDetails.isDelivered
                ? "bg-green-200 text-green-800"
                : "bg-yellow-200 text-yellow-700"
              } px-3 py-1 rounded-full text-sm font-medium mb-2`}>
                {orderDetails.isDelivered ? "Delivered" : "Pending"}
              </span>
            </div>
          </div>

          {/* Payment & Shipping Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-7">
            <div>
              <h4 className="text-lg font-semibold mb-1">Payment Info</h4>
              <p>Payment Method: {orderDetails.paymentMethod}</p>
              <p>Status: {orderDetails.ispaid ? "Paid" : "Unpaid"}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-1">Shipping Info</h4>
              <p>Shipping Method: {orderDetails.shippingMethod}</p>
              <p>Address: {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}</p>
            </div>
          </div>

          {/* Product List */}
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-3">Products</h4>
            <table className='min-w-full text-gray-800 mb-3'>
              <thead className='bg-gray-200'>
                <tr>
                  <th className="py-2 px-3">Name</th>
                  <th className="py-2 px-3">Unit Price</th>
                  <th className="py-2 px-3">Quantity</th>
                  <th className="py-2 px-3">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => (
                  <tr key={item.productId} className='border-b'>
                    <td className='py-2 px-2 flex items-center'>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='w-11 h-11 object-cover rounded-lg mr-3'
                      />
                      <Link to={`/product/${item.productId}`} className="text-blue-500 hover:underline">
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-2 px-4">${item.price}</td>
                    <td className="py-2 px-4">{item.quantity}</td>
                    <td className="py-2 px-4">${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Back to Orders Link */}
          <Link to="/my-orders" 
          className='text-blue-500 hover:underline'>Back to My Orders</Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
