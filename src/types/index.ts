import type { IconType } from 'react-icons';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  sourceUrl?: string;
}

export interface Skill {
  name: string;
  icon: IconType;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface Social {
  name: string;
  url: string;
  icon: IconType;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  socials: Social[];
  resumeUrl?: string;
}
