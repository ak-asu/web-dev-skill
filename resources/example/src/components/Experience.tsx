import React from 'react';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { experiences } from '../data';


// Animation variant for fade-in effect used throughout the component
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section heading with animation */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 md:pl-0">
            {/* Vertical timeline line - visible only on medium screens and up */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 shadow-lg shadow-blue-500/20"></div>
            {/* Map through each experience to create timeline entries */}
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                // Alternating layout on medium screens (zigzag pattern)
                className={`mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} relative`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                {/* Timeline dot and connector - central decoration elements */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-8 z-10">
                  {/* The dot with pulse effect */}
                  <div className="w-6 h-6 rounded-full bg-blue-400 dark:bg-blue-500 border-4 border-white dark:border-gray-900 shadow-lg shadow-blue-500/50 relative">
                    {/* Inner glow/pulse animation effect */}
                    <div className="absolute inset-0 rounded-full bg-blue-500 dark:bg-blue-400 animate-ping opacity-30"></div>
                  </div>
                  {/* Horizontal connector line - direction changes based on alternate layout */}
                  <div className={`absolute top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r ${index % 2 === 0
                    ? 'left-6 w-10 from-blue-500 to-gray-700'
                    : 'right-6 w-10 from-gray-700 to-blue-500'
                    }`}>
                  </div>
                </div>
                {/* Experience content card - takes half width on medium screens */}
                <div className="md:w-1/2 md:px-8">
                  <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg relative">
                    {/* Role and company information */}
                    <h3 className="text-xl font-bold mb-1 text-blue-500 dark:text-blue-400">{exp.role}</h3>
                    <div className="flex items-center mb-2">
                      <FaBuilding className="mr-2 text-gray-500 dark:text-gray-400" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    {/* Location and time period metadata */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    {/* Job responsibility descriptions as bullet points */}
                    <ul className="mb-4 space-y-2 text-gray-600 dark:text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Technologies used during this role */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-blue-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Empty div for the alternating layout - takes up the other half of the space */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;