import React from 'react';

const About = () => {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', borderRadius: '999px', padding: '0.35rem 1rem', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#FFB830', marginBottom: '1.25rem' }}>
            🏆 ISO 9001-2015 Certified
          </div>
          <h1>About Quality Housekeeping India</h1>
          <p>Committed To Excellence — Over 8 Years of Professional Housekeeping Services</p>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────── */}
      <section className="about-section">
        <div className="container">
          <div className="about-intro">
            <p className="intro-text">
              Quality Housekeeping Services has over eight years experience in providing dynamic organization led by experienced team of professionals. Our Industrial, Corporate, and Domestic Services allow us to provide clients complete support and coordination services in the field of outsourcing, maintaining and developing agreed services which support and improve the effectiveness of primary activities.
            </p>
            <p className="intro-text" style={{ marginTop: '1.25rem' }}>
              Quality Housekeeping Services was launched with a sole intention of providing exceptional housekeeping services to the Domestic, Corporate and Industrial sectors. Our team is a group of specialized professionals ensuring properly handled and professionally managed projects of any size, with the ability to appreciate client's requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ── Principles ────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--surface, #F0F6FF)' }}>
        <div className="container">
          <h2 className="section-title">Our Core Principles</h2>
          <p className="section-subtitle">The values that drive every service we deliver</p>
          <div className="services-grid">
            {[
              { icon: '🏢', title: 'Improve Work Environment', desc: 'A clean, organized environment dramatically improves staff efficiency, morale, and business image.' },
              { icon: '🛡️', title: 'Improve Safety', desc: 'Safety at work is our priority. Clean spaces reduce hazards and protect the physical integrity of your workforce.' },
              { icon: '⚙️', title: 'Efficient Maintenance', desc: 'A clean and orderly environment where every object is in its place, maintained in a logical and visible way.' },
            ].map((p, i) => (
              <div className="service-card" key={i} style={{ textAlign: 'center' }}>
                <span className="service-card-icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Quality ────────────────── */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <h2 className="section-title">Our Commitments</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2.5rem' }}>
            {[
              { icon: '🎯', title: 'Our Mission', desc: 'We as an organization want to build a world-class facility management company with multi-skill workforce and the highest standard of professionalism, ethics, and Quality. Our Core Principle is to give the best value to clients with Strict Adherence.' },
              { icon: '👁️', title: 'Our Vision', desc: 'To be recognized by our clients, employees and the industry as the leading service provider of housekeeping services — setting the benchmark for excellence in facility management.' },
              { icon: '✅', title: 'Quality Policy', desc: 'We are committed to give world class housekeeping services with Quality Standards through continual improvement and upgradation of technology and processes delivered through dedicated and committed professionals.' },
            ].map((m, i) => (
              <div className="mission-card" key={i}>
                <span className="card-icon">{m.icon}</span>
                <h2>{m.title}</h2>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipment ─────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--surface, #F0F6FF)' }}>
        <div className="container">
          <h2 className="section-title">Professional Equipment &amp; Tools</h2>
          <div className="content-block" style={{ maxWidth: '820px', margin: '2rem auto 0', textAlign: 'center' }}>
            <p style={{ fontSize: '1.08rem', lineHeight: '1.85', color: '#3A5068' }}>
              All tools and equipment we use — Machines, Chemicals, Tools etc. — are branded and manufactured specifically for industrial use, providing heavy-duty execution in a proper mechanized and logical manner. We can confidently say we have a complete solution for every housekeeping related problem.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginTop: '2.5rem', maxWidth: '900px', margin: '2.5rem auto 0' }}>
            {['🧴 Chemical Solutions', '🤖 Industrial Machines', '🪣 Specialized Tools', '🧽 Branded Products', '🫧 Eco-Friendly Agents', '🔧 Modern Equipment'].map((item, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #C5DFF0', borderRadius: 12, padding: '1.1rem', textAlign: 'center', fontWeight: 600, color: '#2C5282', fontSize: '0.92rem', boxShadow: '0 2px 8px rgba(12,31,53,0.06)' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Approach ──────────────────────────── */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <h2 className="section-title">Our Service Approach</h2>
          <div style={{ maxWidth: '860px', margin: '2.5rem auto 0' }}>
            <div className="service-phase">
              <h3 style={{ color: '#1A8FE3', marginBottom: '1.25rem', fontSize: '1.5rem' }}>
                We provide freshness in two service phases:
              </h3>
              <div style={{ marginBottom: '1.5rem', padding: '2rem', background: 'rgba(26,143,227,0.04)', borderRadius: 14, borderLeft: '4px solid #1A8FE3' }}>
                <h4 style={{ color: '#0C1F35', marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 700 }}>a) Freshness Quality Housekeeping</h4>
                <ul className="benefits-list">
                  <li>Dust control mopping in each and every area of the Office and Mockup House</li>
                  <li>Dry and Wet mopping in each and every area of the Office and Mockup House</li>
                  <li>Glass cleaning of each and every area of the Office and Mockup House</li>
                  <li>Upper part of Air condition and Light fitting and Fixture cleaning</li>
                  <li>Clear of all the dust bins from each and every area of the Office</li>
                  <li>Cleaning of all Office equipment — Computer, Phones, Chairs, Fax, Copier, Cubicles, Racks etc.</li>
                  <li>Complete cleaning of WC and Bathrooms using branded cleaning products (Colour cubes, Air freshener)</li>
                </ul>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(45,201,142,0.05)', borderRadius: 14, borderLeft: '4px solid #2DC98E' }}>
                <h4 style={{ color: '#0C1F35', marginBottom: '0.75rem', fontSize: '1.2rem', fontWeight: 700 }}>b) Daily Manual Cleaning</h4>
                <p style={{ color: '#3A5068', fontSize: '1rem', lineHeight: '1.8' }}>
                  Comprehensive daily cleaning services to maintain pristine conditions throughout your facility, ensuring a consistently clean and healthy environment for your team and visitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ISO Banner ────────────────────────────────── */}
      <section style={{ padding: '70px 0', background: 'linear-gradient(160deg, #0C1F35 0%, #0E3A5E 40%, #1A8FE3 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 70% at 60% 50%, rgba(10,110,255,0.3) 0%, transparent 65%)' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.25rem' }}>🏆</div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>ISO 9001-2015 Certified</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', color: 'rgba(255,255,255,0.78)' }}>
            Our commitment to quality and excellence is recognized through our ISO 9001-2015 certification, ensuring world-class standards in all our services across every city we operate in.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
