import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/useTheme';


// Navigation links for the website
// Each link corresponds to a section in the page with matching id
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
  // State to track if user has scrolled down to change navbar style
  const [isScrolled, setIsScrolled] = useState(false);
  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Access theme context
  const { theme, toggleTheme } = useTheme();

  // Effect to add scroll event listener for navbar style changes
  useEffect(() => {
    // Handler to detect scroll position and update state
    const handleScroll = () => {
      // Apply different styling when scrolled down past 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // Register and cleanup scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav      // Dynamic classes based on scroll position and theme - transparent at top, solid with blur when scrolled
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? theme === 'dark'
          ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg'
          : 'bg-white/90 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
        }`}
      // Initial animation from off-screen
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/home link */}
          <a href="#home" className="text-xl md:text-2xl font-bold dark:text-white text-gray-900 mr-4">
            <span className="text-blue-400">Portfolio</span>
          </a>{/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="dark:text-gray-300 text-gray-700 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
          {/* Mobile Menu Toggle Button - visible only on mobile */}
          <button
            className="md:hidden dark:text-gray-300 text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Dynamic icon changes between hamburger and close X based on menu state */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu - animated dropdown visible only on mobile when toggled */}
      <motion.div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        // Animation for expanding/collapsing menu
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-4 space-y-2 dark:bg-gray-800 bg-gray-100 dark:border-gray-700 border-gray-200 border-t">
          {/* Mobile navigation links - closes menu when clicked */}
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 dark:text-gray-300 text-gray-700 hover:text-blue-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {/* Theme toggle in mobile menu */}
          <div className="flex items-center py-2">
            <button
              onClick={toggleTheme}
              className={`flex items-center transition-colors ${theme === 'dark' ? 'text-yellow-300 hover:text-yellow-400' : 'text-gray-700 hover:text-gray-900'}`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <>
                  <span className="mr-2 text-yellow-300"><i className="react-icons/hi HiSun" /></span>
                  Light Mode
                </>
              ) : (
                <>
                  <span className="mr-2 text-gray-600"><i className="react-icons/hi HiMoon" /></span>
                  Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
