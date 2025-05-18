import type { PersonalInfo, Project, Skill, Social, EducationItem,
  ExperienceItem, Certification, Achievement } from '../types';
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

import skillsData from './json/skills.json';
import projectsData from './json/projects.json';
import personalInfoData from './json/personal-info.json';
import socialsData from './json/socials.json';
import experienceData from './json/experience.json';
import educationData from './json/education.json';
import certificationsData from './json/certifications.json';
import achievementsData from './json/achievements.json';

// Icon mapping for dynamic import
const iconMapping = {
  // React icons fa
  FaGithub,
  FaLinkedin,
  FaTwitter,
  // React icons si
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
};

// Define a type for valid icon names
type IconName = keyof typeof iconMapping;

// Define a type for valid skill categories based on Skill type
type SkillCategory = "frontend" | "tools" | "backend" | "other";

// Social media links
export const socials: Social[] = socialsData.map(social => ({
  name: social.name,
  url: social.url,
  icon: iconMapping[social.iconName as IconName]
}));

// Personal information
export const personalInfo: PersonalInfo = {
  ...personalInfoData,
  socials
};

// Projects
export const projects: Project[] = projectsData;

// Skills
export const skills: Skill[] = skillsData.map(skill => ({
  name: skill.name,
  icon: iconMapping[skill.iconName as IconName],
  level: skill.level,
  category: skill.category as SkillCategory
}));

// Use type assertion to match the expected type for icon property
export const experiences: ExperienceItem[] = experienceData;
export const educationItems: EducationItem[] = educationData;
export const certifications: Certification[] = certificationsData;
export const achievements: Achievement[] = achievementsData.map(achievement => ({
  ...achievement,
  icon: achievement.icon as 'trophy' | 'medal' | 'award' | 'certificate'
}));
