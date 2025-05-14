import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Testimonials', path: '/testimonials' },
  { title: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary-600 dark:text-primary-400">
            <Zap className="h-6 w-6" />
            <span>PostChef</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                location.pathname === link.path 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          <button
            onClick={toggleMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 md:hidden dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white/95 backdrop-blur-sm dark:bg-gray-900/95 md:hidden">
          <div className="container p-4">
            <div className="rounded-lg bg-gray-50 p-2 dark:bg-gray-800">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`mb-2 block rounded-lg px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    location.pathname === link.path 
                      ? 'text-primary-600 dark:text-primary-400' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}