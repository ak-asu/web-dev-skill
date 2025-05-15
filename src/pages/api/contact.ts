import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Rate limiting
const rateLimits: Record<string, { count: number, lastReset: number }> = {};
const MAX_REQUESTS = 5; // Max 5 requests per hour per IP
const RESET_PERIOD = 60 * 60 * 1000; // 1 hour in milliseconds

// Input validation schema
const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Rate limiting
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    const ipStr = Array.isArray(ip) ? ip[0] : ip;
    
    if (!rateLimits[ipStr]) {
      rateLimits[ipStr] = { count: 0, lastReset: Date.now() };
    }
    
    // Reset counter if period has passed
    if (Date.now() - rateLimits[ipStr].lastReset > RESET_PERIOD) {
      rateLimits[ipStr] = { count: 0, lastReset: Date.now() };
    }
    
    // Check if rate limit exceeded
    if (rateLimits[ipStr].count >= MAX_REQUESTS) {
      return res.status(429).json({ message: 'Too many requests. Please try again later.' });
    }
    
    // Increment request count
    rateLimits[ipStr].count++;

    // Validate form data
    const parsedData = ContactSchema.safeParse(req.body);
    if (!parsedData.success) {
      return res.status(400).json({ 
        message: 'Invalid input data',
        errors: parsedData.error.errors 
      });
    }

    const { name, email, message } = parsedData.data;

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Create email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Message:
${message}
      `,
      html: `
<h2>New Contact Form Message</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    // Return success
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
}
