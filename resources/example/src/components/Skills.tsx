import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

// Custom animations that can't be handled directly by Tailwind
// These styles define the infinite scrolling animation for the skills carousel
const customStyles = {
  skillCarousel: {
    animation: 'scroll 40s linear infinite',
  },
  skillCarouselPaused: {
    animationPlayState: 'paused',
  },
  '@keyframes scroll': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(-50%)',
    },
  },
};

// Add keyframes to document
// This function dynamically injects CSS animation keyframes when the component mounts
// This approach is used instead of static CSS to ensure the animations work with SSR
const createKeyframes = () => {
  if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(styleSheet);
  }
};

// Animation variant for the fade-in effect used throughout the component
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Skills: React.FC = () => {  // State to control whether the carousel animation is paused (on hover)
  const [isPaused, setIsPaused] = useState(false);

  // Create keyframes when component mounts
  // This ensures the animation styles are added to the document once the component is rendered
  React.useEffect(() => {
    createKeyframes();
  }, []);

  // Flatten all skills into a single array for rendering in the carousel
  const allSkills = [...skills];

  // Define different border colors based on skill category
  // This creates visual distinction between different types of skills
  const categoryColors = {
    frontend: 'border-blue-400',
    backend: 'border-green-400',
    tools: 'border-yellow-400',
    other: 'border-purple-400'
  };

  return (
    <section id="skills" className="py-20 dark:bg-gray-800 bg-gray-100 dark:text-white text-gray-800 flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Section heading with fade-in animation */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            These are the technologies and tools I work with to build web applications.
          </p>
        </motion.div>
        {/* Skills carousel container with fade-in animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-full mx-auto overflow-hidden flex items-center"
        >
          {/* Outer container with mouse event handlers to pause animation on hover */}
          <div
            className="w-full overflow-hidden py-6 flex items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Inner container with the scrolling animation applied */}
            <div
              className="flex w-fit items-center"
              style={{
                ...customStyles.skillCarousel,
                ...(isPaused ? customStyles.skillCarouselPaused : {})
              }}
            >
              {/* First set of skills for continuous scrolling effect */}
              {allSkills.map((skill, index) => (
                <div key={`skill-1-${index}`} className="flex flex-col items-center mx-5 relative group">
                  <div className={`w-[60px] h-[60px] rounded-full dark:bg-gray-800 bg-white flex items-center justify-center text-2xl text-blue-500 dark:text-blue-400 transition-all duration-300 border-2 ${categoryColors[skill.category] || 'border-gray-400'} group-hover:-translate-y-2 group-hover:shadow-lg`}>
                    <skill.icon />
                  </div>
                  <span className="text-sm opacity-0 absolute top-full whitespace-nowrap transition-opacity duration-200 dark:text-white text-gray-900 dark:bg-opacity-90 bg-opacity-90 px-2 py-0.5 rounded pointer-events-none group-hover:opacity-100">
                    {skill.name}
                  </span>
                </div>
              ))}
              {/* Second set of identical skills to create the infinite scrolling effect */}
              {allSkills.map((skill, index) => (
                <div key={`skill-2-${index}`} className="flex flex-col items-center mx-5 relative group">
                  <div className={`w-[60px] h-[60px] rounded-full dark:bg-gray-800 bg-white flex items-center justify-center text-2xl text-blue-500 dark:text-blue-400 transition-all duration-300 border-2 ${categoryColors[skill.category] || 'border-gray-400'} group-hover:-translate-y-2 group-hover:shadow-lg`}>
                    <skill.icon />
                  </div>
                  <span className="text-sm opacity-0 absolute top-full whitespace-nowrap transition-opacity duration-200 dark:text-white text-gray-900 dark:bg-opacity-90 bg-opacity-90 px-2 py-0.5 rounded pointer-events-none group-hover:opacity-100">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
