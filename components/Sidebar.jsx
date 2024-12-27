// components/Sidebar.js
"use client"
// components/Sidebar.js

import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FaPrayingHands } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaHouseFire } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

// components/Sidebar.js

const Sidebar = ({ toggleSidebar, isOpen, onMenuItemClick, activeContent }) => {
  const menuItems = [
    { id: 'prayer', label: 'Main Page', icon: <FaPrayingHands /> },
    { id: 'notifications', label: 'Notifications', icon: <IoMdNotifications /> },
    { id: 'services', label: 'Services', icon: <FaHouseFire /> },
    { id: 'events', label: 'Events', icon: <SlCalender /> },
  ];

  const handleClick = (itemId) => {
    onMenuItemClick(itemId);
    toggleSidebar(); // Optional: Close the sidebar after clicking
  };

  return (
    <div className={`fixed h-screen w-64 bg-navbarBgColor text-white ${isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}`}>
      <div className="flex justify-between items-center p-4">
        <span className="text-xl font-semibold">Dashboard</span>
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isOpen ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
        </button>
      </div>
      <div className="overflow-y-auto">
        <ul className="text-left">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`cursor-pointer p-2 flex items-center gap-2 
                ${activeContent === item.id ? 'bg-gray-700 text-yellow-400' : 'hover:bg-gray-700'}`}
            >
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;


