import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp, Menu, X } from 'lucide-react';
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'My Journey', path: '/my Journey' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScrollTop(window.pageYOffset > 400);
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToSection = (path) => {
    const section = document.querySelector(`#${CSS.escape(path)}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <nav className="bg-gray-900 shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div
              className="flex items-center cursor-pointer text-2xl font-bold text-white"
              onClick={() => scrollToSection('/')}
            >
              Rakesh Anarajula
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-8">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.path)}
                      className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-violet-900 transition duration-300"
                    >
                      {item.name}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div ref={menuRef} className="lg:hidden bg-gray-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.path);
                    setIsOpen(false);
                  }}
                  className="block px-3 py-2 rounded-full text-base font-medium text-white hover:bg-violet-900 transition duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-blue-700 text-white rounded-full shadow-lg z-50 hover:bg-blue-900 transition duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default Navbar;
