import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import women from '.././assets/women.png'

const Register = () => {
    const[name,setname]= useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log("user Registeres:",{name,email,password});

  }

  return (
    <div className='flex'>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-8">
        <form
         onSubmit={handlesubmit} 
         className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm'>
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">
              Sandhya.
            </h2>
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center">Hey there!👋</h2>
          <p className="text-center font-bold mb-6">Enter your username and password to login</p>

          <div className="mb-4">
            <label className='block text-sm font-semibold mb-2'>Name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setname(e.target.value)}
              className='w-full p-2 border rounded'
              placeholder='Enter your Name'
            />
          </div>

          <div className="mb-4">
            <label className='block text-sm font-semibold mb-2'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className='w-full p-2 border rounded'
              placeholder='Enter your Email address'
            />
          </div>

          <div className="mb-4">
            <label className='block text-sm font-semibold mb-2'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className='w-full p-2 border rounded'
              placeholder='Enter your password'
            />
          </div>
          <button type='submit'
           className="w-full bg-black rounded-lg text-white p-2 font-semibold hover:bg-gray-800 transition">
            Sign Up
          </button>
          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/login" className='text-blue-500' >
           Login
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
      <div className="h-full flex flex-col justify-center items-center">
        <img src={women} alt="Login to account" className='h-[600px] w-full object-cover' />
        </div>
        </div>
    </div>
  );
};

export default Register;

