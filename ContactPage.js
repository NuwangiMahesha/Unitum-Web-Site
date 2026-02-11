import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { sendSimpleEmail } from '../services/emailService';
import './ContactPage.css';

const ContactPage = () => {
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
      console.log('Submitting form with data:', formData);
      
      // Use the simple email service
      const result = await sendSimpleEmail(formData);
      
      console.log('Email result:', result);
      
      if (result.success) {
        setShowSuccess(true);
        
        // Store result info for success message
        setFormData(prev => ({ ...prev, emailResult: result }));
        
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
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Navigation />
      
      <main className="contact-main">
        <div className="contact-container">
          <div className="contact-header">
            <h1 className="contact-title">Let's Connect</h1>
            <p className="contact-subtitle">Get in touch with our team to discuss your requirements</p>
          </div>

          <div className="contact-form-container">
            {showSuccess ? (
              <div className="contact-success-message">
                <div className="success-icon">✓</div>
                <h3>Thank you!</h3>
                <p>{formData.emailResult?.message || 'Your message has been sent successfully!'}</p>
                <div className="success-details">
                  {formData.emailResult?.sentBoth ? (
                    <>
                      <p><strong>✅ Both emails sent successfully!</strong></p>
                      <p>📧 Company notification sent to: nungiworking@gmail.com</p>
                      <p>📧 Confirmation email sent to: {formData.email}</p>
                      <p className="success-note">You should receive a confirmation email shortly at {formData.email}</p>
                    </>
                  ) : formData.emailResult?.companyEmailSent ? (
                    <>
                      <p><strong>✅ Your request has been received!</strong></p>
                      <p>📧 Company notification sent to: nungiworking@gmail.com</p>
                      <p>📞 Our team will contact you directly at: {formData.email}</p>
                      <p className="success-note">We'll get back to you within 24 hours</p>
                    </>
                  ) : (
                    <>
                      <p><strong>✅ Request processed successfully!</strong></p>
                      <p>📧 Your message has been received</p>
                      <p>📞 We'll contact you at: {formData.email}</p>
                    </>
                  )}
                  <div className="request-summary">
                    <p><strong>📋 Your request summary:</strong></p>
                    <ul>
                      <li><strong>Name:</strong> {formData.fullName}</li>
                      <li><strong>Company:</strong> {formData.company}</li>
                      <li><strong>Services:</strong> {formData.selectedOptions.join(', ')}</li>
                      <li><strong>Email:</strong> {formData.email}</li>
                    </ul>
                  </div>
                  <div className="next-steps">
                    <p><strong>What happens next?</strong></p>
                    <ul>
                      <li>Our team will review your inquiry within 24 hours</li>
                      <li>A specialist will contact you at {formData.email}</li>
                      <li>We'll provide detailed information about our products and services</li>
                    </ul>
                  </div>
                  <p className="contact-info">
                    <strong>Need immediate assistance?</strong><br/>
                    Email us directly: <a href="mailto:nungiworking@gmail.com">nungiworking@gmail.com</a>
                  </p>
                </div>
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

                    <div className="contact-form-footer">
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

                      <div className="contact-form-footer">
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
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;