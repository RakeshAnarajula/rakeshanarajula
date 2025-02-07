import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Layout,
  Server,
  GitBranch,
  Github,
  GitPullRequest
} from 'lucide-react';

const ModernSkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: 'Frontend Development',
      icon: <Layout className="w-6 h-6 text-white animate-spin-slow" />,
      color: 'from-blue-500 to-cyan-400',
      skills: [
        { name: 'HTML5', icon: <Code className="w-4 h-4" /> },
        { name: 'CSS3', icon: <Code className="w-4 h-4" /> },
        { name: 'JavaScript', icon: <Code className="w-4 h-4" /> },
        { name: 'React.js', icon: <Layout className="w-4 h-4" /> },
        { name: 'Bootstrap', icon: <Layout className="w-4 h-4" /> }
      ],
      proficiency: 90,
      animation: 'animate-slide-in-left'
    },
    {
      name: 'Backend Development',
      icon: <Server className="w-6 h-6 text-white animate-bounce" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', icon: <Server className="w-4 h-4" /> },
        { name: 'Express.js', icon: <Server className="w-4 h-4" /> },
        { name: 'REST APIs', icon: <Code className="w-4 h-4" /> },
        { name: 'Java', icon: <Code className="w-4 h-4" /> }
      ],
      proficiency: 85,
      animation: 'animate-slide-in-right'
    },
    {
      name: 'Database Management',
      icon: <Database className="w-6 h-6 text-white animate-pulse" />,
      color: 'from-green-500 to-emerald-400',
      skills: [
        { name: 'MongoDB', icon: <Database className="w-4 h-4" /> },
        { name: 'MySQL', icon: <Database className="w-4 h-4" /> }
      ],
      proficiency: 80,
      animation: 'animate-slide-in-left'
    },
    {
      name: 'Version Control & CI/CD',
      icon: <GitBranch className="w-6 h-6 text-white animate-spin-slow" />,
      color: 'from-gray-100 to-gray-700',
      skills: [
        { name: 'Git', icon: <GitBranch className="w-4 h-4" /> },
        { name: 'GitHub', icon: <Github className="w-4 h-4" /> },
        { name: 'GitHub Actions', icon: <GitPullRequest className="w-4 h-4" /> }
      ],
      proficiency: 85,
      animation: 'animate-slide-in-right'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white py-16 p-8">
      <div className="max-w-6xl mx-auto mb-16 animate-fade-in">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-orange-900 text-transparent bg-clip-text animate-gradient">
            Professional Skills
            <span className="block w-60 mx-auto h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-orange-900 mt-1 animate-[underline_1s_ease-in-out]" />
          </h1>
          <p className="mt-4 text-gray-400 text-lg animate-slide-up">
            Passionate about creating exceptional digital experiences
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`relative p-6 rounded-xl bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105 transform ${skill.animation}`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredSkill(skill.name)} 
              onMouseLeave={() => setHoveredSkill(null)} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="mb-4">
                <div className="h-2 w-full bg-gray-700 rounded-full">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: '0%' }}
                    animate={{
                      width:
                        hoveredSkill === skill.name
                          ? `${skill.proficiency}%`
                          : '0%'
                    }}
                    transition={{
                      type: 'tween',
                      duration: 0.3,
                      ease: 'easeInOut'
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((subSkill, subIndex) => (
                  <span
                    key={subSkill.name}
                    className="px-3 py-1 text-sm rounded-full bg-gray-700 hover:bg-gray-600 transition-all duration-300 flex items-center gap-2 hover:scale-110 animate-fade-in"
                    style={{ animationDelay: `${(index * 200) + (subIndex * 100)}ms` }}
                  >
                    {subSkill.icon}
                    {subSkill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernSkillsSection;