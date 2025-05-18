import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { submitContactForm } from '../api/contact';

// Animation variant for fade-in effect used throughout the component
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Contact: React.FC = () => {
  // Form data state with honeypot field for spam protection
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Honeypot field to catch bots - will be hidden from real users
  });

  // Form validation error messages
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: '', isError: false });

  // Form validation function - returns true if valid, false if invalid
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      valid = false;
    }
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
        valid = false;
      }
    }
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Anti-spam check: If honeypot field is filled (by bots), silently reject
    // but pretend to succeed to avoid alerting the bot
    if (formData.honeypot) {
      // Simulate success without actually submitting
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitMessage({
          text: 'Your message has been sent successfully! I will get back to you soon.',
          isError: false
        });
        setFormData({ name: '', email: '', message: '', honeypot: '' });
        setTimeout(() => {
          setSubmitMessage({ text: '', isError: false });
        }, 5000);
      }, 1500);
      return;
    }
    // Validate form inputs before submission
    if (!validateForm()) {
      return;
    }
    // Set submitting state to show loading spinner
    setIsSubmitting(true);
    try {
      // Use the API function instead of direct fetch
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        message: formData.message
      });      
      // Success case - show success message and reset form
      setSubmitMessage({
        text: 'Your message has been sent successfully! I will get back to you soon.',
        isError: false
      });
      setFormData({ name: '', email: '', message: '', honeypot: '' });
    } catch (error) {
      // Error case - display error message
      console.error('Error sending message:', error);
      setSubmitMessage({
        text: error instanceof Error
          ? error.message
          : 'An error occurred. Please try again later.',
        isError: true
      });
    } finally {
      // Reset submitting state
      setIsSubmitting(false);
      // Auto-clear success/error message after 5 seconds
      setTimeout(() => {
        setSubmitMessage({ text: '', isError: false });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section heading with animation */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me.
          </p>
        </motion.div>
        {/* Two-column layout for contact info and form */}
        <div className="flex flex-col md:flex-row gap-10 max-w-4xl mx-auto">
          {/* Left column - Contact information */}
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            {/* Contact details with icons */}
            <div className="space-y-4">
              {/* Location information */}
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500/20 text-blue-500 dark:text-blue-400 rounded-full mr-3">
                  📍
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Location</p>
                  <p>{personalInfo.location}</p>
                </div>
              </div>
              {/* Email information */}
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500/20 text-blue-500 dark:text-blue-400 rounded-full mr-3">
                  📧
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Email</p>
                  <p>{personalInfo.email}</p>
                </div>
              </div>
            </div>
            {/* Social media links */}
            <h3 className="text-xl font-semibold mt-8 mb-4">Social Media</h3>
            <div className="flex gap-4">
              {personalInfo.socials.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 text-gray-700 dark:text-white rounded-full transition-colors"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>
          {/* Right column - Contact form */}
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name input field with validation */}
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-500 dark:text-gray-400">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 bg-white dark:bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              {/* Email input field with validation */}
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-500 dark:text-gray-400">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 bg-white dark:bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              {/* Message textarea with validation */}
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-500 dark:text-gray-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full p-3 bg-white dark:bg-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}`}
                />
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              {/* Hidden honeypot field for spam protection */}
              <div className="hidden">
                <label htmlFor="honeypot">Leave this field empty</label>
                <input
                  type="text"
                  id="honeypot"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              {/* Submit button with loading state */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-blue-400 dark:bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors w-full flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {/* Show spinner during submission */}
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              {/* Success/error message after submission attempt */}
              {submitMessage.text && (
                <div className={`mt-4 p-3 rounded-md ${submitMessage.isError ? 'bg-red-500/20 text-red-600 dark:text-red-300' : 'bg-green-500/20 text-gray-600 dark:text-green-300'}`}>
                  {submitMessage.text}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
