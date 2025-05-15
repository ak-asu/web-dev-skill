import React, { useState } from 'react';
import { skills } from '../data';
import { motion } from 'framer-motion';
import './Skills.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Skills: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Flatten all skills into a single array
  const allSkills = [...skills];
  
  // Category-based border colors
  const categoryColors = {
    frontend: 'border-blue-400',
    backend: 'border-green-400',
    tools: 'border-yellow-400',
    other: 'border-purple-400'
  };
  
  return (
    <section id="skills" className="py-20 bg-gray-800 text-white flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            These are the technologies and tools I work with to build web applications.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="max-w-full mx-auto overflow-hidden flex items-center"
        >
          <div 
            className="skill-carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`skill-carousel ${isPaused ? 'paused' : ''}`}>
              {/* First set of skills */}
              {allSkills.map((skill, index) => (
                <div key={`skill-1-${index}`} className="skill-item">
                  <div className={`skill-icon-container border-2 ${categoryColors[skill.category] || 'border-gray-400'}`}>
                    <skill.icon />
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
              {/* Duplicate skills to create infinite scrolling effect */}
              {allSkills.map((skill, index) => (
                <div key={`skill-2-${index}`} className="skill-item">
                  <div className={`skill-icon-container border-2 ${categoryColors[skill.category] || 'border-gray-400'}`}>
                    <skill.icon />
                  </div>
                  <span className="skill-name">{skill.name}</span>
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
