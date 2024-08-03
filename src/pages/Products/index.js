import React from 'react';
import Slider from "react-slick";
import { useSpring, animated } from '@react-spring/web';
import { useGesture } from 'react-use-gesture';
import S1 from "../../assets/images/s1.png";
import S2 from "../../assets/images/s2.png";
import S3 from "../../assets/images/s3.png";
import S4 from "../../assets/images/s4.png";
import S5 from "../../assets/images/s5.png";
import S6 from "../../assets/images/s6.png";
import S7 from "../../assets/images/s7.png";
import S8 from "../../assets/images/s8.png";
import S9 from "../../assets/images/s9.png";
import S10 from "../../assets/images/s10.png";
import S11 from "../../assets/images/s11.png";
import S12 from "../../assets/images/s12.png";

const products = [
  { id: 1, name: "Manual operated Roller blinds", price: "55 SR m²", image: S1 },
  { id: 2, name: "Leather Accordion door ", price: "350 SR m²", image: S2 },
  { id: 3, name: "Roman shades", price: " 80 SR m²", image: S3 },
  { id: 4, name: "Hospital Curtains ", price: "220 SR Lm", image: S4 },
  { id: 5, name: "PVC strip curtains ", price: "160 SR m²", image: S5 },
  { id: 6, name: "American Curtains  ", price: "150 ~250 SR m²", image: S6 },
  { id: 7, name: "Wooden Blinds 50mm   ", price: "120 SR m²", image: S7},
  { id: 8, name: "PVC accordion doors Wooden texture", price: "140 SR m²", image: S8 },
  { id: 9, name: "Vertical Blinds 127mm ", price: "50 SR m²", image: S9 },
  { id: 10, name: "Aluminum Venetian Blinds 50mm  ", price: "65 SR m²", image: S10 },
  { id: 11, name: "Aluminum Venetian Blinds 25mm ", price: "50 SR m²", image: S11 },
  { id: 12, name: "PVC accordion doors Plain colour ", price: "110 SR m²", image: S12 },
];

const ProductCard = ({ product }) => {
  const [props, api] = useSpring(() => ({ scale: 1 }));

  const bind = useGesture({
    onHover: ({ hovering }) => api({ scale: hovering ? 1.1 : 1 }),
  });

  return (
    <animated.div
      {...bind()}
      className="bg-white shadow-md rounded-lg overflow-hidden m-2 h-[370px]"
      style={{ transform: props.scale.to(s => `scale(${s})`) }}
    >
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-3" />
      <div className="py-4 px-1 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-600">{product.price}</p>
        <button className="mt-4 bg-teal-500 text-white py-2 px-4 rounded">
          Send Enquiry
        </button>
      </div>
    </animated.div>
  );
};

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="container mx-auto py-8" id="featured-products" data-aos="zoom-in">
      <h1 className="text-center font-[800] text-[45px] pb-7">Shop Now</h1>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
