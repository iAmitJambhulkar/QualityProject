import React, { useState } from 'react';
import './EnquiryModal.css';

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiry: ''
  });
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');

  // Generate random alphanumeric captcha
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput('');
  };

  React.useEffect(() => {
    if (isOpen) {
      generateCaptcha();
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate captcha
    if (captchaInput !== captchaCode) {
      alert('Captcha does not match. Please try again.');
      generateCaptcha();
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.email || !formData.enquiry) {
      alert('Please fill in all required fields');
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will contact you soon.');
    
    // Reset form and close modal
    setFormData({ name: '', phone: '', email: '', enquiry: '' });
    setCaptchaInput('');
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Request a Call</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="enquiry-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
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
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="enquiry">Enquiry *</label>
            <textarea
              id="enquiry"
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              placeholder="Please describe your cleaning requirements..."
              rows="4"
              required
            ></textarea>
          </div>

          <div className="form-group captcha-group">
            <label htmlFor="captcha">Security Check *</label>
            <div className="captcha-container">
              <div className="captcha-display">
                <span className="captcha-code">{captchaCode}</span>
                <button 
                  type="button" 
                  className="captcha-refresh" 
                  onClick={generateCaptcha}
                  title="Refresh Captcha"
                >
                  🔄
                </button>
              </div>
              <input
                type="text"
                id="captcha"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                placeholder="Enter the code above"
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;