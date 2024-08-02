import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Footer = () => {
  const position = [24.774265, 46.738586]; 

  const customIcon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  });

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <div className="bg-gray-100 py-16" id='contact-us'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold mb-8" data-aos="fade-up">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="w-full h-80 lg:h-full" data-aos="fade-right">
            <MapContainer center={position} zoom={13} className="w-full h-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} icon={customIcon}>
                <Popup>Emerald Blinds</Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="flex flex-col justify-center space-y-6 px-6" data-aos="fade-left">
            <div>
              <h3 className="text-lg font-semibold">Our Office Address</h3>
              <p>7409 Hadhramaut Street, Hai al Manakh, Riyadh, Saudi Arabia</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">General Enquiries</h3>
              <p>karamalafaqcontracting@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Call Us</h3>
              <p>+966-123456789</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Our Timing</h3>
              <p>Mon - Sun : 10:00 AM - 07:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
