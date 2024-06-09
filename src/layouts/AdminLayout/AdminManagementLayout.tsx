import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavigationBar from '../../components/AdminNavigationBar/AdminNavigationBar';

export default function AdminManagementLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex w-screen h-screen">
      <AdminNavigationBar isOpen={isSidebarOpen} />
      <div className={"flex relative"}>
        <button 
          onClick={toggleSidebar}
          className="aspect-square bg-border w-8 flex flex-col justify-center items-center rounded-r-lg absolute top-3"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none"
            transform={isSidebarOpen ? '' : 'rotate(180)'}
          >
            <path 
              d="M15 7L10 12L15 17" 
              stroke="#F0F0F0" 
              stroke-width="1.5" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
          </svg>
        </button>
        </div>
        <Outlet />
    </div>
  );
}
