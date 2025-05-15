import React from 'react';
import { personalInfo } from '../data';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3">
              <div className="w-60 h-60 mx-auto rounded-full overflow-hidden border-4 border-blue-500">
                <img
                  src="https://placehold.co/400x400"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-6 leading-relaxed text-gray-300">
                I'm a passionate web developer with expertise in building modern, responsive, and accessible web applications. My journey in web development started 5 years ago, and I've been continuously learning and improving my skills since then. I'm committed to writing clean, maintainable code, following best practices in accessibility, performance, and UX design, and collaborating closely with cross-functional teams to deliver exceptional digital experiences.
              </p>
              <p className="text-lg mb-6 leading-relaxed text-gray-300">
                I specialize in front-end development using React and TypeScript, with a strong foundation in HTML, CSS, and JavaScript. I also have experience with back-end technologies like Node.js and Express, and I've built full-stack applications integrating RESTful APIs, GraphQL, and MongoDB. Additionally, I’ve worked on implementing CI/CD pipelines, writing unit and integration tests, and optimizing applications for SEO and performance.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-full">
                  <span className="text-blue-400">📍</span> {personalInfo.location}
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-full">
                  <span className="text-blue-400">💼</span> Available for freelance
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
