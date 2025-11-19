# FormSubmit.co Setup Guide

This form uses **FormSubmit.co** - a free, client-side form submission service that requires **zero configuration** and **no API keys**.

## How It Works

FormSubmit.co automatically sends form submissions directly to `transaktio.whitelist@gmail.com` without requiring:
- ❌ EmailJS or similar services
- ❌ Backend server
- ❌ User to open email client
- ❌ API keys or configuration

## Current Implementation

The form is already configured and ready to use! It sends submissions to:
**transaktio.whitelist@gmail.com**

## How FormSubmit.co Works

1. User fills out the form
2. Form data is sent to FormSubmit.co via AJAX
3. FormSubmit.co forwards the email to `transaktio.whitelist@gmail.com`
4. User sees success message (no page redirect)

## Email Format

FormSubmit.co will send emails with this structure:

**Subject:** `Whitelist Application - Transaktio`

**Body:**
```
Name: [User's Name]
Email: [User's Email]
Company Name: [Company Name or empty]
Message: [User's Message or empty]
```

## Features

✅ **Free** - No cost, unlimited submissions  
✅ **No Setup Required** - Works immediately  
✅ **No API Keys** - Zero configuration  
✅ **Spam Protection** - Built-in spam filtering  
✅ **AJAX Support** - No page reload  
✅ **Automatic** - Sends directly to email  

## Testing

1. Fill out the whitelist form on your site
2. Submit the form
3. Check `transaktio.whitelist@gmail.com` inbox
4. You should receive the email within seconds

## Customization Options

The form includes these FormSubmit.co options:

- `_subject`: Custom email subject
- `_template`: Email template style ("box")
- `_captcha`: Disabled (set to "false")
- `_next`: Stays on same page after submission

## Rate Limits

- **Free tier**: Unlimited submissions
- **No daily limits**
- **No monthly limits**

## Troubleshooting

### Email Not Received

1. **Check Spam Folder** - FormSubmit.co emails may go to spam initially
2. **Verify Email Address** - Ensure `transaktio.whitelist@gmail.com` is correct
3. **Check Browser Console** - Look for any JavaScript errors
4. **Test Again** - Sometimes there's a slight delay

### Form Not Submitting

1. **Check Network Tab** - Verify the request to `formsubmit.co/ajax/...` is successful
2. **Check Console** - Look for error messages
3. **Verify Form Fields** - Ensure all required fields have `name` attributes

### Common Issues

- **CORS Errors**: FormSubmit.co handles CORS automatically
- **Network Errors**: Check internet connection
- **Validation Errors**: Form validates before submission

## Alternative: Direct Form Action

If AJAX doesn't work, you can use direct form submission:

```tsx
<form action="https://formsubmit.co/transaktio.whitelist@gmail.com" method="POST">
  {/* form fields */}
</form>
```

However, this will redirect the page. The current AJAX implementation is better for UX.

## Support

- FormSubmit.co Docs: [https://formsubmit.co/documentation](https://formsubmit.co/documentation)
- FormSubmit.co Status: [https://formsubmit.co/status](https://formsubmit.co/status)

## Security

✅ **HTTPS Only** - All submissions are encrypted  
✅ **Spam Protection** - Built-in filtering  
✅ **No Data Storage** - FormSubmit.co doesn't store your data  
✅ **Privacy Friendly** - GDPR compliant  

---

**The form is ready to use - no additional setup required!**

