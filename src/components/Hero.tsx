import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';


const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container px-4 mx-auto">
        <motion.div
          className="flex flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-blue-400">{personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
            {personalInfo.title}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mb-10 text-gray-400">
            {personalInfo.description}
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors"
            >
              Contact Me
            </a>
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                className="px-8 py-3 bg-transparent border border-blue-500 hover:bg-blue-500/10 text-blue-400 font-semibold rounded-md transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
