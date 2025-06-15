import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { HiCreditCard } from "react-icons/hi";
import { HiArrowPath } from "react-icons/hi2";

const FeatureSection = () => {
  return (
    <div>
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-4">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="p-4 bg-gray-100 rounded-full mb-4">
              <FaShoppingBag className="text-2xl text-black" />
            </div>
            <h4 className="text-lg font-semibold mb-1">FREE INTERNATIONAL SHIPPING</h4>
            <p className="text-gray-600 text-sm">On all orders over $100.00</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="p-4 bg-gray-100 rounded-full mb-4">
              <HiArrowPath className="text-2xl text-black" />
            </div>
            <h4 className="text-lg font-semibold mb-1">45 DAYS RETURNS</h4>
            <p className="text-gray-600 text-sm">Money back guarantee</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="p-4 bg-gray-100 rounded-full mb-4">
              <HiCreditCard className="text-2xl text-black" />
            </div>
            <h4 className="text-lg font-semibold mb-1">SECURE CHECKOUT</h4>
            <p className="text-gray-600 text-sm">100% secured checkout process</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
