import AboutUS from "../../assets/images/about.PNG"

const Aboutus = () => {
    return (
        <div className="container mx-auto py-8" id="about-us" data-aos="fade-up">
            <div>
                <h1 className="text-center font-extrabold text-3xl md:text-4xl pb-4">About Us</h1>
            </div>
            <div className="flex justify-center">
                <img src={AboutUS} alt="About Us" className="w-full  h-auto object-cover rounded-lg shadow-md" />
            </div>
            <div>
                <p className="text-center px-4 py-8 font-medium text-md md:text-xl leading-relaxed">
                    Welcome to Karam AlAfaq, your premier destination for exquisite window curtain & Aluminum solutions. With a steadfast commitment to quality craftsmanship and innovative design, we specialize in manufacturing premium window curtains & Aluminum products that elevate the ambiance of any space. Established with a passion for enhancing interior aesthetics, our company prides itself on delivering unparalleled elegance and functionality in every product we produce. From timeless classics to contemporary marvels, our diverse range of products caters to various styles and preferences, ensuring that every customer finds the perfect fit for their home or business. Backed by years of industry expertise, we strive for excellence in every aspect of our operation, from material selection to customer service. At Karam AlAfaq, we envision transforming sites into focal points of beauty & sophistication.
                </p>
            </div>
        </div>
    )
}

export default Aboutus;
