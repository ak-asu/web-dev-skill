import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { projects } from '../data';
import type { Project as ProjectType } from '../types';


// Define props interface for the project card component
interface ProjectCardProps {
  project: ProjectType;
  index: number; // Used for staggered animation
}

// Individual project card component with animation and interactive elements
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-300 dark:border-gray-600 hover:border-blue-500/30"
      custom={index} // Pass index to animation variants for staggered effect
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        // Animation variants with delay based on item index for staggered entrance
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1, // Stagger effect based on index
            duration: 0.5
          }
        })
      }}
    >
      {/* Project image container with hover effect */}
      <div className="overflow-hidden h-52 relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 border-t border-gray-300/50 dark:border-gray-600/50">
        {/* Project title and description */}
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-4">{project.description}</p>
        {/* Technologies used in the project */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-200/80 dark:bg-gray-800/80 text-blue-600 dark:text-blue-300 text-sm rounded-full border border-blue-500/20 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* External links to source code and live demo */}
        <div className="flex gap-4 pt-2 border-t border-gray-300/30 dark:border-gray-600/30">
          {/* Conditional rendering for GitHub link if available */}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors py-1 px-2 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 rounded"
            >
              <FaGithub className="text-lg" /> <span>Code</span>
            </a>
          )}
          {/* Conditional rendering for demo link if available */}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors py-1 px-2 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 rounded"
            >
              <FaExternalLinkAlt className="text-lg" /> <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Main Projects section component
const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section heading with fade-in animation */}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one demonstrates different skills and technologies.
          </p>
        </motion.div>
        {/* Responsive grid layout for project cards */}
        {/* Adjusts columns based on screen size: 1 column on mobile, 2 on medium, 3 on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
