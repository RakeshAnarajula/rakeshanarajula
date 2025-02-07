import React from "react";
import { motion } from "framer-motion";
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Main Loader Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex items-center justify-center"
      >
        {/* Outer Circle Animation */}
        <motion.div
          className="animate-spin-slow rounded-full h-48 w-48 border-t-4 border-t-transparent border-l-4 border-l-teal-500 border-r-4 border-r-transparent"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
          }}
        ></motion.div>

        {/* Inner Circle Animation */}
        <motion.div
          className="absolute animate-spin rounded-full h-32 w-32 border-b-4 border-b-transparent border-r-4 border-r-yellow-500"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
        ></motion.div>

        {/* Text Animation */}
        <motion.div
          className="absolute text-white text-2xl sm:text-3xl font-bold tracking-wider"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: "easeInOut",
          }}
        >
          Rakesh
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-teal-500 via-yellow-500 to-purple-500 opacity-20 blur-xl rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;