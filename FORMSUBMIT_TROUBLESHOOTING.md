# FormSubmit.co Troubleshooting Guide

## ⚠️ IMPORTANT: Email Activation Required

**FormSubmit.co requires you to activate your email address before receiving submissions!**

### Step 1: Activate Your Email

1. **Submit a test form** on your website
2. **Check `transaktio.whitelist@gmail.com` inbox** (and spam folder)
3. **Look for an email from FormSubmit.co** with subject "Confirm your form"
4. **Click the activation link** in that email
5. **After activation**, you'll start receiving all form submissions

### Step 2: Check Spam Folder

- FormSubmit.co emails often go to spam initially
- Check both inbox and spam folder
- Mark as "Not Spam" if found in spam

### Step 3: Verify Form Configuration

The form is configured to send to:
- **Email:** `transaktio.whitelist@gmail.com`
- **Subject:** `Whitelist Application - Transaktio`
- **Method:** AJAX (no page reload)

## Common Issues & Solutions

### Issue 1: No Emails Received

**Possible Causes:**
1. Email not activated (most common)
2. Emails going to spam
3. Wrong email address
4. FormSubmit.co service issue

**Solutions:**
1. ✅ **Activate email** - Submit form, check email, click activation link
2. ✅ **Check spam folder** - Look in spam/junk
3. ✅ **Verify email address** - Ensure `transaktio.whitelist@gmail.com` is correct
4. ✅ **Wait 24 hours** - Sometimes there's a delay for first-time setup

### Issue 2: Form Shows Success But No Email

**This means:**
- Form submission was successful
- But email might not be activated yet
- Or email is in spam folder

**Solution:**
1. Check spam folder
2. Verify email activation
3. Check FormSubmit.co status: https://formsubmit.co/status

### Issue 3: Error Messages

**"Email needs activation"**
- Submit the form once
- Check email inbox for activation link
- Click the link to activate

**"Network error"**
- Check internet connection
- Try again later
- Check browser console for details

**"HTTP error"**
- FormSubmit.co might be temporarily down
- Check status: https://formsubmit.co/status
- Try again in a few minutes

## Testing the Form

### Test Steps:

1. **Fill out the form** with test data:
   - Name: Test User
   - Email: test@example.com
   - Company: Test Company
   - Message: This is a test

2. **Submit the form**

3. **Check browser console** (F12 → Console tab)
   - Look for any error messages
   - Should see successful response

4. **Check email inbox**
   - First submission: Look for activation email
   - After activation: Look for form submission email

## Debugging

### Enable Console Logging

The form already logs errors to console. Check browser console (F12) for:
- `FormSubmit Error:` - Any errors during submission
- `Error details:` - Detailed error information

### Test FormSubmit.co Directly

You can test FormSubmit.co directly by visiting:
```
https://formsubmit.co/transaktio.whitelist@gmail.com
```

This will show if the email is activated.

## Alternative: Use Direct Form Action

If AJAX continues to have issues, you can switch to direct form submission:

```tsx
<form action="https://formsubmit.co/transaktio.whitelist@gmail.com" method="POST">
  {/* form fields */}
</form>
```

Note: This will redirect the page after submission.

## Email Format

Once activated, you'll receive emails with:

**Subject:** `Whitelist Application - Transaktio`

**Body:**
```
Name: [User's Name]
Email: [User's Email]
Company Name: [Company Name]
Message: [User's Message]
```

## Still Not Working?

1. **Check FormSubmit.co Status**: https://formsubmit.co/status
2. **Verify Email Address**: Make sure `transaktio.whitelist@gmail.com` is correct
3. **Try Different Email**: Test with a different email address
4. **Check Browser Console**: Look for detailed error messages
5. **Contact Support**: FormSubmit.co support if issues persist

## Quick Checklist

- [ ] Submitted form at least once
- [ ] Checked email inbox for activation link
- [ ] Clicked activation link in email
- [ ] Checked spam/junk folder
- [ ] Verified email address is correct
- [ ] Checked browser console for errors
- [ ] Waited a few minutes after activation

---

**Most Common Issue:** Email not activated. Submit the form once, check email, and click the activation link!

