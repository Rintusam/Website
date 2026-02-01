// Central configuration for the application

export const API_ENDPOINTS = {
  ENQUIRY: '/api/enquiries/',
  SUBMIT_FORM: '/api/submit/',
};

export const CONTACT_INFO = {
  PHONE: '+91 9876543210',
  PHONE_FORMATTED: '9876543210',
  WHATSAPP: '+91 9447738796',
  WHATSAPP_FORMATTED: '9447738796',
  EMAIL: 'admissions@college.edu',
  SUPPORT_EMAIL: 'support@studypath.com',
  BUSINESS_HOURS: 'Mon - Fri, 9:00 AM - 6:00 PM IST',
};

export const APP_NAME = 'Study Path';

export const LOCATION_INFO = {
  MAIN_OFFICE: 'Academic Campus, College Avenue, City, State - 123456',
};

// API timeout in milliseconds
export const API_TIMEOUT = 10000;

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your internet connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  SUBMISSION_ERROR: 'Failed to submit form. Please try again.',
  ENQUIRY_ERROR: 'Failed to submit enquiry. Please try again.',
  DEFAULT: 'Something went wrong. Please try again.',
};
