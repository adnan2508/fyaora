"use client";
import Image from "next/image";
import { X } from "lucide-react";
import SidebarFilter from "./SidebarFilter";
import { useMobileMenu } from "@/contexts/MobileMenuContext";

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useMobileMenu();

  return (
    <>
      {/* Sidebar */}
      <aside className={`
        fixed lg:static top-0 left-0 h-full w-64 bg-[#F4F7F9] border-r border-gray-200 p-4 space-y-6 z-50 
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Close button for mobile */}
        <div className="flex justify-between items-center lg:hidden">
          <div></div>
          <button 
            onClick={closeSidebar}
            className="p-2 hover:bg-gray-200 rounded-md"
          >
            <X size={20} />
          </button>
        </div>
        {/* Logo and Title */}
        <div className="flex flex-start">
        <Image
          src="/union.png"
          alt="Logo"
          width={50}
          height={50}
          className="w-12 h-12 mr-2"
        />
        <h2 className="text-[#1A78F2]">Admin Panel</h2>
        </div>
        
        <div className="bg-[#D3D8DD] rounded-lg py-2">
         <h2 className="text-lg text-center font-semibold">User Management</h2>
        </div>
       
        {/* Filters */}
        <SidebarFilter />
      </aside>
    </>
  );
}
