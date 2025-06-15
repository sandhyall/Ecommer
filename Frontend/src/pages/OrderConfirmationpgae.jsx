import React from 'react';

const checkout = {
  _id: "1234",
  createAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      quantity: 1,
      images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket" }],
    },
    {
      productId: "2",
      name: "T-shirt",
      size: "M",
      color: "Black",
      price: 130,
      quantity: 2,
      images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket" }],
    },
  ],
  shippingAddress: {
    address: "123 Fashion Stress",
    city: "New York",
    country: "USA",
  }
};

const OrderConfirmationpgae = () => {
  const calculateEstimatedDelivary = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10); // Add 10 days
    return orderDate.toLocaleDateString();
  };

  return (
    <div className='max-w-3xl mx-auto p-5 bg-white'>
      <h1 className="text-3xl font-bold text-center text-emerald-600 mb-7">
        Thank you for your order!
      </h1>

      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* order id and date */}
            <div>
              <h2 className="text-xl font-semibold">Order ID: {checkout._id}</h2>
              <p className="text-gray-800">
                Order date: {new Date(checkout.createAt).toLocaleDateString()}
              </p>
            </div>

            {/* Estimated Delivery */}
            <div>
              <p className="text-emerald-600 text-sm">
                Estimated Delivery: {calculateEstimatedDelivary(checkout.createAt)}
              </p>
            </div>
          </div>

          {/* order items */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className='flex items-center justify-between mb-4'>
                <img
                  src={item.images[0].url}
                  alt={item.images[0].altText}
                  className='w-14 h-14 object-cover rounded-md mr-3'
                />

                <div className='flex-1'>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.color} | {item.size}</p>
                </div>

                <div className='text-right'>
                  <p className="text-md">${item.price}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* payment and delivary info */}
          <div className="grid grid-cols-2 gap-3">
            {/* payment info */}
            <div >
                <h4 className='text-lg font-semibold mb-1'>Payment</h4>
                <p className="text-gray-700">Paypal</p>

            </div>
            {/* delivary info */}
            <div>
                <h4 className="text-lg font-semibold mb-1">Delivary</h4>
                <p className='text-gray-600'>
                    {checkout.shippingAddress.address}

                </p>
                <p className=" text-gray-700">{checkout.shippingAddress.city},{""}
                    {checkout.shippingAddress.country}
                </p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default OrderConfirmationpgae;
