import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import React from "react";

export default function Navbar({ isHome }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(isHome);

  return (
    <>
      <div className="bg-[#211f21]">
        <div className="flex items-center justify-between h-16  sm:h-18 md:h-30 bg-[#1d0c05] rounded-b-[50px] sm:rounded-b-[60px] md:rounded-b-[70px] px-6 sm:px-12 md:px-20 py-6 md:p-10 relative shadow-[0_5px_15px_rgba(255,255,255,0.2)]">
          <Link to="/">
            <img src={logo} className="w-24 sm:w-28 md:w-35" alt="Logo" />
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex text-white space-x-4 lg:space-x-20 font-semibold">
            <Link
              to="/gallery"
              className="hover:text-gray-300 transition-colors"
            >
              Gallery
            </Link>
            <Link to="/price" className="hover:text-gray-300 transition-colors">
              Prices
            </Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-300 transition-colors"
            >
              Contacts
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white  px-4 py-2 rounded-md"
            onClick={toggleMenu}
          >
          
              <svg
              className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 12H20M4 8H20M4 16H12"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1d0c05] text-white py-6 px-6 flex flex-col space-y-4 font-medium border-t border-[#3a1d0f] animate-fadeIn">
            <Link
              to="/gallery"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/price"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Prices
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacts
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
