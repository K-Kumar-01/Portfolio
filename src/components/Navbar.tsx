import React from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-gray-900 dark:text-white">
              Kushal Kumar
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              About
            </a>
            <a href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Experience
            </a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Projects
            </a>
            <a href="#blog" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Blog
            </a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Contact
            </a>
            
            <div className="flex items-center space-x-4">
              <a href="https://github.com/k-kumar-01" target="_blank" rel="noopener noreferrer" 
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/kushal-kumar-979575170" target="_blank" rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:kushalkumargupta4@example.com"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
              <button 
                onClick={toggleTheme} 
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
            <a href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              About
            </a>
            <a href="#experience" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Experience
            </a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Projects
            </a>
            <a href="#blog" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Blog
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}