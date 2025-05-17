import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaCertificate } from 'react-icons/fa';
import { achievements as achievementData } from '../data';


// Helper function to get the appropriate icon based on achievement type
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

// Animation variants for achievement cards
const cardVariants = {
  // Initial hidden state
  hidden: { opacity: 0, scale: 0.9 },
  // Visible state when in viewport
  visible: {
    opacity: 1,
    scale: 1,
  },
  // Hover state animation
  hover: {
    scale: 1.03,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
  },
  // Animation when card is tapped/clicked
  tap: {
    scale: 0.98,
  },
  // Special celebration animation
  celebrate: {
    rotate: [0, 1, -1, 1, 0],
    transition: { duration: 1 },
  }
};

// Animation variants for confetti particles
const confettiVariants = {
  // Initial hidden state
  hidden: { opacity: 0, scale: 0, rotate: 0 },
  // Complex animation sequence for confetti effect
  visible: {
    opacity: [0, 1, 0.8, 0], // Fade in then out
    scale: [0, 1.2, 0.8, 0],  // Grow then shrink
    rotate: [0, Math.random() * 360], // Random rotation
    y: [0, Math.random() * -100], // Float upward randomly
    x: [0, Math.random() * 100 - 50], // Move sideways randomly
    transition: { duration: 2, ease: "easeOut" }
  }
};

// Helper function to generate different confetti shapes
const getConfettiShape = (index: number) => {
  switch (index % 2) {
    case 0: return "rounded-full"; // Circle
    case 1: return "rounded-sm rotate-45"; // Diamond/Square
    default: return "rounded-full";
  }
};

// Function to get card styling based on achievement type
const getCardStyle = (icon: string) => {
  switch (icon) {
    case 'trophy':
      return "border-yellow-500";
    case 'medal':
      return "border-blue-400";
    case 'award':
      return "border-purple-500";
    case 'certificate':
      return "border-green-400";
    default:
      return "border-gray-600";
  }
};

const Achievements: React.FC = () => {
  const [celebrating, setCelebrating] = useState<string | null>(null);

  const handleCelebration = (id: string) => {
    setCelebrating(id);
    setTimeout(() => setCelebrating(null), 1200);
  };

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Recognition</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                whileHover={{
                  scale: [1, 1.05],
                }}
                whileTap="tap"
                animate={celebrating === achievement.id ? "celebrate" : "visible"}
                onClick={() => handleCelebration(achievement.id)}
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className={`bg-gradient-to-br from-gray-100 to-white dark:from-gray-700 dark:to-gray-900 ${getCardStyle(achievement.icon)} rounded-lg overflow-hidden shadow-lg border-2 h-full flex flex-col transform transition-all cursor-pointer relative`}
              >
                {celebrating === achievement.id && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                    {[...Array(30)].map((_, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        className={`absolute ${getConfettiShape(i)} ${i % 5 === 0 ? "bg-yellow-600 dark:bg-yellow-300" :
                          i % 5 === 1 ? "bg-blue-600 dark:bg-blue-300" :
                            i % 5 === 2 ? "bg-purple-600 dark:bg-purple-300" :
                              i % 5 === 3 ? "bg-green-600 dark:bg-green-300" :
                                "bg-pink-600 dark:bg-pink-300"
                          }`}
                        style={{
                          width: `${Math.random() * 10 + 6}px`,
                          height: `${Math.random() * 10 + 6}px`,
                          top: `${Math.random() * 80 + 10}%`,
                          left: `${Math.random() * 80 + 10}%`,
                        }}
                        initial="hidden"
                        animate="visible"
                        variants={confettiVariants}
                      />
                    ))}
                  </div>
                )}
                <div className="p-6 flex-grow backdrop-blur-sm backdrop-filter">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full mr-4
                      ${achievement.icon === 'trophy' ? 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-300' :
                        achievement.icon === 'medal' ? 'bg-blue-500/20 text-blue-600 dark:text-blue-300' :
                          achievement.icon === 'award' ? 'bg-purple-500/20 text-purple-600 dark:text-purple-300' :
                            'bg-green-500/20 text-green-600 dark:text-green-300'}`}>
                      {getIcon(achievement.icon, 'text-2xl')}
                    </div>
                    <h3 className="text-md font-bold">{achievement.title}</h3>
                  </div>
                  <div className="mb-3 text-sm">
                    <p className="text-gray-600 dark:text-gray-300">{achievement.organization}</p>
                    <p className="text-gray-500 dark:text-gray-400">{achievement.date}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
                </div>
                <div className={`h-1 w-full 
                  ${achievement.icon === 'trophy' ? 'bg-gradient-to-r from-yellow-600 to-yellow-300' :
                    achievement.icon === 'medal' ? 'bg-gradient-to-r from-gray-400 to-gray-300' :
                      achievement.icon === 'award' ? 'bg-gradient-to-r from-amber-700 to-amber-500' :
                        'bg-gradient-to-r from-green-600 to-green-400'}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;