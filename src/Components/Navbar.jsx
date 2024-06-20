/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  return (
    <div className="bg-black w-full">
      <nav className="flex justify-between items-center py-2 px-4 md:px-6">
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfk5EpYhMg8UEC5DCQkuJoroVS8wMSz6NIA&s"
            alt="logo"
            className="h-14 w-20 md:w-24 rounded-md cursor-pointer"
          />
          <div className="hidden md:flex items-center ml-4 text-white">
            <LocationOnIcon className="mr-1" />
            <span>Deliver to</span>
          </div>
        </div>
        <div className="flex items-center relative flex-grow mx-4">
          <button
            className="bg-gray-400 text-black py-2 px-2 md:px-4 rounded-l-md hover:border hover:border-white"
            onMouseEnter={toggleDropdown}
          >
            All
          </button>
          {dropdownOpen && (
            <div className="absolute top-10 bg-white text-black w-48 py-2 mt-2 rounded-md shadow-md left-0 z-10">
              <ul>
                <li className="py-2 px-4 hover:bg-gray-700 hover:text-white">
                  <a href="#">Men's Fashion</a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-700 hover:text-white">
                  <a href="#">TV & Mobile</a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-700 hover:text-white">
                  <a href="#">Ladies Fashion</a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-700 hover:text-white">
                  <a href="#">Baby</a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-700 hover:text-white">
                  <a href="#">Luggage</a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-700 hover:text-white">
                  <a href="#">Sport & Tools</a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-700 hover:text-white">
                  <a href="#">Electronics</a>
                </li>
                <li className="py-2 px-4 hover:bg-gray-700 hover:text-white">
                  <a href="#">Software</a>
                </li>
              </ul>
            </div>
          )}
          <input
            type="text"
            className="bg-white text-black py-2 px-2 md:px-4 w-full border-none"
            placeholder="Search"
          />
          <button className="bg-yellow-500 text-black py-2 px-2 md:px-4 rounded-r-md flex items-center justify-center hover:border hover:border-white">
            <SearchIcon />
          </button>
        </div>
        <div className="flex items-center">
          <div className="relative mr-4">
            <button
              className="bg-black text-white py-2 px-2 md:px-4 rounded-md hover:border hover:border-white"
              onMouseEnter={toggleLanguageDropdown}
            >
              EN
            </button>
            {languageDropdownOpen && (
              <div className="absolute top-10 bg-white text-black w-48 py-2 mt-2 rounded-md shadow-md left-0 z-10">
                <ul>
                  <li className="py-2 px-4 hover:bg-gray-700 hover:text-white">
                    <a href="#">English</a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-700 hover:text-white">
                    <a href="#">Spanish</a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-700 hover:text-white">
                    <a href="#">French</a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-700 hover:text-white">
                    <a href="#">German</a>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-700 hover:text-white">
                    <a href="#">Chinese</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="hidden md:flex flex-col items-start mr-4 text-white hover:border hover:border-white">
            <span className="text-xs">Hello, Sign in</span>
            <span className="font-bold">Account & Lists</span>
          </div>
          <div className="hidden md:flex flex-col items-start mr-4 text-white hover:border hover:border-white">
            <span className="text-xs">Returns</span>
            <span className="font-bold">& Orders</span>
          </div>
          <ShoppingCartIcon className="text-white hover:border hover:border-white" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
