import React from 'react';
import logo from '../../assets/logo.svg';
import phone from '../../assets/SVGs/phone.svg';
const Footer = () => {
    return (
        <footer className="bg-[#211f21] text-white py-12 px-6 relative shadow-[0_-10px_15px_-3px_rgba(255,255,255,0.1)]">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
              
                    <div className="flex items-center">
                        <img src={logo} alt="" className='w-40' />
                    </div>

          
                <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-xl">+420 000 000 000</span>
                </div>


                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                        <div>Na Plzeňce 1166/0</div>
                        <div>150 00</div>
                    </div>
                </div>
            </div>


            <div className="pt-4 border-t border-gray-700">
                <a href="#" className="text-white hover:text-gray-300 transition">Privacy Policy</a>
            </div>
        </div>
        <div className="text-center mt-8">
            <p className="text-lg">Developed by: Kodrish Innovation & Solution LLP </p>
            <p className="text-sm">Developers: Sanidhya Soni, Murlidhar Carpenter & Krishna Chouhan </p>
        </div>
    </footer>
    );
};

export default Footer;