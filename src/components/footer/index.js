import React from 'react';
import Logo from "../../assets/images/logo.png"
const Footer = () => {
    return (


        <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className='w-[180px] h-[80px]' alt="Flowbite Logo" />
                 
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <a href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 font-[500] mr-4">Home</a>
                    <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 font-[500] mr-4">Services</a>
                    <a href="#featured-products" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 font-[500] mr-4">Shop now</a>
                    <a href="#about-us" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 font-[500] mr-4">About Us</a>
                    <a href="#gallery" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 font-[500] mr-4">Our Projects</a>
                    <a href="#testimonials" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 font-[500] mr-4">Testimonials</a>
                    <a href="#contact-us" className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 font-[500]">Contact Us</a>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    );
};

export default Footer;
