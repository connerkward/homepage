import React, { useEffect, useState } from 'react';
import Headline from "../components/Headline";
import Footer from '../components/Footer';

const Homepage = (props) => {
  const [ip, setIp] = useState('you');

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIp(data.ip);
      } catch (error) {
        console.error('Error fetching the IP address:', error);
      }
    };

    fetchIP();
  }, []);

  return (
    <>
      <div className="main">
        <Headline props={{ title: "Welcome", subtitle: `Hi... ${ip}!` }} style={{}} />
        <div className="innerbody"></div>

        <Footer
        ></Footer>
        {/* Full-Width Blurred Background Image */}
        <div
          style={{
            position: 'fixed',  // Fixes the background to the viewport
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url('/img/4.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: "contrast(.12) sepia(39%) contrast(2.8)  brightness(0.9) hue-rotate(230deg) contrast(100) brightness(0.2) sepia(70%)",
            zIndex: -1, // Ensures it stays behind the content
          }}
        ></div>
      </div>
    </>
  );
};

export default Homepage;
