import React from 'react';
import { personalInfo } from '../data';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-gray-900 bg-gray-100 dark:text-white text-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="border-t dark:border-gray-800 border-gray-200 mt-8 pt-6 text-center dark:text-gray-400 text-gray-600 text-sm">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-2">
            Built with React, TypeScript, Tailwind CSS and Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
