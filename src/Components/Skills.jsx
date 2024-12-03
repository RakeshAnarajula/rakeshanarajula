import React from 'react';
import { motion } from 'framer-motion';
const SkillsSection = () => {
  const technicalSkills = [
    { name: 'HTML', progress: 90 },
    { name: 'CSS', progress: 80 },
    { name: 'JavaScript', progress: 85 },
    { name: 'Java', progress: 75 },
    { name: 'React', progress: 90 },
  ];

  const professionalSkills = [
    { name: 'Creativity', progress: 90 },
    { name: 'Communication', progress: 85 },
    { name: 'Problem Solving', progress: 75 },
    { name: 'Teamwork', progress: 85 },
  ];

  return (
    <section className="bg-gray-900 py-20 px-4 md:px-8">
      <div className="container mx-auto text-center">
        {/* Section Title with Animation */}
        <motion.h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          My Skills
          <span className="block w-32 mx-auto h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-1 animate-[underline_1s_ease-in-out]" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills Section with Animation */}
          <motion.div
            className="w-full md:w-[80%] lg:w-[70%] mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-white">{skill.progress}%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full">
                  <motion.div
                    className="h-3 bg-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Professional Skills Section with Animation */}
          <motion.div
            className="w-full md:w-[80%] lg:w-[70%] mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Professional Skills</h3>
            {professionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-white">{skill.progress}%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full">
                  <motion.div
                    className="h-3 bg-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
