import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateFormField,
  setCaptchaInput,
  setCaptchaCode,
  resetForm,
  setSubmitting,
  setSubmitSuccess,
} from '../store/slices/enquirySlice';
import './EnquiryModal.css';

const EnquiryModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { formData, captchaInput, captchaCode, isSubmitting } = useSelector(
    (state) => state.enquiry
  );

  // Generate random alphanumeric captcha
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    dispatch(setCaptchaCode(code));
    dispatch(setCaptchaInput(''));
  };

  useEffect(() => {
    if (isOpen) {
      generateCaptcha();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleChange = (e) => {
    dispatch(updateFormField({ field: e.target.name, value: e.target.value }));
  };

  const handleCaptchaChange = (e) => {
    dispatch(setCaptchaInput(e.target.value));
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

    dispatch(setSubmitting(true));

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your enquiry! We will contact you soon.');
      dispatch(setSubmitSuccess(true));
      dispatch(resetForm());
      onClose();
    }, 500);
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
                onChange={handleCaptchaChange}
                placeholder="Enter the code above"
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
