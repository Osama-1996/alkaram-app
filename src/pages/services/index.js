import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSpring, animated } from '@react-spring/web';
import { useGesture } from 'react-use-gesture';
import Service1 from "../../assets/images/ser1.jpeg";
import Service2 from "../../assets/images/ser2.jpeg";
import Service3 from "../../assets/images/ser3.jpeg";
import Service4 from "../../assets/images/ser4.jpeg";
import Service5 from "../../assets/images/ser5.jpeg";
import Service6 from "../../assets/images/ser6.jpeg";
import Service7 from "../../assets/images/ser7.jpeg";
import Service8 from "../../assets/images/ser8.jpeg";
import Service9 from "../../assets/images/ser9.jpeg";

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    const blindsData = [
        { id: 1, name: "Roller Blinds", image: Service1 },
        { id: 2, name: "Wood Blinds", image: Service2 },
        { id: 3, name: "Venetian and Vertical Blinds", image: Service3 },
        { id: 4, name: "Aluminum", image: Service4 },
        { id: 5, name: "Accordion Doors", image: Service5 },
        { id: 6, name: "External Fasteners Curtains (shutters)", image: Service6 },
        { id: 7, name: "Hospital Rails", image: Service7 },
        { id: 8, name: "Cladding", image: Service8 },
        { id: 9, name: "Structure-facade glass", image: Service9 },
    ];

    return (
        <div className="container mx-auto py-8 overflow-hidden" id="services">
            <div>
                <h1 className="text-center font-[800] text-[45px] pb-7" data-aos="fade-up">Services</h1>
            </div>
            <div className="flex flex-wrap">
                {blindsData.map((blind) => (
                    <ServiceCard key={blind.id} blind={blind} />
                ))}
            </div>
        </div>
    );
};

const ServiceCard = ({ blind }) => {
    const [props, api] = useSpring(() => ({ scale: 1 }));

    const bind = useGesture({
        onHover: ({ hovering }) => api({ scale: hovering ? 1.1 : 1 }),
    });

    return (
        <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8" data-aos="fade-up" data-aos-delay={blind.id * 100}>
            <animated.div
                {...bind()}
                className="bg-white shadow-md rounded-lg overflow-hidden shadow-md"
                style={{ transform: props.scale.to(s => `scale(${s})`) }}
            >
                <img src={blind.image} alt={blind.name} className="w-full h-64 object-cover" />
                <div className="p-4 text-center">
                    <h2 className="text-xl font-semibold text-gray-800">{blind.name}</h2>
                </div>
            </animated.div>
        </div>
    );
};

export default Services;
