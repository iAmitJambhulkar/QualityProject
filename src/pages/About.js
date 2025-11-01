import React from 'react';

const About = () => {
  return (
    <div>
      {/* About Hero */}
      <section className="hero">
        <div className="container">
          <h1>About Quality Housekeeping India</h1>
          <p>Committed To Excellence!!! An ISO 9001-2015 Certified Company</p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="about-section">
        <div className="container">
          <div className="about-intro">
            <p className="intro-text">
              Quality Housekeeping Services has over eight years experience in providing dynamic organization led by experienced team of Professionals, Industrial services, Corporate Services, Domestic Services, Housekeeping Services allows us in providing clients complete support and coordination services in the field employing outsourcing. Organization to maintain and develop the agreed services which support and improve the effectiveness of its primary activities.
            </p>
            <p className="intro-text">
              Quality Housekeeping Services was launched with a sole intention of providing exceptional housekeeping services to the Domestic, Corporate and Industrial sectors. Our team is a group of specialized professionals. This ensures properly handled and professionally managed projects of any size with the ability to appreciate client's requirements. Our managerial activities provide our team with proper motivation, training for updating their knowledge from time to time, training about personal hygiene, manners and etiquettes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Principles Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#E3F2FD' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2.5rem', color: '#0D47A1' }}>
            Our Principles
          </h2>
          <div className="services-grid">
            <div className="service-card">
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏢</div>
              <h3>Improve Work Environment</h3>
              <p>
                The advantages are obvious! Not only the work environment will be greatly improved, but the efficiency will also go.
              </p>
            </div>
            <div className="service-card">
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🛡️</div>
              <h3>Improve Safety</h3>
              <p>
                Safety at work must be a priority for any company manager, the person with prime responsibility for maintaining the physical integrity of the workforce.
              </p>
            </div>
            <div className="service-card">
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>⚙️</div>
              <h3>Efficient Maintenance</h3>
              <p>
                Clean and orderly environment where each object is not only on its place, but also indicated in a very visible way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Quality Policy */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>
                We as an organization want to see with multi-skill workforce to build world-class facility management company with the higher standard of professionalism, ethics, Quality. The Core Principle of the Company is to give the best value to the clients with Strict Adherence.
              </p>
            </div>

            <div className="mission-card">
              <div className="card-icon">👁️</div>
              <h2>Our Vision</h2>
              <p>
                To be recognized by our clients, employees and the industry as the leading Service provider of housekeeping Services.
              </p>
            </div>

            <div className="mission-card">
              <div className="card-icon">✅</div>
              <h2>Our Quality Policy</h2>
              <p>
                We are committed to give world class housekeeping services with Quality Standards through continual improvement and upgradation of technology and processes delivered through dedicated and committed professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Tools Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#E3F2FD' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '2.5rem', color: '#0D47A1' }}>
            Professional Equipment & Tools
          </h2>
          <div className="content-block" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', textAlign: 'center', marginBottom: '30px' }}>
              All the tools and equipments that we use (Machines, Chemicals, Tools etc.) are branded and manufactured specifically for industrial use thus providing heavy-duty execution in a proper mechanized and logical manner. We can confidently say we have a complete solution for every housekeeping related problem.
            </p>
          </div>
        </div>
      </section>

      {/* Services Phases Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2.5rem', color: '#0D47A1' }}>
            Our Service Approach
          </h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="service-phase">
              <h3 style={{ color: '#1E88E5', marginBottom: '20px', fontSize: '1.8rem' }}>
                For all your housekeeping requirements, we provide freshness in two phases:
              </h3>

              <div style={{ marginBottom: '30px', padding: '30px', backgroundColor: '#E3F2FD', borderRadius: '10px', borderLeft: '4px solid #1E88E5' }}>
                <h4 style={{ color: '#0D47A1', marginBottom: '15px', fontSize: '1.4rem' }}>a) Freshness Quality Housekeeping</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative', color: '#666' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#28a745' }}>✓</span>
                    Dust control mopping in each and every area of the Office and Mockup House
                  </li>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative', color: '#666' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#28a745' }}>✓</span>
                    Dry and Wet mopping in each and every area of the Office and mockup House
                  </li>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative', color: '#666' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#28a745' }}>✓</span>
                    Glass cleaning of each and every area of the Office and Mockup House
                  </li>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative', color: '#666' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#28a745' }}>✓</span>
                    Upper part of Air condition and Light fitting and Fixture cleaning
                  </li>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative', color: '#666' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#28a745' }}>✓</span>
                    Clear of all the dust bins from each and every area of the Office
                  </li>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative', color: '#666' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#28a745' }}>✓</span>
                    Cleaning of all Office equipments - Computer Machine, Phones, Chairs, Fax machine, Photo copy machine, Cubical, Racks, etc.
                  </li>
                  <li style={{ marginBottom: '10px', paddingLeft: '25px', position: 'relative', color: '#666' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#28a745' }}>✓</span>
                    Complete cleaning of WC and Bathrooms using branded cleaning products (Colour cubes, Air freshener)
                  </li>
                </ul>
              </div>

              <div style={{ padding: '30px', backgroundColor: '#E3F2FD', borderRadius: '10px', borderLeft: '4px solid #1E88E5' }}>
                <h4 style={{ color: '#0D47A1', marginBottom: '15px', fontSize: '1.4rem' }}>b) Daily Manual Cleaning</h4>
                <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>
                  Comprehensive daily cleaning services to maintain pristine conditions throughout your facility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO Certification Banner */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #1E88E5 0%, #0D47A1 100%)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🏆</div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#FFFFFF' }}>ISO 9001-2015 Certified</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            Our commitment to quality and excellence is recognized through our ISO 9001-2015 certification, ensuring world-class standards in all our services.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
