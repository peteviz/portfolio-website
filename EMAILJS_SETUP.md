# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form functionality.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template structure:

```
Subject: {{subject}} - New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and copy the **Template ID** (e.g., `template_xyz456`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the EmailJS dashboard
2. Find your **Public Key** (e.g., `abc123xyz456`)

## Step 5: Configure the Contact Component

Open `src/components/Contact.tsx` and replace the placeholders with your actual values:

```typescript
const serviceId = 'service_YOUR_SERVICE_ID' // Replace with your Service ID
const templateId = 'template_YOUR_TEMPLATE_ID' // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your Public Key
```

## Example Configuration

```typescript
const serviceId = 'service_abc123'
const templateId = 'template_xyz456'
const publicKey = 'abc123xyz456'
```

## Testing

1. Run your development server: `npm run dev`
2. Click the chat icon in the bottom-right corner
3. Fill out and submit the test form
4. Check your email inbox (akinde.peterr@gmail.com)

## Troubleshooting

- **Email not received**: Check your EmailJS dashboard for logs
- **CORS errors**: Make sure you've added your domain to EmailJS allowed domains
- **Rate limiting**: Free tier allows 200 emails/month

## Security Note

The public key is safe to expose in client-side code. EmailJS uses it along with your service configuration to send emails securely.

## Alternative: Using Environment Variables (Recommended for Production)

For better security, you can store these values in environment variables:

1. Create a `.env.local` file:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz456
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123xyz456
```

2. Update Contact.tsx to use environment variables:
```typescript
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
```

3. Add `.env.local` to your `.gitignore` file

