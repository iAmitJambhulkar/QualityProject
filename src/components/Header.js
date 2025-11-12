import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa6';
import { toggleMenu, closeMenu, setActiveDropdown, setIsMobile } from '../store/slices/uiSlice';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const { isMenuOpen, activeDropdown, isMobile } = useSelector((state) => state.ui);
  const { nagpurServices, jabalpurServices } = useSelector((state) => state.services);
  const [activeCityDropdown, setActiveCityDropdown] = React.useState(null);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsMobile(window.innerWidth <= 768));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleDropdownHover = (dropdown) => {
    if (!isMobile) {
      dispatch(setActiveDropdown(dropdown));
    }
  };

  const handleDropdownLeave = () => {
    if (!isMobile) {
      dispatch(setActiveDropdown(null));
    }
  };

  const handleDropdownClick = (dropdown) => {
    if (isMobile) {
      dispatch(setActiveDropdown(activeDropdown === dropdown ? null : dropdown));
      setActiveCityDropdown(null); // Reset city dropdown when toggling services
    }
  };

  const handleCityClick = (city) => {
    if (isMobile) {
      setActiveCityDropdown(activeCityDropdown === city ? null : city);
    }
  };

  const createSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
  };

  const handleLinkClick = () => {
    dispatch(closeMenu());
  };

  const getServiceUrl = (service, location) => {
    const serviceMap = {
      "Office Housekeeping Services": location === 'jabalpur' ? '/office-housekeeping-jabalpur' : `/office-housekeeping/${location}`,
      "Hotel Housekeeping Service": location === 'jabalpur' ? '/hotel-housekeeping-jabalpur' : `/hotel-housekeeping/${location}`,
      "Hospital Housekeeping Services": location === 'jabalpur' ? '/hospital-housekeeping-jabalpur' : `/hospital-housekeeping/${location}`,
      "Salon Housekeeping Services": `/salon-housekeeping/${location}`,
      "Bank Housekeeping Services": location === 'jabalpur' ? '/bank-housekeeping-jabalpur' : `/bank-housekeeping/${location}`,
      "Guesthouse Housekeeping Services": location === 'jabalpur' ? '/guesthouse-housekeeping-jabalpur' : `/guesthouse-housekeeping/${location}`,
      "Mall Housekeeping Services": `/mall-housekeeping/${location}`,
      "Gym Cleaning Services": location === 'jabalpur' ? '/gym-cleaning-jabalpur' : `/gym-cleaning/${location}`,
      "School Housekeeping Services": location === 'jabalpur' ? '/school-housekeeping-jabalpur' : `/school-housekeeping/${location}`,
      "College Housekeeping Services": location === 'jabalpur' ? '/college-housekeeping-jabalpur' : `/college-housekeeping/${location}`,
      "Security Guard Services": `/security-guard-services/${location}`,
      "Housekeeping Manpower": `/housekeeping-manpower/${location}`,
      "Housekeeping Manpower Supply": '/housekeeping-manpower-jabalpur',
      "Home Cleaning Services": location === 'jabalpur' ? '/home-cleaning-jabalpur' : `/home-cleaning/${location}`,
      "Sofa Cleaning Services": location === 'jabalpur' ? '/sofa-cleaning-jabalpur' : `/sofa-cleaning/${location}`,
      "Deep Cleaning Services": `/deep-cleaning/${location}`,
      "Carpet Cleaning Services": location === 'jabalpur' ? '/carpet-cleaning-jabalpur' : `/carpet-cleaning/${location}`,
      "Chair Cleaning Services": `/chair-cleaning/${location}`,
      "Building Cleaning Services": `/building-cleaning/${location}`,
      "Floor Cleaning Services": `/floor-cleaning/${location}`,
      "Tiles Cleaning Services": `/tiles-cleaning/${location}`,
      "Office Boy Services": location === 'jabalpur' ? '/office-boy-services-jabalpur' : `/office-boy-services/${location}`,
      "Housekeeping And Cleaning": `/housekeeping-and-cleaning/${location}`,
      "Office Chair Cleaning Services": `/office-chair-cleaning/${location}`,
    };

    return serviceMap[service] || `/services/${location}/${createSlug(service)}`;
  };

  return (
    <>
      {isMenuOpen && <div className="menu-backdrop" onClick={handleToggleMenu}></div>}
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="logo">
              <img
                src="/Img/qualitylogo.webp"
                alt="Quality Housekeeping India Logo"
                width="200"
                height="60"
                loading="eager"
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
                  {isMobile ? (
                    // Mobile: Nested dropdown (Cities first, then services)
                    <div className="mobile-city-menu">
                      <div className="city-item">
                        <div 
                          className={`city-header ${activeCityDropdown === 'nagpur' ? 'active' : ''}`}
                          onClick={() => handleCityClick('nagpur')}
                        >
                          <span>Nagpur</span>
                          <span className="city-arrow">{activeCityDropdown === 'nagpur' ? '▼' : '▶'}</span>
                        </div>
                        {activeCityDropdown === 'nagpur' && (
                          <div className="city-services">
                            {nagpurServices.map((service, index) => (
                              <Link
                                key={index}
                                to={getServiceUrl(service, 'nagpur')}
                                className="dropdown-link"
                                onClick={handleLinkClick}
                              >
                                {service}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="city-item">
                        <div 
                          className={`city-header ${activeCityDropdown === 'jabalpur' ? 'active' : ''}`}
                          onClick={() => handleCityClick('jabalpur')}
                        >
                          <span>Jabalpur</span>
                          <span className="city-arrow">{activeCityDropdown === 'jabalpur' ? '▼' : '▶'}</span>
                        </div>
                        {activeCityDropdown === 'jabalpur' && (
                          <div className="city-services">
                            {jabalpurServices.map((service, index) => (
                              <Link
                                key={index}
                                to={getServiceUrl(service, 'jabalpur')}
                                className="dropdown-link"
                                onClick={handleLinkClick}
                              >
                                {service}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    // Desktop: Side-by-side columns
                    <div className="mega-menu-content">
                      <div className="mega-menu-column">
                        <h4>Nagpur</h4>
                        <div className="service-links">
                          {nagpurServices.map((service, index) => (
                            <Link
                              key={index}
                              to={getServiceUrl(service, 'nagpur')}
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
                              to={getServiceUrl(service, 'jabalpur')}
                              className="dropdown-link"
                              onClick={handleLinkClick}
                            >
                              {service}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
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

            <div className="header-right">
              <a href="tel:+919028907874" className="call-button" title="Call: +91 9028907874">
                <FaPhone />
              </a>

              <button className="menu-toggle" onClick={handleToggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
