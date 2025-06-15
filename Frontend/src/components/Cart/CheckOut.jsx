import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paypalbutton from './Paypalbutton';

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket" }],
    },
    {
      name: "Casual Hoodie",
      size: "42",
      color: "White",
      price: 85,
      images: [{ url: "https://picsum.photos/500/500?random=2", altText: "Casual Hoodie" }],
    },
  ],
  totalPrice: 205,
};

const CheckOut = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(123); // mock ID
  };

  const handlePaymentSucess=(details)=>{
    console.log("payment Sucessfull",details);
    navigate("/order-confirmation");
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl mx-auto py-5 px-4 tracking-tight">
      {/* Left section */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-6 uppercase">Checkout</h2>

        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg font-medium mb-3">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-800 mb-1">Email</label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
              disabled
            />
          </div>

          <h3 className="text-lg font-medium mb-3">Delivery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-800 mb-1">First Name</label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, firstName: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-800 mb-1">Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, lastName: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 mb-1">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, address: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-800 mb-1">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, city: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-800 mb-1">Postal Code</label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, postalCode: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 mb-1">Country</label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, country: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 mb-1">Phone Number</label>
            <input
              type="tel"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({ ...shippingAddress, phone: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded hover:bg-gray-900 transition"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg font-medium mb-4">Pay with Paypal</h3>
              <Paypalbutton
              amount={100}
              onSucess = {handlePaymentSucess} 
              onError={(err)=> alert("payment failed . try again.")}/>
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right section */}
      <div className="bg-gray-50 p-6 rounded-lg">
  <h3 className="text-lg mb-3 font-semibold">Order Summary</h3>
  <div className="border-t-2 py-3 mb-3">
    {cart.products.map((product, index) => (
      <div key={index} className="flex items-start justify-between py-2 border-b-2">
        <div className="flex items-start">
          <img
            src={product.images[0].url}
            alt={product.images[0].altText || product.name}
            className="w-20 h-22 object-cover mr-4"
          />
          <div>
            <h4 className="font-medium">{product.name}</h4>
            <p className="text-sm text-gray-600">Size: {product.size}</p>
            <p className="text-sm text-gray-600">Color: {product.color}</p>
          </div>
        </div>
        <p className="font-semibold text-gray-800">${product.price ?.toLocaleString()}</p>
      </div>
    ))}
  </div>
  <div className="flex justify-between items-center text-medium mb-4">
    <p className="">Subtotal</p>
    <p>${cart.totalPrice?.toLocaleString()}</p>
  </div>
  <div className="flex justify-between text-medium">
    <p>Shipping</p>
    <p>Free</p>
  </div>
  <div className="flex justify-between items-center text-medium mb-3 border-t-2 pt-4">
    <p>Total</p>
    <p>${cart.totalPrice?.toLocaleString()}</p>
  </div>
</div>

    </div>
  );
};

export default CheckOut;
