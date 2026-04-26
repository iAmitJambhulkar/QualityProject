// UI Selectors
export const selectIsMenuOpen = (state) => state.ui.isMenuOpen;
export const selectActiveDropdown = (state) => state.ui.activeDropdown;
export const selectIsMobile = (state) => state.ui.isMobile;
export const selectIsEnquiryModalOpen = (state) => state.ui.isEnquiryModalOpen;

// Enquiry Selectors
export const selectEnquiryFormData = (state) => state.enquiry.formData;
export const selectCaptchaInput = (state) => state.enquiry.captchaInput;
export const selectCaptchaCode = (state) => state.enquiry.captchaCode;
export const selectIsSubmitting = (state) => state.enquiry.isSubmitting;
export const selectSubmitSuccess = (state) => state.enquiry.submitSuccess;
export const selectSubmitError = (state) => state.enquiry.submitError;

// Services Selectors
export const selectNagpurServices = (state) => state.services.nagpurServices;
export const selectJabalpurServices = (state) => state.services.jabalpurServices;
export const selectAllServices = (state) => ({
  nagpur: state.services.nagpurServices,
  jabalpur: state.services.jabalpurServices,
});
