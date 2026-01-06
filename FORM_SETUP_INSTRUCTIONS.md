# Form Submission Setup Instructions

This website includes form validation and is ready for backend integration. Here are two options for handling form submissions on a static site:

## Option A: Formspree (Recommended - Easiest)

1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
3. Open `client/src/components/Contact.tsx`
4. Find the commented Formspree code in `handleSubmit` function
5. Replace `YOUR_FORM_ID` with your actual Formspree form ID
6. Uncomment the Formspree fetch code and comment out the mailto fallback

```typescript
// Replace this:
const mailtoLink = `mailto:moataz.yones244@gmail.com?...`;
window.location.href = mailtoLink;

// With this:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});

if (response.ok) {
  setSubmitStatus('success');
} else {
  setSubmitStatus('error');
}
```

## Option B: EmailJS

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and create a free account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Install EmailJS: `npm install @emailjs/browser`
6. Import in Contact.tsx: `import emailjs from '@emailjs/browser';`
7. Uncomment and configure the EmailJS code in `handleSubmit`

```typescript
import emailjs from '@emailjs/browser';

// In handleSubmit:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name: formData.name,
    from_email: formData.email,
    company: formData.company,
    service: formData.service,
    message: formData.message
  },
  'YOUR_PUBLIC_KEY'
);
```

## Current Setup

Currently, the form uses a **mailto fallback** which opens the user's email client. This works without any backend setup but requires the user to have an email client configured.

The form includes:
- ✅ Inline validation (real-time error messages)
- ✅ Success/error state indicators
- ✅ Loading state during submission
- ✅ Form reset after successful submission

