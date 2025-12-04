import React from 'react';
import { formatTotal } from '../utils/formatUtils';

const Navbar = ({ token, total }) => {
  const formattedTotal = formatTotal(total);

  return (
    <nav className="bg-gray-900 p-4 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center flex-wrap">

        <span className="text-2xl font-extrabold text-yellow-400">
          Pizzería Mamma Mia!
        </span>

        <div className="flex items-center space-x-3 mt-2 md:mt-0">
          
          <button className="bg-transparent text-white py-2 px-3 rounded-lg font-medium hover:bg-gray-700 transition duration-150">
            🍕 Home
          </button>

          {token ? (
            <>
              <button className="bg-transparent text-white py-2 px-3 rounded-lg font-medium hover:bg-gray-700 transition duration-150 flex items-center">
                <span className="mr-2">🔓</span> Profile
              </button>
              <button className="bg-transparent text-white py-2 px-3 rounded-lg font-medium hover:bg-red-700 transition duration-150 flex items-center">
                <span className="mr-2">🔒</span> Logout
              </button>
            </>
          ) : (
            <>
              <button className="bg-blue-600 text-white py-2 px-3 rounded-lg font-medium hover:bg-blue-700 transition duration-150 flex items-center">
                <span className="mr-2">🔐</span> Login
              </button>
              <button className="bg-green-600 text-white py-2 px-3 rounded-lg font-medium hover:bg-green-700 transition duration-150 flex items-center">
                <span className="mr-2">🔐</span> Register
              </button>
            </>
          )}

          <button className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg font-extrabold shadow-md hover:bg-yellow-600 transition duration-150 whitespace-nowrap">
            🛒 Total: {formattedTotal}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;