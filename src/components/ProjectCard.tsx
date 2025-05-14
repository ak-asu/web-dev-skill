import React from 'react';
import type { Project as ProjectType } from '../types';
import { motion } from 'framer-motion';
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
      className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      <div className="overflow-hidden h-48">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-600 text-blue-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.sourceUrl && (
            <a 
              href={project.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
