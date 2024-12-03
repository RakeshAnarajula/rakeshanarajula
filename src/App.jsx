import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Loader from './Components/Loader';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Myjourney from './Components/Myjourney';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Router>
      <div className="font-sans bg-gray-100 text-gray-900">
        <Navbar/>
        <div id="/" className="section">
        <Hero scrollToContact={scrollToContact}/>
        </div>
        <div id="/skills" className="section">
          <Skills />
        </div>
        <div id="/projects" className="section">
          <Projects />
        </div>
        <div id="/my Journey" className="section">
          <Myjourney />
        </div>
        <div id="/about" className="section">
        <About scrollToContact={scrollToContact} />
        </div>
        <div id="/contact" className="section" ref={contactRef}>
          <Contact />
        </div>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
