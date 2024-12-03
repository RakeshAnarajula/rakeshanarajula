import React from "react";
import { motion } from "framer-motion";
import { Book, School, GraduationCap, Briefcase, Star } from "lucide-react";
import { useInView } from 'react-intersection-observer';

const EducationExperienceJourney = () => {
  const educationData = [
    {
      id: 1,
      type: "Education",
      title: "B.Tech in Computer Science",
      institution: "Nalla Narasimha Reddy Group of Institutions (Hyderabad)",
      year: 2023,
      icon: <GraduationCap className="w-6 h-6 text-purple-900" />,
      description: "Completed Bachelor of Technology with expertise in Computer Science.",
    },
    {
      id: 2,
      type: "education",
      title: "Intermediate (12th Grade)",
      institution: "SR Junior College (Karimnagar)",
      year: 2019,
      icon: <School className="w-6 h-6 text-green-400" />,
      description: "Completed my 12th Grade with a focus on science and mathematics.",
    },
    {
      id: 3,
      type: "education",
      title: "10th Grade",
      institution: "Ambitus School (Siddipet)",
      year: 2017,
      icon: <Book className="w-6 h-6 text-yellow-600" />,
      description: "Completed my 10th Grade with a strong academic foundation.",
    },
  ];

  const experienceData = [
    {
      id: 1,
      type: "experience",
      title: "React Front-End Developer",
      company: "Virtu Tech Solutions",
      year: "2023 - Present",
      icon: <Briefcase className="w-6 h-6 text-yellow-300" />,
      description: "Developed and maintained responsive React.js applications.",
    },
    {
      id: 2,
      type: "experience",
      title: "Java Full Stack Development",
      company: "Certifications",
      year: "2023",
      icon: <Star className="w-6 h-6 text-red-800" />,
      description: "Expertise in developing both front-end and back-end web applications using Java, Spring, and modern front-end technologies.",
    },
  ];

  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delayChildren: 0.3, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="bg-gray-900 py-16 px-6">
      <motion.div
        className="container mx-auto max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6 text-center pt-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          My journey
          <span className="block w-40 mx-auto h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-1 animate-[underline_1s_ease-in-out]" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Section */}
          <div ref={educationRef} className="relative">
            <motion.h3
              className="text-3xl md:text-4xl font-semibold text-red-500 mb-8 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: educationInView ? 1 : 0.9, opacity: educationInView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              Educational
            </motion.h3>
            <div className="relative">
              <div className="hidden md:block absolute left-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full opacity-20"></div>
              {educationData.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-start md:pl-12 mb-8"
                  variants={itemVariants}
                >
                  <div className="hidden md:block absolute left-0 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
                  <motion.div
                    className="w-full md:w-4/5 bg-gradient-to-br from-blue-800 to-blue-900 p-6 rounded-lg shadow-lg text-white cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }} // Zoom-in effect on hover
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  >
                    <div className="flex items-center mb-4">
                      {item.icon}
                      <h4 className="text-xl md:text-2xl font-semibold ml-4">{item.title}</h4>
                    </div>
                    <p className="text-sm mb-2">{item.institution}</p>
                    <p className="text-sm opacity-80">{item.year}</p>
                    <p className="mt-3">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div ref={experienceRef} className="relative">
            <motion.h3
              className="text-3xl md:text-4xl font-semibold text-red-500 mb-8 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: experienceInView ? 1 : 0.9, opacity: experienceInView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              Experience
            </motion.h3>
            <div className="relative">
              <div className="hidden md:block absolute left-0 w-1 bg-gradient-to-b from-yellow-500 to-red-500 h-full opacity-20"></div>
              {experienceData.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-start md:pl-12 mb-8"
                  variants={itemVariants}
                >
                  <div className="hidden md:block absolute left-0 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
                  <motion.div
                    className="w-full md:w-4/5 bg-gradient-to-br from-yellow-700 to-red-900 p-6 rounded-lg shadow-lg text-white cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }} // Zoom-in effect on hover
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  >
                    <div className="flex items-center mb-4">
                      {item.icon}
                      <h4 className="text-xl md:text-2xl font-semibold ml-4">{item.title}</h4>
                    </div>
                    <p className="text-sm mb-2">{item.company}</p>
                    <p className="text-sm opacity-80">{item.year}</p>
                    <p className="mt-3">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationExperienceJourney;
