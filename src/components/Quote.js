import React, { useState } from 'react';
import './Quote.css';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    location: '',
    propertyType: '',
    area: '',
    frequency: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote Request:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        location: '',
        propertyType: '',
        area: '',
        frequency: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="quote-page">
      <div className="quote-hero">
        <div className="container">
          <h1>Get a Free Quote</h1>
          <p>Fill out the form below and we'll get back to you with a customized quote</p>
        </div>
      </div>

      <div className="quote-content">
        <div className="container">
          <div className="quote-wrapper">
            <div className="quote-info">
              <h2>Why Choose Us?</h2>
              <div className="info-item">
                <span className="info-icon">✓</span>
                <div>
                  <h3>Professional Service</h3>
                  <p>Trained and experienced housekeeping staff</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">✓</span>
                <div>
                  <h3>Eco-Friendly Products</h3>
                  <p>Safe for your family and pets</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">✓</span>
                <div>
                  <h3>Flexible Scheduling</h3>
                  <p>We work according to your convenience</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">✓</span>
                <div>
                  <h3>Affordable Pricing</h3>
                  <p>Competitive rates with no hidden charges</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">✓</span>
                <div>
                  <h3>Quality Assurance</h3>
                  <p>100% satisfaction guaranteed</p>
                </div>
              </div>

              <div className="contact-info-box">
                <h3>Need Immediate Assistance?</h3>
                <p>Call us directly:</p>
                <a href="tel:+919028907874" className="phone-link">
                  📞 +91 9028907874
                </a>
                <p className="timing">Mon - Sat: 10 AM to 7 PM</p>
              </div>
            </div>

            <div className="quote-form-container">
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h2>Thank You!</h2>
                  <p>Your quote request has been submitted successfully.</p>
                  <p>We'll contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="quote-form">
                  <h2>Request a Quote</h2>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXXXXXXX"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="serviceType">Service Type *</label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Service</option>
                        <option value="office">Office Housekeeping</option>
                        <option value="hotel">Hotel Housekeeping</option>
                        <option value="hospital">Hospital Housekeeping</option>
                        <option value="home">Home Cleaning</option>
                        <option value="deep">Deep Cleaning</option>
                        <option value="sofa">Sofa Cleaning</option>
                        <option value="carpet">Carpet Cleaning</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="location">Location *</label>
                      <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Location</option>
                        <option value="nagpur">Nagpur</option>
                        <option value="akola">Akola</option>
                        <option value="amravati">Amravati</option>
                        <option value="bhandara">Bhandara</option>
                        <option value="buldhana">Buldhana</option>
                        <option value="chandrapur">Chandrapur</option>
                        <option value="gadchiroli">Gadchiroli</option>
                        <option value="gondia">Gondia</option>
                        <option value="jabalpur">Jabalpur</option>
                        <option value="wardha">Wardha</option>
                        <option value="washim">Washim</option>
                        <option value="yavatmal">Yavatmal</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="propertyType">Property Type *</label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="area">Approximate Area (sq ft)</label>
                      <input
                        type="number"
                        id="area"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="e.g., 1000"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="frequency">Service Frequency *</label>
                    <select
                      id="frequency"
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Frequency</option>
                      <option value="one-time">One Time</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="contract">Contract Basis</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Additional Requirements</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your requirements..."
                      rows="4"
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    Get Free Quote
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
