import React from 'react';
import { FaPhone, FaFacebookF, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import '../Scss/SocialIcons.scss';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="tel:+84123456789" className="social-icon" title="Call us">
        <FaPhone />
      </a>
      <a href="https://facebook.com/sadecglamping" target="_blank" rel="noopener noreferrer" className="social-icon" title="Follow us on Facebook">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com/sadecglamping" target="_blank" rel="noopener noreferrer" className="social-icon" title="Follow us on Instagram">
        <FaInstagram />
      </a>
      <a href="https://maps.google.com/?q=353+DT848,+Tan+Khanh+Dong,+Sa+Dec,+Dong+Thap,+Vietnam" target="_blank" rel="noopener noreferrer" className="social-icon" title="Find us on Google Maps">
        <FaMapMarkerAlt />
      </a>
    </div>
  );
};

export default SocialIcons; 