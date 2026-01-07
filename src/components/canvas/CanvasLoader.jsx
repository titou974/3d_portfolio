import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 transform -rotate-90">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-gray-700"
          />
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-primary"
            strokeDasharray={175.93}
            initial={{ strokeDashoffset: 175.93 }}
            animate={{
              strokeDashoffset: 175.93 - (175.93 * progress) / 100,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-sm font-bold text-primary"
            key={progress}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {progress.toFixed(0)}%
          </motion.span>
        </div>
      </div>
      <p className="text-base-content text-xs mt-4 font-bold text-center">
        {progress !== 0
          ? "Chargement de l'avatar..."
          : "Initialisation de l'avatar..."}
      </p>
    </Html>
  );
};

export default CanvasLoader;
