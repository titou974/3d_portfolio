import { motion } from "framer-motion";
import { styles } from "../styles";
import { malt } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";
import { Button } from "@heroui/react";
const Malt = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center bg-tertiary rounded-2xl p-6 max-w-3xl mx-auto gap-4">
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} text-secondary`}>
          {t(malt.descriptionKey)}
        </p>
        <h2 className={`font-bold text-[24px] text-foreground`}>
          {t(malt.titleKey)}
        </h2>
      </motion.div>
      <motion.a
        href="https://www.malt.fr/profile/titouanhirsch"
        variants={fadeIn("", "", 0.1, 1)}
        target="_blank"
        asChild
        rel="noreferrer"
      >
        <Button
          endContent={
            <img
              src={malt.image}
              alt="malt"
              className="w-8 h-8 object-contain"
            />
          }
          className="bg-[#fc5e57]"
        >
          Voir mon profil Malt
        </Button>
      </motion.a>
    </div>
  );
};

export default Malt;
