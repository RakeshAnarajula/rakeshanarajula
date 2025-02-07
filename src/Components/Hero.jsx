import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'; 
import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

const HeroSection = ({ scrollToContact }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animatedText, setAnimatedText] = useState("");
  const fullText = "Front-End Web Developer";

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= fullText.length) {
        setAnimatedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const socialLinks = [
    {
      icon: <Twitter size={24} />,
      href: "https://x.com/?lang=en&mx=2",
      color: "hover:text-blue-400"
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin",
      color: "hover:text-blue-600"
    },
    {
      icon: <Instagram size={24} />,
      href: "https://www.instagram.com/accounts/login/?hl=en",
      color: "hover:text-pink-500"
    },
    {
      icon: <Github size={24} />,
      href: "https://github.com/login",
      color: "hover:text-gray-400"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden p-5">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, window.innerHeight],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 min-h-screen flex items-center justify-center relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 text-center md:text-left space-y-4 md:space-y-5"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-yellow-200 mb-2"
            >
              Welcome to my portfolio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight whitespace-nowrap"
            >
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Rakesh Anarajula
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500">
                {animatedText}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              With over 1.8 years of experience crafting engaging digital experiences,
              I transform ideas into elegant, user-friendly websites that make an impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {['React.js', 'JavaScript', 'Tailwind CSS', 'Node js', 'Github'].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-blue-900/50 rounded-full text-blue-300 border border-blue-500/30 hover:border-blue-400 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex justify-center md:justify-start gap-4 pt-2 w-full"
            >
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-10 sm:h-12 px-4 sm:px-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all duration-300 text-sm sm:text-base flex-1 sm:flex-none"
              >
                Let's Connect
              </motion.button>
              <motion.a
                href="/Rakesh experience resume1.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-10 sm:h-12 px-4 sm:px-8 border-2 border-blue-500 rounded-full font-semibold text-blue-400 hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center text-sm sm:text-base flex-1 sm:flex-none"
              >
                View Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex gap-6 justify-center md:justify-start pt-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className={`${social.color} transform transition-all duration-300 hover:shadow-lg p-2 rounded-full bg-gray-800/50 hover:bg-gray-800`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 relative w-full pt-16 md:pt-0 px-6 sm:px-10 md:px-0"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              animate={{
                rotateX: mousePosition.y * 0.1,
                rotateY: mousePosition.x * 0.1,
              }}
              transition={{ type: "spring", stiffness: 75, damping: 15 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] mx-auto"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-2xl animate-pulse" />
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-blue-500/20 ring-offset-4 ring-offset-gray-900"
              >
                <img
                  src="/rakesh image1.png"
                  alt="Rakesh Anarajula"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  scrollToContact: PropTypes.func.isRequired, // Validate that scrollToContact is a required function
};

export default HeroSection;