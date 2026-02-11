# 🚀 Production Email Setup - EmailJS

## Current Status
Your contact form is ready for production. It currently uses Formspree as a fallback, but for the best experience (dual emails), set up EmailJS.

## EmailJS Setup (5 minutes)

### 1. Create EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com)
- Sign up with your email
- Verify your account

### 2. Add Gmail Service
- Go to **Email Services** → **Add New Service**
- Choose **Gmail**
- Connect your Gmail: `nuwangimahesha@gmail.com`
- Copy the **Service ID** (e.g., `service_abc123`)

### 3. Create Company Email Template
- Go to **Email Templates** → **Create New Template**
- **Template Name:** `Company Contact Request`
- **Subject:** `Contact Request from {{from_name}} - {{company}}`
- **Content:**
```
New contact request received:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Services: {{services}}

Message:
{{message}}

Reply to: {{from_email}}
```
- **To Email:** `nuwangimahesha@gmail.com`
- Copy the **Template ID** (e.g., `template_company123`)

### 4. Create Customer Confirmation Template
- Create another template: `Customer Confirmation`
- **Subject:** `Thank you for contacting Unitum - Request Received`
- **Content:**
```
Dear {{to_name}},

Thank you for reaching out to Unitum. We have successfully received your inquiry and our team will review your request promptly.

Your Request Summary:
- Services of Interest: {{services}}
- Company: {{company}}
- Your Message: "{{message}}"

What happens next?
• Our team will review your inquiry within 24 hours
• A specialist will contact you to discuss your requirements
• We'll provide detailed information about our products and services

Need immediate assistance?
Email: nuwangimahesha@gmail.com

Best regards,
The Unitum Team
```
- **To Email:** `{{to_email}}`
- Copy the **Template ID** (e.g., `template_customer123`)

### 5. Get Public Key
- Go to **Account** → **General**
- Copy your **Public Key** (e.g., `pk_abc123def456`)

### 6. Update Code
In `src/services/emailService.js`, replace these lines:
```javascript
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_COMPANY_TEMPLATE = 'your_company_template_id_here';
const EMAILJS_CUSTOMER_TEMPLATE = 'your_customer_template_id_here';
```

### 7. Deploy and Test
- Deploy your application
- Test the contact form
- Check both emails are received

## What You Get

**With EmailJS:**
- ✅ Company notification to `nuwangimahesha@gmail.com`
- ✅ Customer confirmation email
- ✅ Professional templates
- ✅ 200 emails/month free

**Without EmailJS (current fallback):**
- ✅ Company notification via Formspree
- ⚠️ No customer confirmation
- ✅ Still works professionally

## Testing
1. Fill out contact form
2. Submit
3. Success message should say "Thank you! We've received your request and sent you a confirmation email."
4. Check both email inboxes

Your contact system is production-ready! 🚀