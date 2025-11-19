# EmailJS Setup Guide

This guide will help you configure EmailJS to automatically send form submissions to `transaktio.whitelist@gmail.com` without requiring users to open their email client.

## Step 1: Sign Up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (free tier includes 200 emails/month)
3. Create your account

## Step 2: Add Email Service

1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Follow the connection steps:
   - For Gmail: Authorize EmailJS to access your Gmail account
   - Select the account: `transaktio.whitelist@gmail.com`
5. **Save the Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** `Whitelist Application`

**Subject:**
```
Whitelist Application - Transaktio
```

**Content:**
```
Whitelist Application Submission

=== CONTACT INFORMATION ===
Name: {{name}}
Email: {{email}}
Company Name: {{companyName}}

=== MESSAGE ===
{{message}}

---
Submitted via Transaktio Whitelist Form
Timestamp: {{timestamp}}
```

**To Email:** `transaktio.whitelist@gmail.com`

**From Name:** `{{from_name}}`

**From Email:** `{{from_email}}`

4. **Save the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it (you'll need this later)

## Step 5: Configure in Your Project

You have two options:

### Option A: Environment Variables (Recommended)

1. Create or edit `.env.local` in your project root:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

2. Replace the values with your actual keys from EmailJS dashboard
3. Restart your development server

### Option B: Direct Configuration

1. Edit `src/lib/emailjs-config.ts`
2. Replace the placeholder values:

```typescript
export const emailjsConfig = {
  publicKey: "your_actual_public_key",
  serviceId: "your_actual_service_id",
  templateId: "your_actual_template_id",
  recipientEmail: "transaktio.whitelist@gmail.com",
};
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the whitelist form
3. Fill out and submit the form
4. Check `transaktio.whitelist@gmail.com` inbox for the email

## Troubleshooting

### Email Not Sending

1. **Check Browser Console:** Look for error messages
2. **Verify Keys:** Ensure all three keys are correct in your config
3. **Check EmailJS Dashboard:** Look at the "Logs" section for delivery status
4. **Service Connection:** Verify your email service is still connected
5. **Template Variables:** Ensure template variable names match exactly

### Common Errors

- **"EmailJS is not configured"**: Check that all keys are set (not using placeholder values)
- **"Service ID not found"**: Verify the Service ID in EmailJS dashboard
- **"Template ID not found"**: Verify the Template ID in EmailJS dashboard
- **"Public Key invalid"**: Check your Public Key in Account settings

### Rate Limits

- Free tier: 200 emails/month
- If you exceed the limit, upgrade or wait for the next month
- Check usage in EmailJS Dashboard → Account

## Security Notes

- ✅ Public Key is safe to expose in client-side code
- ✅ EmailJS handles email sending securely
- ✅ No backend server required
- ✅ All communication is encrypted

## Alternative: FormSubmit.co (Simpler Option)

If EmailJS setup is too complex, you can use FormSubmit.co:

1. Change form action to: `https://formsubmit.co/transaktio.whitelist@gmail.com`
2. Add `method="POST"` and `enctype="text/plain"`
3. No API keys needed!

However, EmailJS provides better customization and control.

## Support

- EmailJS Docs: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

