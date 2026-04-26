import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const galleryItems = [
  { id: 1, category: 'residential', title: 'Living Room Cleaning', desc: 'Professional living room deep cleaning service', emoji: '🛋️' },
  { id: 2, category: 'residential', title: 'Kitchen Cleaning', desc: 'Complete kitchen sanitization and cleaning', emoji: '🍳' },
  { id: 3, category: 'residential', title: 'Bathroom Cleaning', desc: 'Thorough bathroom cleaning and disinfection', emoji: '🚿' },
  { id: 4, category: 'commercial', title: 'Office Cleaning', desc: 'Corporate office cleaning service', emoji: '🏢' },
  { id: 5, category: 'commercial', title: 'Retail Space Cleaning', desc: 'Shopping mall and retail store cleaning', emoji: '🏬' },
  { id: 6, category: 'commercial', title: 'Medical Facility Cleaning', desc: 'Hospital and clinic sanitization', emoji: '🏥' },
  { id: 7, category: 'specialized', title: 'Carpet Cleaning', desc: 'Professional carpet deep cleaning', emoji: '🪣' },
  { id: 8, category: 'specialized', title: 'Window Cleaning', desc: 'High-rise window cleaning service', emoji: '🪟' },
  { id: 9, category: 'specialized', title: 'Upholstery Cleaning', desc: 'Furniture and upholstery cleaning', emoji: '🛋️' },
  { id: 10, category: 'before-after', title: 'Before & After — Kitchen', desc: 'Kitchen transformation results', emoji: '✨' },
  { id: 11, category: 'before-after', title: 'Before & After — Office', desc: 'Office space transformation', emoji: '🌟' },
  { id: 12, category: 'before-after', title: 'Before & After — Bathroom', desc: 'Bathroom deep cleaning results', emoji: '💫' },
];

const categories = [
  { key: 'all', label: 'All Work' },
  { key: 'residential', label: '🏠 Residential' },
  { key: 'commercial', label: '🏢 Commercial' },
  { key: 'specialized', label: '✨ Specialized' },
  { key: 'before-after', label: '🔄 Before & After' },
];

const cardColors = ['#E8F4FF', '#E8FFF4', '#FFF8E8', '#F4E8FF', '#FFE8E8', '#E8FFF8'];

const Gallery = () => {
  const [selected, setSelected] = useState('all');

  const filtered = selected === 'all' ? galleryItems : galleryItems.filter(i => i.category === selected);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <h1>Our Work Gallery</h1>
          <p>See the quality of our professional cleaning and housekeeping services across every category</p>
        </div>
      </section>

      {/* ── Filter Tabs ───────────────────────────────── */}
      <section style={{ padding: '3rem 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setSelected(cat.key)}
                style={{
                  padding: '0.65rem 1.5rem',
                  borderRadius: '999px',
                  border: '2px solid',
                  borderColor: selected === cat.key ? '#1A8FE3' : '#C5DFF0',
                  background: selected === cat.key ? '#1A8FE3' : 'transparent',
                  color: selected === cat.key ? '#ffffff' : '#3A5068',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.22s ease',
                  fontFamily: 'inherit',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Grid ──────────────────────────────── */}
      <section style={{ padding: '0 0 80px', background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {filtered.map((item, idx) => (
              <div
                key={item.id}
                style={{
                  background: '#ffffff',
                  borderRadius: 16,
                  overflow: 'hidden',
                  border: '1px solid #C5DFF0',
                  boxShadow: '0 4px 16px rgba(13,27,42,0.07)',
                  transition: 'all 0.28s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(13,27,42,0.14)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(13,27,42,0.07)'; }}
              >
                {/* Card Image Placeholder */}
                <div style={{
                  height: 200,
                  background: cardColors[idx % cardColors.length],
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                }}>
                  <span style={{ fontSize: '4rem' }}>{item.emoji}</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#7A8FA6', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {item.category}
                  </span>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0C1F35', marginBottom: '0.4rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: '#7A8FA6', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section style={{ padding: '80px 0', background: 'var(--surface, #F0F6FF)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0C1F35', marginBottom: '1rem' }}>
            Want Similar Results for Your Space?
          </h2>
          <p style={{ color: '#7A8FA6', fontSize: '1.08rem', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
            Contact us today to experience the same level of professional cleaning service for your home or business.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/quote" className="btn btn-primary btn-large">Get Free Quote</Link>
            <a href="tel:+919028907874" className="btn btn-secondary btn-large">📞 +91 9028907874</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;