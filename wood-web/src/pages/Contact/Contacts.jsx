import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import vectorImage from "../../assets/Vector 30.png";
import topo from "../../assets/topo.svg";
import topo1 from "../../assets/topo (2).svg";
export default function Contact() {
  return (
    <div
      className="bg-contain bg-[#211f21] flex justify-center items-center bg-repeat min-h-screen text-white"
      style={{ backgroundImage: `url(${topo1})` }}
    >
      {/* Navbar */}

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-12 text-white">
        {/* Contact Info and Google Map */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          {/* Contact Information */}
          <div className="flex justify-center items-center w-full h-full">
            <div className="flex flex-col space-y-4 w-full md:w-1/2 md:pr-8 items-center md:items-start">
            <h2 className=" text-5xl md:text-7xl  font-bold text-center md:text-left">
              CONTACT
            </h2>
            <br />
            <br />
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-xl text-gray-400" />
              <p className="text-lg">+420 000 000 000</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-xl text-gray-400" />
              <p className="text-lg">XYZ 1166/0, 150 00</p>
            </div>
          </div>
          </div>

          {/* Google Map Section */}
          <div className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.2568504039596!2d-93.09550531107715!3d44.73477639648124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f7cca9cec484e3%3A0x3100a2469dbb09a9!2s1166%20150th%20St%20W%2C%20Rosemount%2C%20MN%2055068%2C%20USA!5e0!3m2!1sen!2sin!4v1741088599389!5m2!1sen!2sin"
              width="100%"
              // height="400"
              height="400"
              className="rounded-4xl z-40 shadow-lg aspect-square"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
