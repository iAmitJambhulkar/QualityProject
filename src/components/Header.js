import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownHover = (dropdown) => {
    if (!isMobile) {
      setActiveDropdown(dropdown);
    }
  };

  const handleDropdownLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownClick = (dropdown) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    }
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
    "Sofa Cleaning Services",
    "Carpet Cleaning Services",
    "Bank Housekeeping Services",
    "Guesthouse Housekeeping Services",
    "Office Boy Services",
    "Housekeeping Manpower Supply"
  ];

  const createSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {isMenuOpen && <div className="menu-backdrop" onClick={toggleMenu}></div>}
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
              <Link to="/" className="nav-link" onClick={handleLinkClick}>
                Home
              </Link>

              <div
                className={`dropdown mega-dropdown ${activeDropdown === 'services' ? 'active' : ''}`}
                onMouseEnter={() => handleDropdownHover('services')}
                onMouseLeave={handleDropdownLeave}
              >
                <span
                  className="nav-link dropdown-toggle"
                  onClick={() => handleDropdownClick('services')}
                  style={{ cursor: 'pointer' }}
                >
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
                            to={
                              service === "Office Housekeeping Services"
                                ? "/office-housekeeping/nagpur"
                                : service === "Hotel Housekeeping Service"
                                  ? "/hotel-housekeeping/nagpur"
                                  : service === "Hospital Housekeeping Services"
                                    ? "/hospital-housekeeping/nagpur"
                                    : service === "Salon Housekeeping Services"
                                      ? "/salon-housekeeping/nagpur"
                                      : service === "Bank Housekeeping Services"
                                        ? "/bank-housekeeping/nagpur"
                                        : service === "Guesthouse Housekeeping Services"
                                          ? "/guesthouse-housekeeping/nagpur"
                                          : service === "Mall Housekeeping Services"
                                            ? "/mall-housekeeping/nagpur"
                                            : service === "Gym Cleaning Services"
                                              ? "/gym-cleaning/nagpur"
                                              : service === "School Housekeeping Services"
                                                ? "/school-housekeeping/nagpur"
                                                : service === "College Housekeeping Services"
                                                  ? "/college-housekeeping/nagpur"
                                                  : service === "Security Guard Services"
                                                    ? "/security-guard-services/nagpur"
                                                    : service === "Housekeeping Manpower"
                                                      ? "/housekeeping-manpower/nagpur"
                                                      : service === "Home Cleaning Services"
                                                        ? "/home-cleaning/nagpur"
                                                        : service === "Sofa Cleaning Services"
                                                          ? "/sofa-cleaning/nagpur"
                                                          : service === "Deep Cleaning Services"
                                                            ? "/deep-cleaning/nagpur"
                                                            : service === "Carpet Cleaning Services"
                                                              ? "/carpet-cleaning/nagpur"
                                                              : service === "Chair Cleaning Services"
                                                                ? "/chair-cleaning/nagpur"
                                                                : service === "Building Cleaning Services"
                                                                  ? "/building-cleaning/nagpur"
                                                                  : service === "Floor Cleaning Services"
                                                                    ? "/floor-cleaning/nagpur"
                                                                    : service === "Tiles Cleaning Services"
                                                                      ? "/tiles-cleaning/nagpur"
                                                                      : service === "Office Boy Services"
                                                                        ? "/office-boy-services/nagpur"
                                                                        : `/services/nagpur/${createSlug(service)}`
                            }
                            className="dropdown-link"
                            onClick={handleLinkClick}
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
                            to={
                              service === "Housekeeping And Cleaning"
                                ? "/housekeeping-and-cleaning/jabalpur"
                                : service === "Office Housekeeping Services"
                                  ? "/office-housekeeping/jabalpur"
                                  : service === "Hotel Housekeeping Service"
                                    ? "/hotel-housekeeping/jabalpur"
                                    : service === "Hospital Housekeeping Services"
                                      ? "/hospital-housekeeping/jabalpur"
                                      : service === "Salon Housekeeping Services"
                                        ? "/salon-housekeeping/jabalpur"
                                        : service === "Bank Housekeeping Services"
                                          ? "/bank-housekeeping-jabalpur"
                                          : service === "Guesthouse Housekeeping Services"
                                            ? "/guesthouse-housekeeping-jabalpur"
                                            : service === "Mall Housekeeping Services"
                                              ? "/mall-housekeeping/jabalpur"
                                              : service === "Gym Cleaning Services"
                                                ? "/gym-cleaning/jabalpur"
                                                : service === "School Housekeeping Services"
                                                  ? "/school-housekeeping/jabalpur"
                                                  : service === "College Housekeeping Services"
                                                    ? "/college-housekeeping/jabalpur"
                                                    : service === "Security Guard Services"
                                                      ? "/security-guard-services/jabalpur"
                                                      : service === "Housekeeping Manpower Supply"
                                                        ? "/housekeeping-manpower-jabalpur"
                                                        : service === "Home Cleaning Services"
                                                          ? "/home-cleaning-jabalpur"
                                                          : service === "Sofa Cleaning Services"
                                                            ? "/sofa-cleaning-jabalpur"
                                                            : service === "Carpet Cleaning Services"
                                                              ? "/carpet-cleaning-jabalpur"
                                                              : service === "Deep Cleaning Services"
                                                                ? "/deep-cleaning/jabalpur"
                                                                : service === "Office Chair Cleaning Services"
                                                                  ? "/office-chair-cleaning/jabalpur"
                                                                  : service === "Office Boy Services"
                                                                    ? "/office-boy-services-jabalpur"
                                                                    : `/services/jabalpur/${createSlug(service)}`
                            }
                            className="dropdown-link"
                            onClick={handleLinkClick}
                          >
                            {service}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/gallery" className="nav-link" onClick={handleLinkClick}>
                Gallery
              </Link>
              <Link to="/about" className="nav-link" onClick={handleLinkClick}>
                About Us
              </Link>
              <Link to="/blogs" className="nav-link" onClick={handleLinkClick}>
                Blogs
              </Link>
              <Link to="/jobs" className="nav-link" onClick={handleLinkClick}>
                Jobs
              </Link>
              <Link to="/contact" className="nav-link" onClick={handleLinkClick}>
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
    </>
  );
};

export default Header;
