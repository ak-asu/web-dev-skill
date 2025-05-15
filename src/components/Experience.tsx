import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { experiences } from '../data/resume';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 md:pl-0">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                className={`mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <div className="md:w-1/2 md:px-8">
                  <div className="p-6 bg-gray-800 rounded-lg shadow-lg relative">
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute top-8 left-0 md:left-auto transform md:translate-x-1/2 
                      md:-translate-x-16 md:translate-y-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-gray-900
                      z-10"></div>
                    
                    {/* Role and company */}
                    <h3 className="text-xl font-bold mb-1 text-blue-400">{exp.role}</h3>
                    <div className="flex items-center mb-2">
                      <FaBuilding className="mr-2 text-gray-400" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    
                    {/* Location and period */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    {/* Job description */}
                    <ul className="mb-4 space-y-2 text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Technologies used */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map(tech => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-gray-700 text-blue-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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