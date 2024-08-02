import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroImage from "../../assets/images/hero.png";

const HeroPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <section className="relative bg-gray-200 h-screen" id="home">
            <img src={HeroImage} alt="Window Blinds" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 flex flex-col justify-center md:items-start items-center px-3 md:px-14 pt-6">
                <h1 
                    className="text-[50px] text-center md:text-start md:text-[80px] font-bold text-gray-700" 
                    data-aos="fade-right"
                >
                    KARAM ALAFAQ
                </h1>
                <h2 
                    className="text-4xl md:text-[60px] pt-4 md:pt-1 text-gray-700 mt-2 tracking-[10px] md:tracking-[27px]" 
                    data-aos="fade-right"
                   
                >
                    Contracting
                </h2>
                <p 
                    className="text-xl md:text-2xl text-black mt-8 text-center md:text-start" 
                    data-aos="fade-right" 
              
                >
                    Experience Comfort and style with our Premium Curtains
                </p>
                <button 
                    className="mt-8 px-4 py-2 bg-teal-800 text-white text-lg font-semibold rounded-lg" 
                    data-aos="fade-right"
                   
                >
                    Enquire Now
                </button>
            </div>
        </section>
    );
};

export default HeroPage;
