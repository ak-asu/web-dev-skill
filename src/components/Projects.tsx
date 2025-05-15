import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import type { Project as ProjectType } from '../types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  project: ProjectType;
  index: number;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-600 hover:border-blue-500/30"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="overflow-hidden h-52 relative">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 border-t border-gray-600/50">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map(tech => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-800/80 text-blue-300 text-sm rounded-full border border-blue-500/20 hover:bg-gray-700 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-2 border-t border-gray-600/30">
          {project.sourceUrl && (
            <a 
              href={project.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors py-1 px-2 hover:bg-gray-800/50 rounded"
            >
              <FaGithub className="text-lg" /> <span>Code</span>
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors py-1 px-2 hover:bg-gray-800/50 rounded"
            >
              <FaExternalLinkAlt className="text-lg" /> <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one demonstrates different skills and technologies.
          </p>
        </motion.div>
        
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
