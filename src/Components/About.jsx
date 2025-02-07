import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Github, Instagram, Twitter, Linkedin } from 'lucide-react';

const About = ({ scrollToContact }) => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      url: "https://github.com/login",
      label: "GitHub"
    },
    {
      icon: <Instagram size={24} />,
      url: "https://www.instagram.com/accounts/login/?hl=en",
      label: "Instagram"
    },
    {
      icon: <Twitter size={24} />,
      url: "https://x.com/?lang=en&mx=2",
      label: "Twitter"
    },
    {
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin",
      label: "LinkedIn"
    }
  ];

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const nameText = "Rakesh Anarajula";
  const titleText = "Front-End Developer & React Developer";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white py-16 p-5">
      <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-4xl font-bold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-900">
              About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2"></div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemAnimation}
            className="relative"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto">
              <motion.div
                className="absolute inset-0 bg-blue-500 opacity-20 blur-2xl rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              ></motion.div>
              <motion.div
                className="absolute inset-0 bg-purple-500 opacity-20 blur-2xl rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
              ></motion.div>
              <motion.div
                className="absolute inset-2 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 blur-xl rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-full h-full overflow-hidden rounded-2xl "
              >
                <img
                  src="/rakesh image1.png"
                  alt="Rakesh Anarajula"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            </div>
          </motion.div>
          <div className="space-y-8">
            <motion.div variants={itemAnimation}>
              <motion.h1
                className="text-3xl sm:text-3xl md:text-3xl font-bold mb-4 text-center lg:text-left whitespace-pre"
                variants={sentence}
                initial="hidden"
                animate="visible"
              >
                {Array.from(nameText).map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterAnimation}
                    className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-purple-500 inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.h2
                className="text-xl sm:text-2xl md:text-2xl font-semibold mb-6 text-center lg:text-left whitespace-pre"
                variants={sentence}
                initial="hidden"
                animate="visible"
              >
                {Array.from(titleText).map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterAnimation}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h2>
            </motion.div>
            <motion.div
              variants={itemAnimation}
              className="space-y-6 text-gray-300"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg leading-relaxed"
              >
                Hello! I'm a passionate Front-End Developer with 1.8 years of experience in creating engaging web experiences. My journey in web development started with a curiosity for creating beautiful, functional interfaces that make a difference in users' lives.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base sm:text-lg leading-relaxed"
              >
                I specialize in building responsive, performant web applications using modern technologies like React.js and Next.js. My approach combines technical expertise with an eye for design, ensuring that every project I work on is both functionally robust and visually appealing.
              </motion.p>
            </motion.div>
            <motion.div
              variants={itemAnimation}
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
            >
              {['React.js', 'JavaScript', 'Tailwind CSS', 'Next.js', 'TypeScript'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="px-4 py-2 bg-blue-900 rounded-full text-blue-300 border border-blue-500 hover:border-blue-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              variants={itemAnimation}
              className="flex flex-row justify-center lg:justify-start gap-4 w-full"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="flex-1 max-w-[200px] px-6 py-3 bg-blue-500 rounded-full font-semibold text-white hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 text-center"
              >
                Let's Connect
              </motion.button>
              <motion.a
                href="/Rakesh experience resume1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 max-w-[200px] px-6 py-3 border-2 border-blue-500 rounded-full font-semibold text-blue-400 hover:bg-blue-500/10 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 text-center"
              >
                View Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={itemAnimation}
          className="mt-16 flex justify-center"
        >
          <div className="flex gap-8">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
About.propTypes = {
  scrollToContact: PropTypes.func.isRequired, 
};

export default About;