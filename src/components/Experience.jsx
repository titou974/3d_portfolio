"use client";
import { motion, AnimatePresence } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SkillBar from "./SkillBar";
import Bobo from "./Bobo";

const defaultSkills = [
  { name: "React.js", level: 95 },
  { name: "Three.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 92 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [animationName, setAnimationName] = useState("seatedIdle");
  const [testimonial, setTestimonial] = useState(null);
  const [currentSkills, setCurrentSkills] = useState(null);

  const pauseTimeoutRef = useRef(null);

  const selectExperience = (index) => {
    setSelectedIndex(index);
    const experience = experiences[index];
    setAnimationName(experience.animation || "seatedIdle");
    setTestimonial(experience.testimonial || null);
    setCurrentSkills(experience.skills || null);
  };

  useEffect(() => {
    selectExperience(0);
  }, []);
  useEffect(() => {
    if (!isAutoPlay) {
      setAnimationName("seatedIdle");
      return;
    }
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % experiences.length;
        console.log("Auto-playing to index:", nextIndex);
        return nextIndex;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  useEffect(() => {
    selectExperience(selectedIndex);
  }, [selectedIndex]);

  const handleExperienceHover = (index) => {
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    setIsAutoPlay(false);
    setSelectedIndex(index);
  };

  const handleExperienceLeave = () => {
    setAnimationName("seatedIdle");
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    pauseTimeoutRef.current = setTimeout(() => {
      setIsAutoPlay(true);
    }, 2000);
  };

  const handleExperienceClick = (index) => {
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    setIsAutoPlay(false);
    setSelectedIndex(index);
  };

  const toggleAutoPlay = () => {
    setAnimationName("seatedIdle");
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:text-stone-500`}>
          Découvrez mes
        </p>
        <h2 className={`${styles.sectionHeadText} dark:text-stone-700`}>
          Expériences.
        </h2>
      </motion.div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div className="w-full col-span-2 md:col-span-1 bg-tertiary rounded-lg h-120 md:h-[732px] relative">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={
                  currentSkills
                    ? currentSkills.map((s) => s.name).join("-")
                    : "default"
                }
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-2 gap-4"
              >
                {currentSkills &&
                  currentSkills.map((skill, index) => (
                    <SkillBar
                      key={`${skill.name}-${skill.level}`}
                      skill={skill.name}
                      level={skill.level}
                      delay={index * 0.1}
                    />
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
          <Canvas>
            <ambientLight intensity={7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
            <Suspense fallback={null}>
              <Bobo
                position-y={-1.4}
                scale={2.2}
                animationName={animationName}
              />
            </Suspense>
          </Canvas>

          {/* Testimonial */}
          <AnimatePresence mode="wait">
            {testimonial && (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-background/90 dark:bg-background/80 p-4 rounded-lg w-11/12 md:w-3/4 border-primary border-1 z-10"
              >
                <p className="text-sm italic text-foreground mb-2">
                  "{testimonial.text}"
                </p>
                <p className="text-xs font-bold text-foreground text-right">
                  - {testimonial.author}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleAutoPlay}
              className="bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors shadow-lg"
              title={isAutoPlay ? "Pause auto-play" : "Resume auto-play"}
            >
              {isAutoPlay ? (
                <svg
                  className="w-5 h-5 text-foreground"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-foreground"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
        <div className="work-content md:max-h-[732px] overflow-y-auto col-span-2">
          <div className="sm:py-10 py-5 sm:px-5 px-2.5">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => handleExperienceClick(index)}
                onMouseEnter={() => handleExperienceHover(index)}
                onMouseLeave={handleExperienceLeave}
                className={`work-content_container group-hover:work-content_container_selected ${
                  selectedIndex === index && "work-content_container_selected"
                }`}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col h-full justify-start items-center py-2">
                  <div
                    className={`work-content_logo group-hover:work-content_logo_selected ${
                      selectedIndex === index && "scale-110 border-primary!"
                    }`}
                  >
                    <img
                      className="w-full h-full rounded-full"
                      src={item.icon}
                      alt={item.name}
                    />
                  </div>
                  <div
                    className={`work-content_bar transition-all duration-300 group-hover:work-content_bar_selected ${
                      selectedIndex === index && "bg-primary!"
                    }`}
                  />
                </div>
                <div className="sm:p-5 px-2.5 py-5">
                  <p className="font-bold text-foreground">{item.name}</p>
                  <p className="text-sm text-foreground/80 mb-5">
                    {item.pos} -- <span>{item.duration}</span>
                  </p>
                  <p
                    className={`transition-all ease-in-out duration-500 text-sm text-secondary group-hover:text-foreground ${
                      selectedIndex === index && "text-foreground!"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "");
