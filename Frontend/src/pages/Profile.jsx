import React from 'react';
import MyOrdersPages from './MyOrdersPages';

const Profile = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className="flex-grow container mx-auto p-4 md:p-5">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-5 md:space-y-0">

          {/* Left section */}
          <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-7 bg-white">
            <h1 className="text-2xl font-bold mb-4">John Doe</h1>
            <p className='text-lg text-gray-800 mb-4'>John@example.com</p>
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">
              Logout
            </button>
          </div>

          {/* Right section */}
          <div className="w-full md:w-2/3 lg:w-4/5">
            <MyOrdersPages />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
