import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { title: 'Office Housekeeping', desc: 'Professional office cleaning to maintain a clean, healthy, and productive workspace.', features: ['Common areas cleaning', 'Floor & carpet maintenance', 'Washroom sanitization', 'Window & glass cleaning'], link: '/office-housekeeping/nagpur', icon: '🏢' },
  { title: 'Residential Cleaning', desc: 'Complete home cleaning services including all rooms, kitchen, and bathrooms.', features: ['Regular cleaning', 'Deep cleaning', 'Move-in/out cleaning', 'Post-construction cleanup'], icon: '🏠' },
  { title: 'Commercial Cleaning', desc: 'Professional office and commercial space cleaning services.', features: ['Daily office cleaning', 'Retail space cleaning', 'Medical facility cleaning', 'Industrial cleaning'], icon: '🏗️' },
  { title: 'Specialized Services', desc: 'Specialized cleaning services for specific needs and requirements.', features: ['Carpet cleaning', 'Window cleaning', 'Upholstery cleaning', 'Floor polishing'], icon: '✨' },
  { title: 'Maintenance Services', desc: 'Regular maintenance and upkeep services for properties.', features: ['Gardening services', 'Plumbing maintenance', 'Electrical maintenance', 'General repairs'], icon: '🔧' },
];

const processSteps = [
  { num: 1, color: '#1A8FE3', title: 'Consultation', desc: 'We assess your needs and provide a customized cleaning plan tailored to your space.' },
  { num: 2, color: '#2DC98E', title: 'Scheduling', desc: 'We schedule the service at your convenience and dispatch our trained team.' },
  { num: 3, color: '#FFB830', title: 'Cleaning', desc: 'Our trained professionals deliver exceptional cleaning with premium equipment.' },
  { num: 4, color: '#1A8FE3', title: 'Follow-up', desc: 'We ensure your satisfaction and plan regular maintenance going forward.' },
];

const Services = () => {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive cleaning and housekeeping solutions for homes, offices, hospitals, hotels &amp; more</p>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────── */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">Choose from our wide range of professional cleaning services, all delivered with modern equipment and trained staff.</p>
          <div className="services-grid">
            {services.map((svc, i) =>
              svc.link ? (
                <Link key={i} to={svc.link} className="service-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <span className="service-card-icon">{svc.icon}</span>
                  <h3>{svc.title}</h3>
                  <p style={{ marginBottom: '1rem' }}>{svc.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {svc.features.map((f, fi) => (
                      <li key={fi} style={{ marginBottom: '0.45rem', color: '#7A8FA6', paddingLeft: '1.4rem', position: 'relative', fontSize: '0.9rem' }}>
                        <span style={{ position: 'absolute', left: 0, color: '#2DC98E', fontWeight: 700 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ color: '#1A8FE3', fontWeight: 700, fontSize: '0.9rem', marginTop: '1rem' }}>Learn More →</div>
                </Link>
              ) : (
                <div key={i} className="service-card">
                  <span className="service-card-icon">{svc.icon}</span>
                  <h3>{svc.title}</h3>
                  <p style={{ marginBottom: '1rem' }}>{svc.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {svc.features.map((f, fi) => (
                      <li key={fi} style={{ marginBottom: '0.45rem', color: '#7A8FA6', paddingLeft: '1.4rem', position: 'relative', fontSize: '0.9rem' }}>
                        <span style={{ position: 'absolute', left: 0, color: '#2DC98E', fontWeight: 700 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Our Process ───────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--surface, #F0F6FF)' }}>
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">Simple, transparent, and reliable — from first contact to spotless results.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {processSteps.map((step) => (
              <div key={step.num} style={{ textAlign: 'center' }}>
                <div style={{ width: 72, height: 72, background: `linear-gradient(135deg, ${step.color}, ${step.color}CC)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', color: '#fff', fontSize: '1.6rem', fontWeight: 800, boxShadow: `0 8px 24px ${step.color}40` }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0C1F35', marginBottom: '0.6rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.93rem', color: '#7A8FA6', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(160deg, #0C1F35, #0E3A5E)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem' }}>Ready to Get Started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: 520, margin: '0 auto 2rem' }}>
            Contact us today for a free quote and experience professional cleaning services.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/quote" className="btn btn-accent btn-large">Get Free Quote</Link>
            <a href="tel:+919028907874" className="btn btn-ghost btn-large">📞 Call Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;