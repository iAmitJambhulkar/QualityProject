import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { location, service } = useParams();
  
  // Convert slug back to title
  const serviceTitle = service
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/And/g, '&');
  
  const locationName = location.charAt(0).toUpperCase() + location.slice(1);

  return (
    <div>
      {/* Hero Section with Image */}
      <section style={{ 
        position: 'relative',
        height: '400px',
        backgroundImage: 'url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.3)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>{serviceTitle}</h1>
          <p style={{ fontSize: '1.3rem' }}>Professional Services in {locationName}</p>
        </div>
      </section>

      {/* Service Content */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Service Description */}
            <div className="content-block">
              <h2>About {serviceTitle}</h2>
              <p>
                Quality Housekeeping Services provides professional {serviceTitle.toLowerCase()} in {locationName}. 
                Our experienced team ensures the highest standards of cleanliness and hygiene for your facility. 
                We use modern equipment and eco-friendly cleaning products to deliver exceptional results.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="content-block">
              <h2>Why Choose Our {serviceTitle}?</h2>
              <ul className="benefits-list">
                <li>● Trained and experienced cleaning professionals</li>
                <li>● Use of modern cleaning equipment and technology</li>
                <li>● Eco-friendly and safe cleaning products</li>
                <li>● Flexible scheduling to suit your needs</li>
                <li>● Competitive pricing with no hidden costs</li>
                <li>● Quality assurance and regular supervision</li>
                <li>● 24/7 customer support</li>
                <li>● Customized cleaning solutions</li>
              </ul>
            </div>

            {/* Our Process */}
            <div className="content-block">
              <h2>Our Service Process</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '30px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>1</div>
                  <h4>Consultation</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666' }}>We assess your requirements</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>2</div>
                  <h4>Planning</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666' }}>Customized cleaning plan</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>3</div>
                  <h4>Execution</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666' }}>Professional service delivery</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 15px',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}>4</div>
                  <h4>Quality Check</h4>
                  <p style={{ fontSize: '0.95rem', color: '#666' }}>Ensuring satisfaction</p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="content-block">
              <h2>Service Coverage in {locationName}</h2>
              <p>
                We provide {serviceTitle.toLowerCase()} across all major areas in {locationName} and surrounding regions. 
                Our team is available for both one-time deep cleaning and regular maintenance contracts.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #1976D2 0%, #1565C0 100%)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
            Ready to Book {serviceTitle}?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px' }}>
            Contact us today for a free quote and experience professional cleaning services in {locationName}
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn btn-large" style={{ backgroundColor: 'white', color: '#1976D2' }}>
              Get Free Quote
            </a>
            <a 
              href={`tel:+91-${location === 'nagpur' ? '9028907874' : '7219021680'}`} 
              className="btn btn-large btn-secondary"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
