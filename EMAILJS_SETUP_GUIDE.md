# EmailJS Setup Guide for Contact Form

## What is EmailJS?
EmailJS allows you to send emails directly from your frontend JavaScript code without needing a backend server. It's perfect for contact forms, newsletters, and other email functionality.

## Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set Up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider:
   - **Gmail**: Connect your Gmail account
   - **Outlook**: Connect your Outlook account
   - **Custom SMTP**: Use your own SMTP server
4. Follow the authentication steps
5. Note down your **Service ID** (you'll need this later)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with these variables:
   ```
   To Name: {{user_name}}
   From Email: {{user_email}}
   Phone: {{user_phone}}
   Message: {{message}}
   Time: {{time}}
   ```
4. Save the template and note down your **Template ID**

### 4. Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### 5. Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual credentials:
   ```javascript
   export const EMAILJS_CONFIG = {
       SERVICE_ID: 'your_service_id_here',
       TEMPLATE_ID: 'your_template_id_here',
       PUBLIC_KEY: 'your_public_key_here',
   };
   ```

### 6. Test Your Form
1. Start your development server: `npm run dev`
2. Go to your contact page
3. Fill out and submit the form
4. Check your email to see if the message was received

## Email Template Example

Here's a sample email template you can use:

**Subject:** New Contact Form Submission from {{user_name}}

**Body:**
```
Hello,

You have received a new contact form submission:

Name: {{user_name}}
Email: {{user_email}}
Phone: {{user_phone}}
Time: {{time}}

Message:
{{message}}

Best regards,
Your Website Contact Form
```

## Security Notes

- ✅ **Public Key is Safe**: The public key is designed to be exposed in frontend code
- ✅ **Rate Limiting**: EmailJS has built-in rate limiting to prevent abuse
- ✅ **Template Validation**: Templates are validated server-side
- ⚠️ **Free Tier Limits**: 200 emails per month on free plan

## Troubleshooting

### Common Issues:

1. **"Service not found" error**
   - Check your Service ID is correct
   - Ensure your email service is properly connected

2. **"Template not found" error**
   - Verify your Template ID is correct
   - Make sure the template is published

3. **"Invalid public key" error**
   - Check your Public Key is correct
   - Ensure you're using the right key for your account

4. **Form not sending**
   - Check browser console for errors
   - Verify all form fields have the correct `name` attributes
   - Ensure all required fields are filled

### Debug Mode:
Add this to see detailed logs:
```javascript
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
```

## Alternative Services

If EmailJS doesn't work for you, consider these alternatives:
- **Formspree**: Simple form handling
- **Netlify Forms**: If hosting on Netlify
- **Getform**: Another popular option

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Community: [https://www.emailjs.com/community/](https://www.emailjs.com/community/) 