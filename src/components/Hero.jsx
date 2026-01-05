import { motion } from "framer-motion";
import { styles } from "../styles";
import Preloader from "./Preloader";
import { Typewriter } from "react-simple-typewriter";
import Avatar from "./Avatar";
import { socialsLinks } from "../constants";

const Hero = () => {
  return (
    <>
      <Preloader />
      <section className="relative w-full h-screen">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-primary dark:bg-[#1d1836]" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-primary dark:from-[#1d1836] to-violet" />
          </div>
          <div className="space-y-4 md:space-y-2">
            <Avatar />
            <div className="space-y-2 sm:space-y-1">
              <h1 className={`${styles.heroHeadText} dark:text-stone-700`}>
                Bonjour, je suis{" "}
                <span className="text-primary dark:text-[#1d1836]">
                  <a
                    href={socialsLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Titouan
                  </a>
                  {" / "}
                  <a
                    href={socialsLinks.tiktok} // ou ton lien Instagram
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    @bobodigital_
                  </a>
                </span>
              </h1>
              <span
                className={`${styles.heroSubText} mt-2 dark:text-[#1d1836]/85`}
              >
                <Typewriter
                  words={[
                    "Toc toc ! Qui va là ?",
                    "Cher voyageur, bienvenue sur mon portfolio!",
                    "Prenez le temps de découvrir chaque détail de ce site fait avec le cœur. En somme !...",
                    "Je crée des applications mobiles et des sites internet.",
                  ]}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={5}
                  delaySpeed={2000}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#work">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-primary dark:border-[#1d1836] hover:border-white flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-primary dark:bg-[#1d1836] mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
