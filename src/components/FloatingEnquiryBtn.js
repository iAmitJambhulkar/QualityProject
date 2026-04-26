import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openEnquiryModal, closeEnquiryModal } from '../store/slices/uiSlice';
import EnquiryModal from './EnquiryModal';

const FloatingEnquiryBtn = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.ui.isEnquiryModalOpen);

  const handleOpenModal = () => {
    dispatch(openEnquiryModal());
  };

  const handleCloseModal = () => {
    dispatch(closeEnquiryModal());
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
