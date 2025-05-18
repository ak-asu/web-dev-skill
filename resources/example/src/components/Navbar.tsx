import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/useTheme';
import { HiMoon, HiSun } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


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
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg'
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
            <span className="text-blue-500 dark:text-blue-400">Portfolio</span>
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
              className='p-2 rounded-full items-center bg-transparent'
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <HiSun className="text-yellow-400" />
              ) : (
                <HiMoon className="text-gray-500" />
              )}
            </button>
          </div>
          {/* Mobile Menu Toggle Button - visible only on mobile */}
          <button
            className="md:hidden bg-transparent dark:text-gray-300 text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Dynamic icon changes between hamburger and close X based on menu state */}
            {isMobileMenuOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <AiOutlineMenu className="w-6 h-6" />
            )}
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
              className='p-0 items-center bg-transparent border-0'
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <span className="text-yellow-400">Light</span>
              ) : (
                <span className="text-gray-500">Dark</span>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
