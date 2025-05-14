import type { PersonalInfo, Project, Skill, Social } from '../types';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiVite, 
  SiNodedotjs, 
  SiExpress, 
  SiTailwindcss, 
  SiGit, 
  SiDocker, 
  SiMongodb 
} from 'react-icons/si';

// Social media links
export const socials: Social[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: FaGithub
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: FaLinkedin
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: FaTwitter
  }
];

// Personal information
export const personalInfo: PersonalInfo = {
  name: 'John Doe',
  title: 'Full Stack Developer',
  description: 'Passionate web developer with a strong focus on creating responsive, accessible, and performant web applications. I enjoy working with modern technologies and continuously learning new skills to improve my craft.',
  location: 'Phoenix, AZ',
  email: 'contact@johndoe.com',
  socials: socials,
  resumeUrl: '/resume.pdf'
};

// Projects
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment processing.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    imageUrl: 'https://via.placeholder.com/600x400',
    demoUrl: 'https://demo-ecommerce.example.com',
    sourceUrl: 'https://github.com/yourusername/ecommerce-platform'
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, organizing projects, and tracking progress with a clean, intuitive interface.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    imageUrl: 'https://via.placeholder.com/600x400',
    demoUrl: 'https://tasks-app.example.com',
    sourceUrl: 'https://github.com/yourusername/task-manager'
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description: 'A weather application that displays current conditions and forecasts using data from a weather API with location-based searches.',
    technologies: ['JavaScript', 'HTML/CSS', 'OpenWeather API'],
    imageUrl: 'https://via.placeholder.com/600x400',
    demoUrl: 'https://weather.example.com',
    sourceUrl: 'https://github.com/yourusername/weather-app'
  }
];

// Skills
export const skills: Skill[] = [
  {
    name: 'HTML5',
    icon: SiHtml5,
    level: 5,
    category: 'frontend'
  },
  {
    name: 'CSS3',
    icon: SiCss3,
    level: 5,
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    level: 5,
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    level: 4,
    category: 'frontend'
  },
  {
    name: 'React',
    icon: SiReact,
    level: 4,
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    level: 4,
    category: 'frontend'
  },
  {
    name: 'Vite',
    icon: SiVite,
    level: 3,
    category: 'tools'
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    level: 4,
    category: 'backend'
  },
  {
    name: 'Express',
    icon: SiExpress,
    level: 4,
    category: 'backend'
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    level: 3,
    category: 'backend'
  },
  {
    name: 'Git',
    icon: SiGit,
    level: 4,
    category: 'tools'
  },
  {
    name: 'Docker',
    icon: SiDocker,
    level: 3,
    category: 'tools'
  }
];
