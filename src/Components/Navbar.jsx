import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
const desktopNavItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Journey', path: '/my Journey' },
  { name: 'Contact', path: '/contact' },
];
const mobileNavItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];
const Navbar = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScrollTop(window.pageYOffset > 400);
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);
  const scrollToSection = (path, name) => {
    const section = document.querySelector(`#${CSS.escape(path)}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveTab(name);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-auto">
        <nav className="hidden md:block px-1 py-1 rounded-full bg-gradient-to-r from-blue-900/80 to-purple-900/80 backdrop-blur-lg border border-white/20 shadow-lg">
          <div className="flex items-center gap-1">
            {desktopNavItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.path, item.name)}
                className={`px-6 py-2 text-sm font-medium transition-all duration-200 rounded-full
                  ${activeTab === item.name 
                    ? 'bg-white text-gray-900 shadow-md' 
                    : 'text-white/90 hover:bg-white/10'
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </nav>
        <nav className="md:hidden px-1 py-1 rounded-full bg-gradient-to-r from-blue-900/80 to-purple-900/80 backdrop-blur-lg border border-white/20 shadow-lg">
          <div className="flex items-center gap-1">
            {mobileNavItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.path, item.name)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full
                  ${activeTab === item.name 
                    ? 'bg-white text-gray-900 shadow-md' 
                    : 'text-white/90 hover:bg-white/10'
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </nav>
      </div>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-blue-900/80 to-purple-900/80
                   text-white rounded-full shadow-lg hover:bg-white/20
                   transition-all duration-200"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default Navbar;