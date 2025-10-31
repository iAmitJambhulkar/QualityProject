import React from 'react';
import './Footer.css';
import { FaXTwitter, FaFacebook, FaInstagram, FaPinterest, FaLinkedin, FaWhatsapp, FaYoutube, FaBlog } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quality Housekeeping Services</h3>
            <p>Professional cleaning and housekeeping services for homes and offices across India.</p>

            <div style={{ marginTop: '20px' }}>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/jobs">Jobs</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-section">
            <h4>Service Areas</h4>
            <ul>
              <li><a href="/services/nagpur">Nagpur Services</a></li>
              <li><a href="/services/jabalpur">Jabalpur Services</a></li>
              <li><a href="/services/gondia">Gondia Services</a></li>
              <li>Home Cleaning</li>
              <li>Office Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Maintenance Services</li>
            </ul>
          </div>
        </div>

        {/* Offices Section - Horizontal Layout */}
        <div className="offices-section">
          <h4>Our Offices</h4>
          <div className="offices-horizontal">
            <div className="office-info-horizontal">
              <h5>Nagpur Head Office</h5>
              <p>📍 Shop No. 39, First Floor, NIT Complex, AwaleBabu Square, Lashkari Bagh, Nagpur - 440017</p>
              <p>🕒 10 AM to 7 PM (Mon - Sat)</p>
              <p>📞 +91 - 9028907874</p>
              <p>✉️ info@qualityhousekeepingindia.com</p>
            </div>

            <div className="office-info-horizontal">
              <h5>Jabalpur Branch Office</h5>
              <p>📍 111-A, Rajul Landmark, Opp. Jabalpur Hospital, Russel Chowk, Jabalpur - 482002</p>
              <p>🕒 10 AM to 7 PM (Mon - Sat)</p>
              <p>📞 +91 - 7219021680</p>
            </div>

            <div className="office-info-horizontal">
              <h5>Gondia Branch Office</h5>
              <p>📍 Behind New Busstop, Marartoly, Gondia - 441614</p>
              <p>🕒 10 AM to 7 PM (Mon - Sat)</p>
              <p>📞 +91 - 7219021680</p>
            </div>
          </div>
        </div>

        {/* Social Links Section - Centered */}
        <div className="social-section">
          <h4>Follow Us</h4>
          <div className="social-links-centered">
            <a href="https://x.com/housekeepingngp" target="_blank" rel="noopener noreferrer" className="social-link" title="Twitter">
              <FaXTwitter size={24} />
            </a>
            <a href="https://www.facebook.com/Quality-Housekeeping-Services-554786291354942/" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/qualityhousekeepingservices/" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://in.pinterest.com/quality786servi/" target="_blank" rel="noopener noreferrer" className="social-link" title="Pinterest">
              <FaPinterest size={24} />
            </a>
            <a href="https://www.linkedin.com/in/quality-housekeeping-services-b283b2122/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=919028907874&text=Inquiry%20for%20Houserkeeping%20Services" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp">
              <FaWhatsapp size={24} />
            </a>
            <a href="https://www.youtube.com/channel/UC-1_rG5fmnfmlo0_DxybUHg" target="_blank" rel="noopener noreferrer" className="social-link" title="YouTube">
              <FaYoutube size={24} />
            </a>
            <a href="/blogs" className="social-link" title="Blogs">
              <FaBlog size={24} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Quality Housekeeping India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;