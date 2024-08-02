import React, { useState } from 'react';
import Logo from "../../assets/images/logo.png"
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-[#e9e9e9] shadow-md py-2">
            <div className="container mx-auto flex justify-between items-center py-1 px-4">
              <img src={Logo} alt='' className='w-[180px] h-[80px]'/>
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <nav className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <a href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 font-[500] mr-4 border-b-4 border-transparent hover:border-teal-800">Home</a>
                    <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 font-[500] mr-4 border-b-4 border-transparent hover:border-teal-800">Services</a>
                    <a href="#featured-products" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 font-[500] mr-4 border-b-4 border-transparent hover:border-teal-800">Shop now</a>
                    <a href="#about-us" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 font-[500] mr-4 border-b-4 border-transparent hover:border-teal-800">About Us</a>
                    <a href="#gallery" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 font-[500] mr-4 border-b-4 border-transparent hover:border-teal-800">Our Projects</a>
                    <a href="#testimonials" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 font-[500] mr-4 border-b-4 border-transparent hover:border-teal-800">Testimonials</a>
                    <a href="#contact-us" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 font-[500] border-b-4 border-transparent hover:border-teal-800">Contact Us</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
