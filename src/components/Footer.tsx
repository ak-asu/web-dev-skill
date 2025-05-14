import React from 'react';
import { personalInfo } from '../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">
              <span className="text-blue-400">Dev</span>Portfolio
            </h3>
            <p className="text-gray-400 mt-2">
              Building modern web experiences
            </p>
          </div>
          
          <div className="flex gap-4">
            {personalInfo.socials.map(social => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-gray-800 hover:bg-blue-500 text-white rounded-full transition-colors"
                aria-label={social.name}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
        
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
