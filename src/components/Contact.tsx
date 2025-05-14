import React, { useState } from 'react';
import { personalInfo } from '../data';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: '', isError: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({ 
        text: 'Your message has been sent successfully! I will get back to you soon.', 
        isError: false 
      });
      setFormData({ name: '', email: '', message: '' });
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage({ text: '', isError: false });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 max-w-4xl mx-auto">
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500/20 text-blue-400 rounded-full mr-3">
                  📍
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p>{personalInfo.location}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500/20 text-blue-400 rounded-full mr-3">
                  📧
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p>{personalInfo.email}</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Social Media</h3>
            <div className="flex gap-4">
              {personalInfo.socials.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-700 hover:bg-blue-500 text-white rounded-full transition-colors"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-400">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-400">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors w-full flex items-center justify-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
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
              
              {submitMessage.text && (
                <div className={`mt-4 p-3 rounded-md ${submitMessage.isError ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'}`}>
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
