import { languages } from "../constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import InfiniteCarousel from "./InfiniteCarousel";
import { workInTheWorldCarousel, carouselOptions } from "../constants";

function Languages() {
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{t("languages.subtitle")}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t("languages.title")}</h2>
      </motion.div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
        <motion.div
          variants={fadeIn("up", "spring", 0 * 0.5, 0.75)}
          className="md:row-span-2"
        >
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="w-full bg-tertiary p-5 pb-12 rounded-2xl h-full relative space-y-8"
          >
            <div className="mt-5 space-y-2">
              <h3 className="text-base-title font-bold text-[24px]">
                {t("languages.languageDescriptionCard.title")}
              </h3>
              <p className="text-base-content text-[14px]">
                {t("languages.languageDescriptionCard.description")}
              </p>
            </div>
            <InfiniteCarousel
              options={carouselOptions}
              slides={workInTheWorldCarousel}
            />
          </Tilt>
        </motion.div>
        {languages.map((language, index) => (
          <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="w-full bg-tertiary p-5 pb-12 rounded-2xl h-full relative"
            >
              <div className="mt-5">
                <img
                  src={language.image}
                  className="w-16 h-16 rounded-full border-2"
                ></img>
                <h3 className="text-base-title font-bold text-[24px] mt-2">
                  {t(language.name)}
                </h3>
                <p className="mt-2 text-base-content text-[14px]">
                  {t(language.description)}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Languages, "languages");
