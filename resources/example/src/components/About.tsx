import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import personalImage from '../assets/profileimage.jpg';


const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          {/* Section heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          {/* Two-column layout for profile image and text */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Left column - Profile image */}
            <div className="md:w-1/3">
              {/* Circular profile image with blue border */}
              <div className="w-60 h-60 mx-auto rounded-full overflow-hidden border-4 border-blue-400 dark:border-blue-500">
                <img
                  src={personalImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Right column - About text and info badges */}
            <div className="md:w-2/3">
              {/* First paragraph - Professional summary */}
              <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
                I'm a passionate web developer with expertise in building modern, responsive, and accessible web applications. My journey in web development started 5 years ago, and I've been continuously learning and improving my skills since then. I'm committed to writing clean, maintainable code, following best practices in accessibility, performance, and UX design, and collaborating closely with cross-functional teams to deliver exceptional digital experiences.
              </p>
              {/* Second paragraph - Technical skills summary */}
              <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
                I specialize in front-end development using React and TypeScript, with a strong foundation in HTML, CSS, and JavaScript. I also have experience with back-end technologies like Node.js and Express, and I've built full-stack applications integrating RESTful APIs, GraphQL, and MongoDB. Additionally, I've worked on implementing CI/CD pipelines, writing unit and integration tests, and optimizing applications for SEO and performance.
              </p>
              {/* Info badges - Location and availability */}
              <div className="flex flex-wrap gap-3">
                {/* Location badge */}
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <span className="text-blue-500 dark:text-blue-400">📍</span> {personalInfo.location}
                </div>
                {/* Availability badge */}
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <span className="text-blue-500 dark:text-blue-400">💼</span> Available for freelance
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
