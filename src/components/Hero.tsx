import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import personalResume from '../assets/resume.pdf';


const Hero: React.FC = () => {
  return (
    // Hero section spans full viewport height with gradient background
    <section id="home" className="min-h-screen flex items-center justify-center py-16 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 bg-gradient-to-b from-white to-gray-100">
      <div className="container px-4 mx-auto">
        {/* Animated content container with entrance animation */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          animate="visible" // Auto-plays on page load (not scroll-triggered)
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          {/* Main headline with highlighted name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-blue-400">{personalInfo.name}</span>
          </h1>
          {/* Professional title/role */}
          <h2 className="text-2xl md:text-3xl mb-8 dark:text-gray-300 text-gray-600">
            {personalInfo.title}
          </h2>
          {/* Brief introduction paragraph */}
          <p className="text-lg md:text-xl max-w-2xl mb-10 dark:text-gray-400 text-gray-700">
            {personalInfo.description}
          </p>
          {/* Call-to-action buttons */}
          <div className="flex gap-4">
            {/* Primary CTA - Contact button */}
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              Contact Me
            </a>
            {/* Secondary CTA - Resume download/view */}
            <a
              href={personalResume}
              className="px-8 py-3 bg-transparent border border-blue-500 hover:bg-blue-500/10 text-blue-400 font-semibold rounded-md transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
