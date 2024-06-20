const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-10 mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <h2 className="text-lg font-bold mb-4">Get to Know Us</h2>
              <ul>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Press Releases</a></li>
                <li><a href="#" className="hover:underline">Amazon Cares</a></li>
                <li><a href="#" className="hover:underline">Gift a Smile</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">Connect with Us</h2>
              <ul>
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">Make Money with Us</h2>
              <ul>
                <li><a href="#" className="hover:underline">Sell on Amazon</a></li>
                <li><a href="#" className="hover:underline">Sell under Amazon Accelerator</a></li>
                <li><a href="#" className="hover:underline">Amazon Global Selling</a></li>
                <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
                <li><a href="#" className="hover:underline">Fulfilment by Amazon</a></li>
                <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
                <li><a href="#" className="hover:underline">Amazon Pay on Merchants</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">Let Us Help You</h2>
              <ul>
                <li><a href="#" className="hover:underline">Your Account</a></li>
                <li><a href="#" className="hover:underline">Returns Centre</a></li>
                <li><a href="#" className="hover:underline">100% Purchase Protection</a></li>
                <li><a href="#" className="hover:underline">Amazon App Download</a></li>
                <li><a href="#" className="hover:underline">Amazon Assistant Download</a></li>
                <li><a href="#" className="hover:underline">Help</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfk5EpYhMg8UEC5DCQkuJoroVS8wMSz6NIA&s"
                alt="logo"
                className="w-24 mb-4 md:mb-0"
              />
              <div className="text-center md:text-left">
                <span>&copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  