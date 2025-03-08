import React, { useState } from "react";
import "../../app.css";
import background from "../../assets/backGround.jpg";
import image1 from "../../assets/image-1.png";
import image2 from "../../assets/image-2.png";
import image3 from "../../assets/image-3.png";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const WhatWeOffer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOrder = () => {

    // Check if the device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      // For mobile devices - direct call
      window.location.href = "tel:123456789";
    } else {
      // For desktop - copy number to clipboard
      navigator.clipboard.writeText("123456789")
        .then(() => {
          alert("Phone number copied to clipboard: 123456789");
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
          alert("Could not copy phone number. The number is: 123456789");
        });
      return; // Prevent the default redirect that follows
    }

    window.location.href = "tel:123456789";
  }

  return (
    <div
      className="w-full min-h-screen bg-blend-luminosity backdrop-brightness-200"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // backgroundColor: "rgba(0,0, 0, 0.5)", // Adds a dark overlay
        // Darkens the background image
        filter: "brightness(0.7)",
          }}
        >
          <div className="w-full h-auto px-4 md:px-8 lg:px-20">
        <div className="flex items-center justify-between h-20">
          <img src={logo} className="w-30 md:w-35" alt="Logo" />

          {/* Desktop Menu */}
          <div className="hidden md:flex text-white space-x-6 lg:space-x-20 font-semibold">
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
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col text-white space-y-4 py-4">
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
        )}
      </div>
      <div className="flex flex-col md:flex-row items-center  justify-center md:justify-end py-8 md:py-20">
      <div className="bg-[#1d0c05] w-[85%] md:w-[80%] lg:w-[70%] h-auto md:h-[75%] rounded-2xl md:rounded-l-4xl text-white shadow-[0_0_20px_20px_rgba(255,255,255,0.2)] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 px-6 py-8 md:pl-10 md:pt-10 md:pb-10">
          <div className="md:border-r-2 md:border-white md:pr-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-2">
              SOLID
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-2">
              WOOD
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8">
              PRODUCTS
            </h1>

            <p className="mb-6 text-base md:text-lg">
              Oak, beech, ash from <br />
              <span className="font-bold">1700 CZK per m3</span>
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <button onClick={handleOrder} className="bg-[#728aac] hover:bg-gray-600 text-white font-bold py-2 px-8 md:px-12 rounded-full transition duration-300">
              Order
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative p-4 md:p-6 lg:p-15">
          <div className="w-full justify-end h-[40%] flex">
            <img
              src={image1}
              className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[140px]"
              alt="Wood product"
            />
          </div>
          <div className="flex justify-between h-[60%] w-full">
            <div>
              <img
                src={image2}
                className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[140px]"
                alt="Wood product"
              />
            </div>
            <div className="flex items-end">
              <img
                src={image3}
                className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[140px]"
                alt="Wood product"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
