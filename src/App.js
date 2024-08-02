import './App.css';
import Header from './components/header';
import HeroPage from './pages/heroPage';
import Services from './pages/services';
import OurProducts from "./pages/Products/index"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aboutus from './pages/aboutpage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurPreviousProject from './pages/previousPage';
import TestimonialsCarousel from './pages/testimonialsPage';
import "leaflet/dist/leaflet.css";
import ContactUs from './pages/contactus';
import Footer from './components/footer';
import 'aos/dist/aos.css';
function App() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <HeroPage />
      <Services/>
      <OurProducts/>
      <Aboutus/>
      <OurPreviousProject/>
      <TestimonialsCarousel/>
      <ContactUs/>
      <Footer/>
    </div>

  );
}

export default App;
