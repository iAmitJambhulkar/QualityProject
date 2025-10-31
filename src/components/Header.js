import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const nagpurServices = [
    "Office Housekeeping Services",
    "Hotel Housekeeping Service",
    "Hospital Housekeeping Services",
    "Salon Housekeeping Services",
    "Bank Housekeeping Services",
    "Guesthouse Housekeeping Services",
    "Mall Housekeeping Services",
    "Gym Cleaning Services",
    "School Housekeeping Services",
    "College Housekeeping Services",
    "Security Guard Services",
    "Housekeeping Manpower",
    "Home Cleaning Services",
    "Sofa Cleaning Services",
    "Deep Cleaning Services",
    "Carpet Cleaning Services",
    "Chair Cleaning Services",
    "Building Cleaning Services",
    "Floor Cleaning Services",
    "Tiles Cleaning Services",
    "Office Boy Services"
  ];

  const jabalpurServices = [
    "Housekeeping And Cleaning",
    "Gym Cleaning Services",
    "School Housekeeping Services",
    "Hotel Housekeeping Service",
    "Hospital Housekeeping Services",
    "Office Housekeeping Services",
    "College Housekeeping Services",
    "Office Chair Cleaning Services",
    "Home Cleaning Services",
    "Carpet Cleaning Services",
    "Sofa Cleaning Services",
    "Bank Housekeeping Services",
    "Guesthouse Housekeeping Services",
    "Office Boy Services",
    "Housekeeping Manpower Supply"
  ];

  const createSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo">
            <img
              src="/Img/qualitylogo.webp"
              alt="Quality Housekeeping India Logo"
              style={{ height: "60px", objectFit: "contain" }}
            />
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            
            <div 
              className="dropdown mega-dropdown"
              onMouseEnter={() => handleDropdownHover('services')}
              onMouseLeave={handleDropdownLeave}
            >
              <span className="nav-link dropdown-toggle">
                Services
              </span>
              <div className={`dropdown-menu mega-menu ${activeDropdown === 'services' ? 'show' : ''}`}>
                <div className="mega-menu-content">
                  <div className="mega-menu-column">
                    <h4>Nagpur</h4>
                    <div className="service-links">
                      {nagpurServices.map((service, index) => (
                        <Link 
                          key={index}
                          to={`/services/nagpur/${createSlug(service)}`}
                          className="dropdown-link"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mega-menu-column">
                    <h4>Jabalpur</h4>
                    <div className="service-links">
                      {jabalpurServices.map((service, index) => (
                        <Link 
                          key={index}
                          to={`/services/jabalpur/${createSlug(service)}`}
                          className="dropdown-link"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/gallery" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </Link>
            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/blogs" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Blogs
            </Link>
            <Link to="/jobs" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Jobs
            </Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
