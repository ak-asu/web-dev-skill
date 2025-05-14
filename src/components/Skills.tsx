import React from 'react';
import { skills } from '../data';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const SkillLevel: React.FC<{ level: number }> = ({ level }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <div 
          key={i}
          className={`w-2 h-2 rounded-full ${i < level ? 'bg-blue-400' : 'bg-gray-600'}`}
        />
      ))}
    </div>
  );
};

const Skills: React.FC = () => {
  // Group skills by category
  const categories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    other: skills.filter(skill => skill.category === 'other')
  };

  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {Object.entries(categories).map(([category, categorySkills]) => (
            categorySkills.length > 0 && (
              <motion.div 
                key={category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold mb-4 capitalize">
                  {category}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map(skill => (
                    <div key={skill.name} className="flex items-center p-3 bg-gray-700 rounded-lg">
                      <div className="flex items-center flex-1">
                        <div className="text-2xl text-blue-400 mr-3">
                          <skill.icon />
                        </div>
                        <span>{skill.name}</span>
                      </div>
                      <SkillLevel level={skill.level} />
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
