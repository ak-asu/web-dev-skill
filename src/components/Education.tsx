import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { educationItems, certifications } from '../data/resume';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My academic background and continuous learning journey.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">          {educationItems.map((edu) => (
            <motion.div 
              key={edu.id}
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-500/20 text-blue-400 rounded-full mr-3">
                      <FaGraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">{edu.degree}</h3>
                      <div className="flex items-center">
                        <FaUniversity className="mr-1 text-gray-400" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-1" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2 text-white">Achievements</h4>
                    <ul className="space-y-1 text-gray-300">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex">
                          <span className="mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {edu.courses && (
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-white">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map(course => (
                          <span 
                            key={course}
                            className="px-3 py-1 bg-gray-600 text-blue-300 text-xs rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map(cert => (
              <div 
                key={cert.id}
                className="bg-gray-700 p-5 rounded-lg shadow-lg border border-gray-600"
              >
                <h4 className="font-semibold text-blue-400 mb-2">{cert.name}</h4>
                <p className="text-gray-300 mb-1">Issuer: {cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-2">Date: {cert.date}</p>
                <p className="text-gray-400 text-xs">Credential ID: {cert.credentialId}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;