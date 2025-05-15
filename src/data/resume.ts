
// Import JSON data
import experienceData from './json/experience.json';
import educationData from './json/education.json';
import certificationsData from './json/certifications.json';
import achievementsData from './json/achievements.json';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  courses?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: 'trophy' | 'medal' | 'award' | 'certificate';
}

// Use type assertion to match the expected type for icon property
export const experiences: ExperienceItem[] = experienceData;
export const educationItems: EducationItem[] = educationData;
export const certifications: Certification[] = certificationsData;
export const achievements: Achievement[] = achievementsData.map(achievement => ({
  ...achievement,
  icon: achievement.icon as 'trophy' | 'medal' | 'award' | 'certificate'
}));
