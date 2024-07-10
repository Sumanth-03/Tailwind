import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getData } from '../api';

function Nav() {
  const [isOpen, setIsOpen] = useState(false); 
  const navigate = useNavigate();

  const handleClick = () => {
    getData(navigate);
    setIsOpen(false); 
  };

  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none md:hidden"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen ? 'true' : 'false'}
            onClick={() => setIsOpen(!isOpen)} 
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className={`md:flex ${isOpen ? 'block' : 'hidden'} space-x-4`}>
            <NavLink
              className="text-gray-300 hover:text-gray-900 no-underline"
              exact
              to="/"
              activeClassName="font-bold text-blue-600"
              onClick={handleClick}
            >
              Form
            </NavLink>
            <NavLink
              className="text-gray-300 hover:text-gray-900 no-underline"
              exact
              to="/displayResponse"
              activeClassName="font-bold text-red-600"
              onClick={handleClick}
            >
              Get Data
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
