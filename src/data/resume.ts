
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
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: 'trophy' | 'medal' | 'award' | 'certificate';
}

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    location: 'Phoenix, AZ',
    period: 'January 2023 - Present',
    description: [
      'Led a team of 5 developers to build a responsive dashboard application using React and TypeScript',
      'Implemented state management with Redux Toolkit, reducing code complexity by 30%',
      'Established code quality standards with ESLint and Jest, achieving 90% test coverage',
      'Collaborated with UX designers to implement an accessible UI system using Tailwind CSS'
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'Jest', 'CI/CD']
  },
  {
    id: 'exp-2',
    role: 'Frontend Developer',
    company: 'Digital Innovations',
    location: 'Remote',
    period: 'June 2020 - December 2022',
    description: [
      'Developed and maintained multiple client websites using React and Next.js',
      'Built reusable component libraries that reduced development time by 40%',
      'Optimized site performance, improving Lighthouse scores by an average of 25 points',
      'Integrated third-party APIs for payment processing and user authentication'
    ],
    technologies: ['React', 'Next.js', 'JavaScript', 'SCSS', 'REST APIs', 'Firebase']
  },
  {
    id: 'exp-3',
    role: 'Web Developer Intern',
    company: 'StartUp Hub',
    location: 'Tempe, AZ',
    period: 'January 2020 - May 2020',
    description: [
      'Assisted in developing landing pages and marketing sites for early-stage startups',
      'Gained experience with modern JavaScript frameworks and responsive design principles',
      'Participated in daily stand-ups and agile development processes',
      'Contributed to open-source projects to improve coding skills'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git', 'WordPress']
  }
];

export const educationItems: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Master of Science in Computer Science',
    institution: 'Arizona State University',
    location: 'Tempe, AZ',
    period: 'August 2018 - May 2020',
    description: 'Specialized in Web Technologies and Software Engineering with a focus on modern frontend frameworks and distributed systems.',
    achievements: [
      'GPA: 3.9/4.0',
      'Graduate Teaching Assistant for Web Development courses',
      'President of the Computer Science Graduate Student Association'
    ],
    courses: [
      'Advanced Web Development',
      'Distributed Systems Architecture',
      'Cloud Computing',
      'User Experience Design',
      'Software Project Management',
      'Machine Learning Fundamentals'
    ]
  },
  {
    id: 'edu-2',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Arizona',
    location: 'Tucson, AZ',
    period: 'August 2014 - May 2018',
    description: 'Foundational education in computer science with a minor in Mathematics.',
    achievements: [
      'GPA: 3.7/4.0',
      'Dean\'s List all semesters',
      'Undergraduate Research Assistant in Human-Computer Interaction Lab'
    ],
    courses: [
      'Data Structures and Algorithms',
      'Database Management Systems',
      'Web Application Development',
      'Object-Oriented Programming',
      'Computer Networks',
      'Operating Systems'
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'January 2023',
    credentialId: 'AWS-ASA-12345'
  },
  {
    id: 'cert-2',
    name: 'Professional Front-End Developer Certification',
    issuer: 'Meta',
    date: 'June 2022',
    credentialId: 'META-FED-67890'
  },
  {
    id: 'cert-3',
    name: 'React Native Specialization',
    issuer: 'Coursera',
    date: 'March 2021',
    credentialId: 'COURSERA-RN-54321'
  }
];

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Best Web Application Award',
    organization: 'Arizona Web Development Conference',
    date: 'November 2023',
    description: 'Received first place award for developing an innovative accessibility-focused web application that helps visually impaired users navigate complex websites.',
    icon: 'trophy'
  },
  {
    id: 'ach-2',
    title: 'Hackathon Winner',
    organization: 'TechInnovate Hackathon',
    date: 'May 2023',
    description: 'Led a team of four developers to create a real-time collaboration tool that won first place among 50+ competing teams.',
    icon: 'medal'
  },
  {
    id: 'ach-3',
    title: 'Open Source Contributor Recognition',
    organization: 'React Community',
    date: 'March 2022 - Present',
    description: 'Recognized for significant contributions to React ecosystem projects, with over 50 merged pull requests and 10+ issues resolved.',
    icon: 'award'
  },
  {
    id: 'ach-4',
    title: 'Published Technical Article',
    organization: 'Web Development Journal',
    date: 'January 2022',
    description: 'Authored a technical article on modern state management techniques in React applications, which has been cited in multiple educational resources.',
    icon: 'certificate'
  },
  {
    id: 'ach-5',
    title: 'Community Mentor Award',
    organization: 'Local Coding Bootcamp',
    date: 'August 2021',
    description: 'Recognized for exceptional mentorship provided to junior developers, helping them transition successfully into tech careers.',
    icon: 'award'
  }
];
