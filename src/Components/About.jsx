import React from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const About = ({ scrollToContact }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden"></div>
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center relative z-10">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end pt-10 pr-6 md:pr-20">
          <motion.div
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0 }}
          >
            <img
              src="/rakesh image1.png"
              alt="Rakesh Anarajula"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pl-10 pl-6 pt-10">
          <motion.h2
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            About Me
            <span className="block w-40 mx-auto h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-1 animate-[underline_1s_ease-in-out]" />
          </motion.h2>
          <motion.h2
            className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-semibold mb-6"
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white font-semibold">Rakesh Anarajula</span>{" "}
            <span className="text-transparent bg-clip-text font-bold bg-gradient-to-r from-yellow-500 to-blue-500">
              Front-End Web Developer
            </span>
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm a passionate Front-End Web Developer with over 1.5 years of experience in building user-friendly and visually appealing websites. I specialize in creating responsive, interactive, and seamless experiences that elevate user engagement and enhance business outcomes.
          </motion.p>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I am skilled in React.js, JavaScript, HTML, CSS, and have a strong understanding of modern web development frameworks. I am always eager to learn new technologies and contribute to projects that make a positive impact.
          </motion.p>
          <motion.button
            onClick={scrollToContact}
            className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Let's Connect
          </motion.button>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  scrollToContact: PropTypes.func.isRequired
};

export default About;