import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar({ navbar: boolean }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={`absolute bottom-0 left-0 right-0 h-1 bg-gray-200/20 z-50`}
    >
      <motion.div
        className={`h-full bg-linear-to-r from-primary dark:to-purple-600 to-[#ffbd07]  shadow-lg shadow-primary/50 origin-left`}
        style={{
          scaleX,
          transformOrigin: "0% 0%",
        }}
      />
    </motion.div>
  );
}
