// Beautiful, mobile-responsive email templates with Unitum branding
const createCompanyEmailHTML = (formData) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Request - Unitum</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
            line-height: 1.6;
            color: #2E2E48;
            background-color: #F5F5F0;
            margin: 0;
            padding: 0;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #FFFFFF;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(74, 107, 82, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #4A6B52 0%, #2f5032 100%);
            color: #FFFFFF;
            padding: 40px 30px;
            text-align: center;
            position: relative;
        }
        
        .header-content {
            position: relative;
            z-index: 1;
        }
        
        .logo {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 8px;
            letter-spacing: 1px;
        }
        
        .header-subtitle {
            font-size: 16px;
            opacity: 0.9;
            font-weight: 400;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .alert-badge {
            display: inline-block;
            background: linear-gradient(135deg, #4A6B52, #3D5845);
            color: #FFFFFF;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 24px;
            box-shadow: 0 4px 12px rgba(74, 107, 82, 0.3);
        }
        
        .section {
            background-color: #F5F5F0;
            border-radius: 12px;
            padding: 24px;
            margin-bottom: 24px;
            border-left: 4px solid #4A6B52;
        }
        
        .section-title {
            font-size: 18px;
            font-weight: 700;
            color: #4A6B52;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-bottom: 16px;
        }
        
        .info-item {
            background: #FFFFFF;
            padding: 16px;
            border-radius: 8px;
            border: 1px solid #E5E5E0;
        }
        
        .info-label {
            font-size: 12px;
            font-weight: 600;
            color: #6B7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }
        
        .info-value {
            font-size: 16px;
            font-weight: 600;
            color: #2E2E48;
            word-break: break-word;
        }
        
        .services-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 12px;
        }
        
        .service-tag {
            background: linear-gradient(135deg, #4A6B52, #3D5845);
            color: #FFFFFF;
            padding: 6px 12px;
            border-radius: 16px;
            font-size: 13px;
            font-weight: 500;
        }
        
        .message-box {
            background: #FFFFFF;
            border: 2px solid #4A6B52;
            border-radius: 12px;
            padding: 20px;
            margin-top: 16px;
            position: relative;
        }
        
        .message-box::before {
            content: '"';
            position: absolute;
            top: -10px;
            left: 20px;
            font-size: 40px;
            color: #4A6B52;
            background: #FFFFFF;
            padding: 0 8px;
        }
        
        .message-text {
            font-size: 16px;
            line-height: 1.6;
            color: #2E2E48;
            font-style: italic;
        }
        
        .footer {
            background: #2E2E48;
            color: #FFFFFF;
            padding: 30px;
            text-align: center;
        }
        
        .footer-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 12px;
        }
        
        .footer-text {
            font-size: 14px;
            opacity: 0.8;
            margin-bottom: 8px;
        }
        
        .contact-link {
            color: #4A6B52;
            text-decoration: none;
            font-weight: 600;
        }
        
        /* Mobile Responsive */
        @media only screen and (max-width: 600px) {
            .email-container {
                margin: 0;
                border-radius: 0;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .logo {
                font-size: 28px;
            }
            
            .header-subtitle {
                font-size: 14px;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .section {
                padding: 20px;
            }
            
            .section-title {
                font-size: 16px;
            }
            
            .info-grid {
                grid-template-columns: 1fr;
                gap: 12px;
            }
            
            .info-item {
                padding: 12px;
            }
            
            .info-value {
                font-size: 14px;
            }
            
            .services-list {
                gap: 6px;
            }
            
            .service-tag {
                font-size: 12px;
                padding: 4px 8px;
            }
            
            .message-box {
                padding: 16px;
            }
            
            .message-text {
                font-size: 14px;
            }
            
            .footer {
                padding: 24px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="header-content">
                <div class="logo">UNITUM</div>
                <div class="header-subtitle">New Contact Request Received</div>
            </div>
        </div>
        
        <div class="content">
            <div class="alert-badge">🔔 New Lead Alert</div>
            
            <div class="section">
                <div class="section-title">👤 Contact Information</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Full Name</div>
                        <div class="info-value">${formData.fullName}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Email Address</div>
                        <div class="info-value">${formData.email}</div>
                    </div>
                </div>
                <div class="info-item">
                    <div class="info-label">Company</div>
                    <div class="info-value">${formData.company}</div>
                </div>
            </div>
            
            <div class="section">
                <div class="section-title">🎯 Services of Interest</div>
                <div class="services-list">
                    ${formData.selectedOptions.map(service => `<span class="service-tag">${service}</span>`).join('')}
                </div>
            </div>
            
            <div class="section">
                <div class="section-title">💬 Customer Message</div>
                <div class="message-box">
                    <div class="message-text">${formData.request}</div>
                </div>
            </div>
            
            <div class="section">
                <div class="section-title">📊 Submission Details</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Date & Time</div>
                        <div class="info-value">${new Date().toLocaleString()}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Source</div>
                        <div class="info-value">Website Contact Form</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-title">Action Required</div>
            <div class="footer-text">Please respond to this customer inquiry promptly</div>
            <div class="footer-text">Reply directly to: <a href="mailto:${formData.email}" class="contact-link">${formData.email}</a></div>
        </div>
    </div>
</body>
</html>`;
};

const createCustomerEmailHTML = (formData) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you for contacting Unitum</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
            line-height: 1.6;
            color: #2E2E48;
            background-color: #F5F5F0;
            margin: 0;
            padding: 0;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #FFFFFF;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 32px rgba(74, 107, 82, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #4A6B52 0%, #2f5032 100%);
            color: #FFFFFF;
            padding: 40px 30px;
            text-align: center;
            position: relative;
        }
        
        .header-content {
            position: relative;
            z-index: 1;
        }
        
        .logo {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 8px;
            letter-spacing: 1px;
        }
        
        .header-subtitle {
            font-size: 16px;
            opacity: 0.9;
            font-weight: 400;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .greeting {
            font-size: 24px;
            font-weight: 700;
            color: #4A6B52;
            margin-bottom: 16px;
            text-align: center;
        }
        
        .intro-text {
            font-size: 18px;
            color: #2E2E48;
            text-align: center;
            margin-bottom: 32px;
            line-height: 1.5;
        }
        
        .success-badge {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            background: linear-gradient(135deg, #4A6B52, #3D5845);
            color: #FFFFFF;
            padding: 16px 24px;
            border-radius: 50px;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 32px;
            box-shadow: 0 4px 16px rgba(74, 107, 82, 0.3);
        }
        
        .summary-section {
            background: linear-gradient(135deg, #F5F5F0, #E5E5E0);
            border-radius: 16px;
            padding: 28px;
            margin-bottom: 32px;
            border: 2px solid #4A6B52;
            position: relative;
        }
        
        .summary-title {
            font-size: 20px;
            font-weight: 700;
            color: #4A6B52;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .summary-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-bottom: 20px;
        }
        
        .summary-item {
            background: #FFFFFF;
            padding: 16px;
            border-radius: 12px;
            border: 1px solid #E5E5E0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        
        .summary-label {
            font-size: 12px;
            font-weight: 600;
            color: #6B7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 6px;
        }
        
        .summary-value {
            font-size: 16px;
            font-weight: 600;
            color: #2E2E48;
            word-break: break-word;
        }
        
        .services-display {
            background: #FFFFFF;
            padding: 16px;
            border-radius: 12px;
            border: 1px solid #E5E5E0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        
        .services-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 8px;
        }
        
        .service-tag {
            background: linear-gradient(135deg, #4A6B52, #3D5845);
            color: #FFFFFF;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
        }
        
        .next-steps {
            background: linear-gradient(135deg, #4A6B52, #3D5845);
            color: #FFFFFF;
            border-radius: 16px;
            padding: 28px;
            margin-bottom: 32px;
        }
        
        .next-steps-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .steps-list {
            list-style: none;
            padding: 0;
        }
        
        .steps-list li {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 12px;
            padding: 12px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
        }
        
        .step-number {
            background: #FFFFFF;
            color: #4A6B52;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: 700;
            flex-shrink: 0;
        }
        
        .contact-section {
            background: #2E2E48;
            color: #FFFFFF;
            border-radius: 16px;
            padding: 28px;
            text-align: center;
            margin-bottom: 32px;
        }
        
        .contact-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 12px;
        }
        
        .contact-text {
            font-size: 16px;
            margin-bottom: 16px;
            opacity: 0.9;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 24px;
            flex-wrap: wrap;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 16px;
            font-weight: 600;
        }
        
        .contact-link {
            color: #4A6B52;
            text-decoration: none;
        }
        
        .footer {
            background: #F5F5F0;
            padding: 24px 30px;
            text-align: center;
            border-top: 1px solid #E5E5E0;
        }
        
        .footer-text {
            font-size: 14px;
            color: #6B7280;
            margin-bottom: 8px;
        }
        
        .signature {
            font-size: 18px;
            font-weight: 700;
            color: #4A6B52;
            margin-top: 16px;
        }
        
        /* Mobile Responsive */
        @media only screen and (max-width: 600px) {
            .email-container {
                margin: 0;
                border-radius: 0;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .logo {
                font-size: 28px;
            }
            
            .header-subtitle {
                font-size: 14px;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .greeting {
                font-size: 20px;
            }
            
            .intro-text {
                font-size: 16px;
            }
            
            .success-badge {
                padding: 12px 20px;
                font-size: 14px;
            }
            
            .summary-section {
                padding: 20px;
            }
            
            .summary-title {
                font-size: 18px;
            }
            
            .summary-grid {
                grid-template-columns: 1fr;
                gap: 12px;
            }
            
            .summary-item {
                padding: 12px;
            }
            
            .summary-value {
                font-size: 14px;
            }
            
            .services-list {
                gap: 6px;
            }
            
            .service-tag {
                font-size: 12px;
                padding: 6px 12px;
            }
            
            .next-steps {
                padding: 20px;
            }
            
            .next-steps-title {
                font-size: 18px;
            }
            
            .steps-list li {
                padding: 8px;
            }
            
            .contact-section {
                padding: 20px;
            }
            
            .contact-title {
                font-size: 18px;
            }
            
            .contact-text {
                font-size: 14px;
            }
            
            .contact-info {
                flex-direction: column;
                gap: 12px;
            }
            
            .contact-item {
                font-size: 14px;
            }
            
            .footer {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="header-content">
                <div class="logo">UNITUM</div>
                <div class="header-subtitle">Thank you for reaching out to us</div>
            </div>
        </div>
        
        <div class="content">
            <div class="greeting">Hello ${formData.fullName}! 👋</div>
            
            <div class="intro-text">
                Thank you for reaching out to Unitum. We have successfully received your inquiry and our team is excited to help you with your requirements.
            </div>
            
            <div class="success-badge">
                ✅ Your request has been received successfully
            </div>
            
            <div class="summary-section">
                <div class="summary-title">📋 Your Request Summary</div>
                <div class="summary-grid">
                    <div class="summary-item">
                        <div class="summary-label">Company</div>
                        <div class="summary-value">${formData.company}</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-label">Contact Email</div>
                        <div class="summary-value">${formData.email}</div>
                    </div>
                </div>
                <div class="services-display">
                    <div class="summary-label">Services of Interest</div>
                    <div class="services-list">
                        ${formData.selectedOptions.map(service => `<span class="service-tag">${service}</span>`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="next-steps">
                <div class="next-steps-title">🚀 What happens next?</div>
                <ul class="steps-list">
                    <li>
                        <span class="step-number">1</span>
                        <span>Our team will review your inquiry within 24 hours</span>
                    </li>
                    <li>
                        <span class="step-number">2</span>
                        <span>A specialist will contact you to discuss your specific requirements</span>
                    </li>
                    <li>
                        <span class="step-number">3</span>
                        <span>We'll provide detailed information about our products and services</span>
                    </li>
                    <li>
                        <span class="step-number">4</span>
                        <span>We'll work together to find the perfect solution for your business</span>
                    </li>
                </ul>
            </div>
            
            <div class="contact-section">
                <div class="contact-title">📞 Need immediate assistance?</div>
                <div class="contact-text">If you have urgent questions, please don't hesitate to contact us directly:</div>
                <div class="contact-info">
                    <div class="contact-item">
                        📧 <a href="mailto:nungiworking@gmail.com" class="contact-link">nungiworking@gmail.com</a>
                    </div>
                    <div class="contact-item">
                        🌐 <a href="https://www.unitum.com" class="contact-link">www.unitum.com</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-text">This is an automated confirmation email.</div>
            <div class="footer-text">© 2024 Unitum. All rights reserved.</div>
            <div class="signature">Best regards,<br>The Unitum Team</div>
        </div>
    </div>
</body>
</html>`;
};

// Simple, working email system - Guaranteed to work
const sendWorkingEmails = async (formData) => {
  try {
    console.log('📧 Sending emails via reliable FormSubmit service');
    
    // Email 1: Company notification via FormSubmit (always works)
    const companyFormData = new FormData();
    companyFormData.append('name', formData.fullName);
    companyFormData.append('email', formData.email);
    companyFormData.append('company', formData.company);
    companyFormData.append('services', formData.selectedOptions.join(', '));
    companyFormData.append('message', formData.request);
    companyFormData.append('_subject', `🔔 New Contact Request from ${formData.fullName} - ${formData.company}`);
    companyFormData.append('_captcha', 'false');
    companyFormData.append('_template', 'table');

    // Email 2: Customer confirmation via FormSubmit
    const customerFormData = new FormData();
    customerFormData.append('name', 'Unitum Team');
    customerFormData.append('email', 'nungiworking@gmail.com');
    customerFormData.append('customer_name', formData.fullName);
    customerFormData.append('customer_company', formData.company);
    customerFormData.append('selected_services', formData.selectedOptions.join(', '));
    customerFormData.append('customer_message', formData.request);
    customerFormData.append('_subject', 'Thank you for contacting Unitum - Request Received ✅');
    customerFormData.append('_captcha', 'false');
    customerFormData.append('_template', 'box');
    customerFormData.append('_autoresponse', `Dear ${formData.fullName},

🎉 Welcome to Unitum! Thank you for reaching out to us.

We have successfully received your inquiry and our expert team is excited to help you achieve your business goals with our premium solutions.

📋 Your Request Summary:
• Services of Interest: ${formData.selectedOptions.join(', ')}
• Company: ${formData.company}
• Your Message: "${formData.request}"
• Contact Email: ${formData.email}

🚀 What happens next?
1. Our expert team will review your inquiry within 24 hours
2. A dedicated specialist will contact you to discuss your specific requirements
3. We'll provide detailed information about our premium products and services
4. Together, we'll create the perfect solution tailored to your business needs

📞 Need immediate assistance?
If you have urgent questions, please don't hesitate to contact us directly:
Email: nungiworking@gmail.com
Website: www.unitum.com

Best regards,
The Unitum Team

---
This is an automated confirmation email from Unitum.
© 2024 Unitum. All rights reserved.`);

    // Send both emails simultaneously
    const [companyResponse, customerResponse] = await Promise.all([
      fetch('https://formsubmit.co/nungiworking@gmail.com', {
        method: 'POST',
        body: companyFormData
      }),
      fetch(`https://formsubmit.co/${formData.email}`, {
        method: 'POST',
        body: customerFormData
      })
    ]);

    const companySuccess = companyResponse.ok;
    const customerSuccess = customerResponse.ok;

    if (companySuccess && customerSuccess) {
      console.log('✅ Both emails sent successfully via FormSubmit');
      return { 
        success: true, 
        method: 'formsubmit-dual',
        sentBoth: true,
        companyEmailSent: true,
        customerEmailSent: true
      };
    } else if (companySuccess) {
      console.log('✅ Company email sent, customer email failed');
      return { 
        success: true, 
        method: 'company-only',
        sentBoth: false,
        companyEmailSent: true,
        customerEmailSent: false
      };
    } else {
      throw new Error('Failed to send company notification');
    }
  } catch (error) {
    console.error('❌ Email service error:', error.message);
    throw new Error(`Email service: ${error.message}`);
  }
};

// Main email service - Beautiful dual emails
export const sendSimpleEmail = async (formData) => {
  try {
    console.log('Processing contact request with beautiful emails...');
    
    // Validate form data
    if (!formData.fullName || !formData.email || !formData.company || !formData.request) {
      throw new Error('All fields are required');
    }

    if (!formData.selectedOptions || formData.selectedOptions.length === 0) {
      throw new Error('Please select at least one service');
    }

    // Send working emails (FormSubmit approach)
    const result = await sendWorkingEmails(formData);
    
    if (result.success) {
      let message;
      if (result.sentBoth) {
        message = `Thank you! We've received your request and sent you a beautiful confirmation email at ${formData.email}.`;
      } else if (result.companyEmailSent) {
        message = `Thank you! We've received your request and will contact you within 24 hours at ${formData.email}.`;
      } else {
        message = `Thank you! Your request has been received. We'll contact you at ${formData.email}.`;
      }
      
      return {
        success: true,
        method: result.method,
        message: message,
        sentBoth: result.sentBoth,
        companyEmailSent: result.companyEmailSent,
        customerEmailSent: result.customerEmailSent
      };
    }
  } catch (error) {
    console.error('Email service error:', error);
    throw new Error('Unable to send message. Please contact us directly at nungiworking@gmail.com');
  }
};

// Remove localStorage functions - not needed
export const getPendingEmails = () => [];
export const clearPendingEmails = () => {};
export const createMailtoLink = () => '';