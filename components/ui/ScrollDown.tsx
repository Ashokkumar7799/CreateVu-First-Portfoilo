"use client";

import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export const ScrollDown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="absolute bottom-16 md:bottom-10 left-0 right-0 mx-auto w-fit flex flex-col items-center gap-2 cursor-pointer z-50"
      onClick={() => {
        document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="bg-purple-500/20 p-2 rounded-full"
      >
        <FaChevronDown className="text-purple-400 w-5 h-5 md:w-6 md:h-6" />
      </motion.div>
    </motion.div>
  );
};
