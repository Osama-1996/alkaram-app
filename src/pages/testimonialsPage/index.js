import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Testimonial from "../../assets/images/test1.jpeg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const testimonials = [
    {
        name: "Rohan Arora",
        text: "Excellent range of venetian blinds at very low pricing as compared to market rate.",
    },
    {
        name: "Rahul Sharma",
        text: "Very good service. From product demo to delivery, very professional services are offered.",
    },
    {
        name: "John Doe",
        text: "Fantastic products and superb customer service. Highly recommend!",
    },
    {
        name: "Jane Smith",
        text: "Affordable and reliable. Great experience overall.",
    }
];

const TestimonialsCarousel = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
        });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: <button className="slick-prev">←</button>,
        nextArrow: <button className="slick-next">→</button>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
        ],
    };

    return (
        <div className='bg-[#ccd2d2] ps-2' id='testimonials'>
            <div className="max-w-6xl mx-auto py-16 flex items-center">
                <div className="w-1/2 flex justify-center">
                    <img 
                        src={Testimonial} 
                        alt="Testimonial" 
                        className="object-cover w-[300px]" 
                        data-aos="fade-right"
                    />
                </div>
                <div className="w-1/2">
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col items-center justify-center px-4" 
                                data-aos="fade-up"
                            >
                                <blockquote className="text-gray-700 italic mb-4 text-center md:text-left">
                                    {testimonial.text}
                                </blockquote>
                                <p className="text-gray-900 font-semibold text-center md:text-left">
                                    {testimonial.name}
                                </p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCarousel;
