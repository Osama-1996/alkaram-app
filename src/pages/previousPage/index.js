import React, { useEffect } from 'react';
import Slider from "react-slick";
import { useSpring, animated } from '@react-spring/web';
import AOS from 'aos';
import 'aos/dist/aos.css';
import P1 from "../../assets/images/p1.PNG";
import P2 from "../../assets/images/p2.PNG";
import P3 from "../../assets/images/p3.PNG";
import P4 from "../../assets/images/p4.PNG";
import P5 from "../../assets/images/p5.PNG";
import P6 from "../../assets/images/p6.PNG";

const OurPreviousProject = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const PreviousProjects = [
        { id: 1, image: P1 },
        { id: 2, image: P2 },
        { id: 3, image: P3 },
        { id: 4, image: P4 },
        { id: 5, image: P5 },
        { id: 6, image: P6 },
    ];

    const ProjectCard = ({ project, position }) => {
        const [props, api] = useSpring(() => ({ 
            opacity: 0, 
            transform: 'translateY(20px) rotateY(0deg)' 
        }));

        useEffect(() => {
            let rotateY = 0;
            if (position === 'left') rotateY = -15;
            if (position === 'right') rotateY = 15;

            api.start({ 
                opacity: 1, 
                transform: `translateY(0px) rotateY(${rotateY}deg)`, 
                delay: project.id * 200 
            });
        }, [api, project.id, position]);

        return (
            <animated.div
                className="flex justify-center rounded-xl"
                style={props}
                data-aos="zoom-in"
            >
                <img src={project.image} alt={`Project ${project.id}`} className="w-full h-full object-cover rounded-xl px-2" />
            </animated.div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
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
        <div className="container mx-auto py-8 mb-6" id="gallery">
            <h1 className="text-center text-3xl font-bold mb-8" data-aos="fade-up">Our Previous Projects</h1>
            <Slider {...settings}>
                {PreviousProjects.map((project, index) => {
                    let position = 'center';
                    if (index % 3 === 0) position = 'left';
                    if (index % 3 === 2) position = 'right';

                    return <ProjectCard key={project.id} project={project} position={position} />;
                })}
            </Slider>
        </div>
    );
};

export default OurPreviousProject;
