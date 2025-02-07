import React from "react";
import { motion } from "framer-motion";
import { Book, School, GraduationCap, Briefcase, Star } from "lucide-react";
import { useInView } from "react-intersection-observer";

const EducationExperienceJourney = () => {
  const educationData = [
    {
      id: 1,
      type: "Education",
      title: "Bachelor of Technology (CSE)",
      institution: "Nalla Narasimha Reddy Group of Institutions (Hyderabad)",
      year: 2023,
      icon: <GraduationCap className="w-6 h-6 text-purple-500" />,
      description: "Completed Bachelor of Technology with expertise in Computer Science.",
    },
    {
      id: 2,
      type: "Education",
      title: "Intermediate (12th Grade)",
      institution: "SR Junior College (Karimnagar)",
      year: 2019,
      icon: <School className="w-6 h-6 text-green-400" />,
      description: "Completed my 12th Grade with a focus on science and mathematics.",
    },
    {
      id: 3,
      type: "Education",
      title: "Secondary School Education(10th Grade)",
      institution: "Ambitus School (Siddipet)",
      year: 2017,
      icon: <Book className="w-6 h-6 text-yellow-400" />,
      description: "Completed my 10th Grade with a strong academic foundation.",
    },
  ];

  const experienceData = [
    {
      id: 1,
      type: "Experience",
      title: "React Front-End Developer",
      company: "Virtu Tech Solutions",
      year: "2023 - Present",
      icon: <Briefcase className="w-6 h-6 text-yellow-300" />,
      description: "Developed and maintained responsive React.js applications.",
    },
    {
      id: 2,
      type: "Experience",
      title: "Java Full Stack Development",
      company: "Certifications",
      year: "2023",
      icon: <Star className="w-6 h-6 text-red-500" />,
      description:
        "Expertise in developing both front-end and back-end web applications using Java, Spring, and modern front-end technologies.",
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
    visible: {
      opacity: 1,
      transition: { duration: 1, delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 py-16 px-4 sm:px-8">      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-4xl font-bold bg-gradient-to-t from-blue-400 via-purple-500 to-orange-900 text-transparent bg-clip-text animate-gradient">
          My Journey
          <span className="block w-40 mx-auto h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-900 mt-1 animate-[underline_1s_ease-in-out]" />
          </h2>
        <p className="mt-4 text-lg text-gray-400">
          A timeline of my educational background and professional experience.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div ref={educationRef} className="relative">
          <motion.h3
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-8 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: educationInView ? 1 : 0.9, opacity: educationInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            Education
            <span className="block w-20 mx-auto h-1 bg-gradient-to-r from-yellow-400 to-red-500 mt-1 animate-[underline_1s_ease-in-out]" />
          </motion.h3>
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={educationInView ? "visible" : "hidden"}
          >
            {educationData.map((item) => (
              <motion.div
                key={item.id}
                className="relative flex items-start space-x-4 p-6 bg-gradient-to-b from-gray-900 to bg-gray-800 rounded-lg shadow-lg hover:bg-gray-900 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.institution}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.year}</p>
                  <p className="mt-2 text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div ref={experienceRef} className="relative">
          <motion.h3
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-8 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: experienceInView ? 1 : 0.9, opacity: experienceInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            Experience
            <span className="block w-20 mx-auto h-1 bg-gradient-to-r from-yellow-400 to-red-500 mt-1 animate-[underline_1s_ease-in-out]" />
          </motion.h3>
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
          >
            {experienceData.map((item) => (
              <motion.div
                key={item.id}
                className="relative flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-900 to bg-gray-800 rounded-lg shadow-lg hover:bg-gray-900 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.company}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.year}</p>
                  <p className="mt-2 text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default EducationExperienceJourney;