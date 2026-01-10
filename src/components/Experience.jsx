import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useState, useEffect, useRef } from "react";
import SkillBar from "./SkillBar";
import { Switch } from "@heroui/react";
import MeCanva from "./canvas/MeCanva";
import { iphoneMockup, laptopMockup, kesselmedia } from "../assets";
import { useTranslation } from "react-i18next";

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
  const [designPreviews, setDesignPreviews] = useState({
    phonePreview: null,
    laptopPreview: null,
  });
  const [activateModel3D, setActivateModel3D] = useState(false);
  const pauseTimeoutRef = useRef(null);

  const { t } = useTranslation();

  const selectExperience = (index) => {
    setSelectedIndex(index);
    const experience = experiences[index];
    setAnimationName(experience.animation || "seatedIdle");
    setTestimonial(experience.testimonial || null);
    setCurrentSkills(experience.skills || null);
    setDesignPreviews({
      phonePreview: experience.phonePreview || null,
      laptopPreview: experience.laptopPreview || null,
    });
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
    }, 6000);

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
    }, 200);
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
        <p className={`${styles.sectionSubText}`}>
          {t("experiences.subtitle")}
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          {t("experiences.title")}
        </h2>
      </motion.div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div className="w-full col-span-2 md:col-span-1 bg-tertiary rounded-2xl h-120 md:h-[732px] relative">
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
          {activateModel3D ? (
            <MeCanva animationName={animationName} />
          ) : (
            <div className="flex justify-center md:flex-col items-center gap-8 md:gap-4 mt-34 md:mt-32">
              {designPreviews.phonePreview && (
                <div className="relative w-20" key={`phone-${selectedIndex}`}>
                  <img
                    src={iphoneMockup}
                    alt="mockup iphone"
                    className="relative z-20 w-full h-auto"
                  />
                  <motion.img
                    src={designPreviews.phonePreview}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    alt="phone preview"
                    className="absolute top-[3%] left-[8%] w-[84%] h-[94%] object-cover rounded-[8%] z-10"
                  />
                </div>
              )}
              {designPreviews.laptopPreview && (
                <div className="relative w-46" key={`laptop-${selectedIndex}`}>
                  <img
                    src={laptopMockup}
                    alt="mockup laptop"
                    className="relative z-20 w-full h-auto"
                  />
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src={designPreviews.laptopPreview}
                    alt="laptop preview"
                    className="absolute top-[6%] left-[13%] w-[74%] h-[78%] object-cover rounded-sm z-10"
                  />
                </div>
              )}
            </div>
          )}
          <div className="hidden lg:block absolute bottom-56 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4 z-10">
            <Switch
              isSelected={activateModel3D}
              onValueChange={setActivateModel3D}
              size="sm"
            >
              {t("experiences.activate3DModel")}
            </Switch>
          </div>
          <AnimatePresence mode="wait">
            {testimonial && (
              <motion.div
                key={t(testimonial.authorKey)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-5 left-1/2 transform -translate-x-1/2 dark:bg-background/90  p-4 rounded-2xl w-11/12 md:w-3/4 border-primary border-1 z-10"
              >
                <p className="text-sm italic text-base-content mb-2">
                  "{t(testimonial.textKey)}"
                </p>
                <p className="text-xs font-bold text-base-title text-right">
                  - {t(testimonial.authorKey)}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="work-content md:max-h-[732px] overflow-y-auto col-span-2">
          <div className="sm:py-10 py-5 sm:px-5 px-2.5">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                // onClick={() => handleExperienceClick(index)}
                // onMouseEnter={() => handleExperienceHover(index)}
                // onMouseLeave={handleExperienceLeave}
                className={`work-content_container group-hover:work-content_container_selected group ${
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
                  <p className="font-bold text-base-title">{t(item.name)}</p>
                  <p className="text-sm text-secondary mb-5">
                    {t(item.posKey)} -- <span>{t(item.durationKey)}</span>
                  </p>
                  <p
                    className={`transition-all ease-in-out duration-500 text-sm text-base-content/60 group-hover:text-base-content ${
                      selectedIndex === index && "text-base-content!"
                    }`}
                  >
                    {t(item.titleKey)}
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

export default SectionWrapper(Experience, "experiences");
