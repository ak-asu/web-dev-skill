import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';
import { achievements as achievementData } from '../data/resume';

const getIcon = (iconType: 'trophy' | 'medal' | 'award' | 'certificate', className: string = '') => {
  switch (iconType) {
    case 'trophy':
      return <FaTrophy className={className} />;
    case 'medal':
      return <FaMedal className={className} />;
    case 'award':
      return <FaAward className={className} />;
    case 'certificate':
      return <FaCertificate className={className} />;
    default:
      return <FaAward className={className} />;
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Recognition</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Milestones and acknowledgements received throughout my professional journey.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementData.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg border border-gray-700 h-full flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">                    <div className={`w-12 h-12 flex items-center justify-center rounded-full mr-4 
                      ${achievement.icon === 'trophy' ? 'bg-yellow-500/20 text-yellow-400' : 
                        achievement.icon === 'medal' ? 'bg-blue-500/20 text-blue-400' : 
                        achievement.icon === 'award' ? 'bg-purple-500/20 text-purple-400' : 
                        'bg-green-500/20 text-green-400'}`}>
                      {getIcon(achievement.icon, 'text-2xl')}
                    </div>
                    <h3 className="text-lg font-bold">{achievement.title}</h3>
                  </div>
                  
                  <div className="mb-3 text-sm">
                    <p className="text-gray-300">{achievement.organization}</p>
                    <p className="text-gray-400">{achievement.date}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;