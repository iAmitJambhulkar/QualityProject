import React, { useState } from 'react';
import EnquiryModal from './EnquiryModal';

const FloatingEnquiryBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button 
        onClick={handleOpenModal} 
        className="floating-enquiry-btn" 
        title="Send Enquiry"
      >
        <span className="btn-icon">📞</span>
        <span>Send Enquiry</span>
      </button>
      
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default FloatingEnquiryBtn;
