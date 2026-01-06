"use client";
import { motion } from "framer-motion";

const SkillBar = ({ skill, level, delay = 0 }) => {
  return (
    <motion.div
      key={`${skill}-${level}`} // ✅ Key unique pour re-trigger l'animation
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, delay: delay }}
    >
      {/* Nom de la compétence */}
      <div className="flex justify-between mb-2">
        <span className="text-xs font-medium text-foreground">{skill}</span>
        <span className="text-xs text-foreground/70">{level}%</span>
      </div>

      {/* Barre de progression */}
      <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-linear-to-r from-primary dark:to-purple-600 to-[#ffbd07] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{
            duration: 0.8,
            delay: delay,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
