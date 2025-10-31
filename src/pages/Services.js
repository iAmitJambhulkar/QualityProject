import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Office Housekeeping Services",
      description: "Professional office cleaning and housekeeping services to maintain a clean, healthy, and productive workspace.",
      features: ["Common areas cleaning", "Floor & carpet maintenance", "Washroom sanitization", "Window & glass cleaning"],
      link: "/office-housekeeping/nagpur",
      icon: "🏢"
    },
    {
      title: "Residential Cleaning",
      description: "Complete home cleaning services including all rooms, kitchen, and bathrooms.",
      features: ["Regular cleaning", "Deep cleaning", "Move-in/out cleaning", "Post-construction cleanup"]
    },
    {
      title: "Commercial Cleaning",
      description: "Professional office and commercial space cleaning services.",
      features: ["Daily office cleaning", "Retail space cleaning", "Medical facility cleaning", "Industrial cleaning"]
    },
    {
      title: "Specialized Services",
      description: "Specialized cleaning services for specific needs and requirements.",
      features: ["Carpet cleaning", "Window cleaning", "Upholstery cleaning", "Floor polishing"]
    },
    {
      title: "Maintenance Services",
      description: "Regular maintenance and upkeep services for properties.",
      features: ["Gardening services", "Plumbing maintenance", "Electrical maintenance", "General repairs"]
    }
  ];

  return (
    <div>
      {/* Services Hero */}
      <section className="hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive cleaning and housekeeping solutions for all your needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              service.link ? (
                <Link 
                  key={index} 
                  to={service.link}
                  className="service-card" 
                  style={{ 
                    textAlign: 'left',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block'
                  }}
                >
                  {service.icon && <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{service.icon}</div>}
                  <h3>{service.title}</h3>
                  <p style={{ marginBottom: '20px' }}>{service.description}</p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{ 
                        marginBottom: '8px', 
                        color: '#666',
                        paddingLeft: '20px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#28a745'
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div style={{ 
                    marginTop: '15px', 
                    color: '#667eea', 
                    fontWeight: 'bold' 
                  }}>
                    Learn More →
                  </div>
                </Link>
              ) : (
                <div key={index} className="service-card" style={{ textAlign: 'left' }}>
                  <h3>{service.title}</h3>
                  <p style={{ marginBottom: '20px' }}>{service.description}</p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={{ 
                        marginBottom: '8px', 
                        color: '#666',
                        paddingLeft: '20px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#28a745'
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2.5rem' }}>
            Our Process
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '30px' 
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#007bff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>1</div>
              <h3>Consultation</h3>
              <p>We assess your needs and provide a customized cleaning plan.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#28a745',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>2</div>
              <h3>Scheduling</h3>
              <p>We schedule the service at your convenience and send our team.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#ffc107',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>3</div>
              <h3>Cleaning</h3>
              <p>Our trained professionals deliver exceptional cleaning service.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#dc3545',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>4</div>
              <h3>Follow-up</h3>
              <p>We ensure your satisfaction and schedule regular maintenance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;