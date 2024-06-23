/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = useSelector((state) => state.user);

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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300" onClick={toggleSidebar}>
          <div
            className={`fixed inset-y-0 left-0 w-64 p-4 bg-white shadow-lg z-50 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-gray-800 text-2xl font-bold">Menu</h2>
              <img src={user.photoURL} alt="" className='h-14 w-14 rounded-full' />
              <CloseIcon className="text-gray-800 cursor-pointer" onClick={toggleSidebar} />
            </div>
            <ul className="text-gray-800">
              <Link to='/profile'>
                <li className="py-2 hover:bg-gray-500 p-4 font-bold">
                  <a href="#">Hello, {user?.displayName || 'Guest'}</a>
                </li>
              </Link>
              <Link to="/"> <li className="py-2 hover:bg-gray-500 rounded-sm p-4 font-semibold"><a href="#">Home</a></li></Link>
              <Link to="/signup">
                <li className="py-2 hover:bg-gray-500 rounded-sm p-4  font-semibold"><a href="#">Sign In</a></li>
              </Link>
              <li className="py-2 hover:bg-gray-500 rounded-sm p-4 font-semibold">
                <Link to="/profile">
                  Profile
                </Link>
              </li>
              <li className="py-2 hover:bg-gray-500 rounded-sm p-4 font-semibold"><a href="#">Sell</a></li>
              <Link to='/help'>
                <li className="py-2 hover:bg-gray-500 rounded-sm p-4 font-semibold"><a href="#">Help</a></li>
              </Link>
              <li className="py-3 hover:bg-gray-500 rounded-sm p-4 font-semibold"><a href="#">Trending</a></li>
              <li className="py-2 hover:bg-gray-500 rounded-sm p-4 font-semibold"><a href="#">Books</a></li>
              <li className="py-2 hover:bg-gray-500 rounded-sm p-4 font-semibold"><a href="#">Costumer's Services</a></li>
              <li className="py-2 hover:bg-gray-500 rounded-sm p-4 font-semibold"><a href="#">Gift Cards</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
