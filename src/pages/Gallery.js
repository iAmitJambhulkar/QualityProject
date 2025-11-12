import React, { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryItems = [
    { id: 1, category: 'residential', title: 'Living Room Cleaning', description: 'Professional living room deep cleaning service' },
    { id: 2, category: 'residential', title: 'Kitchen Cleaning', description: 'Complete kitchen sanitization and cleaning' },
    { id: 3, category: 'residential', title: 'Bathroom Cleaning', description: 'Thorough bathroom cleaning and disinfection' },
    { id: 4, category: 'commercial', title: 'Office Cleaning', description: 'Corporate office cleaning service' },
    { id: 5, category: 'commercial', title: 'Retail Space Cleaning', description: 'Shopping mall and retail store cleaning' },
    { id: 6, category: 'commercial', title: 'Medical Facility Cleaning', description: 'Hospital and clinic sanitization' },
    { id: 7, category: 'specialized', title: 'Carpet Cleaning', description: 'Professional carpet deep cleaning' },
    { id: 8, category: 'specialized', title: 'Window Cleaning', description: 'High-rise window cleaning service' },
    { id: 9, category: 'specialized', title: 'Upholstery Cleaning', description: 'Furniture and upholstery cleaning' },
    { id: 10, category: 'before-after', title: 'Before & After - Kitchen', description: 'Kitchen transformation' },
    { id: 11, category: 'before-after', title: 'Before & After - Office', description: 'Office space transformation' },
    { id: 12, category: 'before-after', title: 'Before & After - Bathroom', description: 'Bathroom deep cleaning results' }
  ];

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'specialized', label: 'Specialized' },
    { key: 'before-after', label: 'Before & After' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div>
      {/* Gallery Hero */}
      <section className="hero">
        <div className="container">
          <h1>Our Work Gallery</h1>
          <p>See the quality of our professional cleaning and housekeeping services</p>
        </div>
      </section>

      {/* Gallery Filter */}
      <section style={{ padding: '40px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '20px', 
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            {categories.map(category => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`btn ${selectedCategory === category.key ? 'btn-primary' : ''}`}
                style={{
                  backgroundColor: selectedCategory === category.key ? '#007bff' : 'white',
                  color: selectedCategory === category.key ? 'white' : '#333',
                  border: '1px solid #007bff'
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px' 
          }}>
            {filteredItems.map(item => (
              <div key={item.id} className="service-card" style={{ textAlign: 'center' }}>
                <div style={{
                  height: '200px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  fontSize: '14px'
                }}>
                  [{item.title} Image]
                </div>
                <h3 style={{ marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#666' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '20px' }}>Want Similar Results for Your Space?</h2>
          <p style={{ marginBottom: '30px', fontSize: '1.1rem', color: '#666' }}>
            Contact us today to experience the same level of professional cleaning service
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/quote" className="btn btn-primary">Get Free Quote</a>
            <a href="tel:+91[phone_number]" className="btn">Call Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;