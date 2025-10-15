/* eslint-disable no-undef */
import { createTransport } from 'nodemailer';

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const formData = req.body;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Send email
    await transporter.sendMail({
      from: formData.email,
      to: process.env.GMAIL_USER,
      subject: 'New Admission Query',
      html: `
        <h2>New Admission Enquiry</h2>
        <p>-----------------------</p>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Stream:</strong> ${formData.stream || 'Not specified'}</p>
        <p><strong>School:</strong> ${formData.school || 'Not specified'}</p>
        <p><strong>Message:</strong> ${formData.message || 'No message'}</p>
        <hr>
        <p><small>Sent at: ${new Date().toLocaleString()}</small></p>
      `
    });

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      email: formData.email
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.'
    });
  }
}
