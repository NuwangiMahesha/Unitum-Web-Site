import React, { useState } from 'react';
import './ContactModal.css';
import { sendContactEmail, sendTestEmail } from '../services/emailService';

const ContactModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    selectedOptions: [],
    fullName: '',
    email: '',
    company: '',
    request: ''
  });

  const options = [
    {
      title: 'Unitum',
      description: 'Eu mauris in tempus tristique tempus eu. Fermentum massa et auctor scelerisque dignissim pellentesque aliquet eros.'
    },
    {
      title: 'Unitum Salt',
      description: 'Eu mauris in tempus tristique tempus eu. Fermentum massa et auctor scelerisque dignissim pellentesque aliquet eros.'
    },
    {
      title: 'Unitum Chemicals',
      description: 'Eu mauris in tempus tristique tempus eu. Fermentum massa et auctor scelerisque dignissim pellentesque aliquet eros.'
    }
  ];

  const handleOptionToggle = (option) => {
    setFormData(prev => ({
      ...prev,
      selectedOptions: prev.selectedOptions.includes(option)
        ? prev.selectedOptions.filter(o => o !== option)
        : [...prev.selectedOptions, option]
    }));
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleNext = () => {
    if (step === 1 && formData.selectedOptions.length > 0) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Always use real email service
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        // Show success message
        setShowSuccess(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            selectedOptions: [],
            fullName: '',
            email: '',
            company: '',
            request: ''
          });
          setStep(1);
          setShowSuccess(false);
          setIsSubmitting(false);
          onClose();
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      selectedOptions: [],
      fullName: '',
      email: '',
      company: '',
      request: ''
    });
    setStep(1);
    setShowSuccess(false);
    setIsSubmitting(false);
    setSubmitError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={handleClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={handleClose}>
          Close ✕
        </button>

        <div className="contact-modal-content">
          <h2 className="contact-modal-title">Let's<br />Connect</h2>

          {showSuccess ? (
            <div className="contact-success-message">
              <div className="success-icon">✓</div>
              <h3>Thank you!</h3>
              <p>Your message has been sent successfully.</p>
              <p className="success-details">We've sent a confirmation email to <strong>{formData.email}</strong></p>
              <p className="success-details">Our team will review your request and get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div className="contact-step-1">
                  <h3 className="contact-step-title">Please Choose an option:</h3>
                  
                  <div className="contact-options">
                    {options.map((option, index) => (
                      <div
                        key={index}
                        className={`contact-option ${formData.selectedOptions.includes(option.title) ? 'selected' : ''}`}
                        onClick={() => handleOptionToggle(option.title)}
                      >
                        <div className="contact-option-header">
                          <h4>{option.title}</h4>
                          <div className="contact-checkbox">
                            {formData.selectedOptions.includes(option.title) && '✓'}
                          </div>
                        </div>
                        <p>{option.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="contact-modal-footer">
                    <span className="contact-step-indicator">1/2</span>
                    <button
                      className="contact-btn contact-btn-next"
                      onClick={handleNext}
                      disabled={formData.selectedOptions.length === 0}
                    >
                      Next! →
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="contact-step-2">
                  <h3 className="contact-step-title">Your Information</h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="contact-form-group">
                      <label>Full Name*</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="contact-form-group">
                      <label>E-mail*</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="johndoe@gmail.com"
                        required
                      />
                    </div>

                    <div className="contact-form-group">
                      <label>Company*</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="ABC Company"
                        required
                      />
                    </div>

                    <div className="contact-form-group">
                      <label>Your Request*</label>
                      <textarea
                        name="request"
                        value={formData.request}
                        onChange={handleInputChange}
                        placeholder="I Would like to know Could you please send me the latest product catalog for Chemicals?"
                        rows="5"
                        required
                      />
                    </div>

                    <div className="contact-preview">
                      <div className="contact-preview-icon">👋 Hello!</div>
                      <p>I'm <strong>{formData.fullName || 'John Doe'}</strong> from <strong>{formData.company || 'ABC Company'}</strong>.</p>
                      <p>{formData.request || 'I Would like to know Could you please send me the latest product catalog for Chemicals?'}</p>
                    </div>

                    {submitError && (
                      <div className="contact-error-message">
                        <p>❌ {submitError}</p>
                      </div>
                    )}

                    <div className="contact-modal-footer">
                      <button
                        type="button"
                        className="contact-btn contact-btn-back"
                        onClick={handleBack}
                        disabled={isSubmitting}
                      >
                        ← Back
                      </button>
                      <span className="contact-step-indicator">2/2</span>
                      <button 
                        type="submit" 
                        className="contact-btn contact-btn-submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Submit →'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
