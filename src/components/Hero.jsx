import { motion } from "framer-motion";
import { styles } from "../styles";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";
import Avatar from "./Avatar";
import { socialsLinks } from "../constants";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="relative w-full h-screen">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-primary" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-primary to-violet" />
          </div>
          <div className="space-y-4 md:space-y-2">
            <Avatar />
            <div className="space-y-2 sm:space-y-1">
              <h1 className={`${styles.heroHeadText}`}>
                {t("hero.greeting")}{" "}
                <span className="text-primary">
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
                    href={socialsLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    @bobodigital_
                  </a>
                </span>
              </h1>
              <span className={`${styles.heroSubText} mt-2`}>
                <Typewriter
                  words={[
                    t("hero.typewriter.line1"),
                    t("hero.typewriter.line2"),
                    t("hero.typewriter.line3"),
                    t("hero.typewriter.line4"),
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
          <a href="#video" aria-label={t("hero.scrollLabel")}>
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-primary hover:border-foreground flex justify-center items-start p-2 group transition-colors ease-in-out duration-500">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-primary group-hover:bg-foreground mb-1 transition-colors ease-in-out duration-500"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
