import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    const[issidebaropen,setissidebaropen] = useState(false);

    const toggleSidebar =()=>{
        setissidebaropen(!issidebaropen);
    };
  return (
    <div className='min-h-screen flex flex-col md:flex-row relative'>
        {/* mobile toggle button  */}
        <div className="flex md:hidden p-4 bg-gray-800 text-white z-19">
            <button onClick={toggleSidebar} >

                  <FaBars size={23}/>
                 

            </button>
            <h1 className="ml-4 text-lg font-medium">Admin Dashboard</h1>
        </div>

        {/* Overlay for mobile sidebar */}
        {issidebaropen &&(
            <div className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden" onClick={toggleSidebar}>

            </div>
        )}
        {/* sidebar */}
        <div className={`bg-gray-700 w-64 min-h-screen text-white aboslute 
            md:relative transform ${issidebaropen ? "translate-x-0":"-translate-x-full"} 
            transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}>

                {/* sidebar */}
                <AdminSidebar/>
            </div>

            {/* main content */}
            <div className="flex-groe p-6 overflow-auto">
                <Outlet/>
            </div>

    </div>
  )
}

export default AdminLayout