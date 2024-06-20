/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-gray-800">
      <header className="flex items-center justify-start p-4 h-10 gap-4">
        <div className="flex items-center">
          <div className="mr-4 cursor-pointer" onClick={toggleSidebar}>
            <MenuIcon className="text-white" />
          </div>
          <h1 className="text-white text-xl">My Site</h1>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-4 text-white">
            <li>
              <a href="#">Today's Deals</a>
            </li>
            <li>
              <a href="#">Customer Service</a>
            </li>
            <li>
              <a href="#">Registry</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Sell</a>
            </li>
          </ul>
        </nav>
      </header>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}>
          <div className="fixed inset-y-0 left-0 bg-gray-800 w-64 p-4 z-50" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-xl">Menu</h2>
              <CloseIcon className="text-white cursor-pointer" onClick={toggleSidebar} />
            </div>
            <ul className="text-white">
              <li className="py-2"><a href="#">Sign In</a></li>
              <li className="py-2"><a href="#">Hello, Sign In</a></li>
              <li className="py-2"><a href="#">Home</a></li>
              <li className="py-2"><a href="#">Sell</a></li>
              <li className="py-2"><a href="#">Help</a></li>
              <li className="py-2"><a href="#">Trending</a></li>
              <li className="py-2"><a href="#">Books</a></li>
              <li className="py-2"><a href="#">PC</a></li>
              {/* Add more items as needed */}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
