// components/Header.js
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Header = ({toggleSidebar, isOpen}) => {
  return (
    <header className="bg-navbarBgColor text-white py-4 px-6 flex items-center gap-2">
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isOpen ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
        </button>
        <span className="text-xl font-semibold">Voice of The People Party - Dashboard</span>
    </header>
  );
};

export default Header;
