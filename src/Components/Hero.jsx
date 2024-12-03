import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';
const About = ({ scrollToContact }) => {
  const [animatedText, setAnimatedText] = useState("");
  const fullText = "Front-End Web Developer";
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
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden pt-20">
      <div className="container mx-auto px-6 md:px-10 flex flex-col-reverse md:flex-row items-center relative z-10">
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-10 pl-6 md:pl-20 pt-10">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Hi, It's Me
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-2xl lg:text-2xl mb-6"
          >
            <span className="text-white font-semibold">Rakesh Anarajula</span>{" "}
            <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-yellow-500 to-blue-500">
              {animatedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 leading-relaxed"
          >
            I'm a passionate Front-End Web Developer with over 1.5 years of experience in building user-friendly and visually appealing websites. I specialize in creating responsive, interactive, and seamless experiences that elevate user engagement and enhance business outcomes.
          </motion.p>
          <motion.button
            onClick={scrollToContact}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Let's Connect
          </motion.button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end pt-10 pr-6 md:pr-20">
          <div className="w-52 h-52 sm:w-60 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl">
            <img
              src="/rakesh image1.png"
              alt="Rakesh Anarajula"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
About.propTypes = {
  scrollToContact: PropTypes.func.isRequired
};

export default About;