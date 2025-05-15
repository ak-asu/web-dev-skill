import React from 'react';
import { personalInfo } from '../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-2">
            Built with React, TypeScript, Tailwind CSS, and Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
