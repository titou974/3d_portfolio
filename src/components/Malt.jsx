import { motion } from "framer-motion";
import { styles } from "../styles";
import { malt } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";

const Malt = () => {
  return (
    <div className="flex flex-col items-center bg-tertiary rounded-2xl p-6 max-w-3xl mx-auto gap-4">
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} text-secondary`}>
          {malt.description}
        </p>
        <h2 className={`font-bold text-[24px] text-foreground`}>
          {malt.title}
        </h2>
      </motion.div>
      <motion.a
        href="https://www.malt.fr/profile/titouanhirsch"
        variants={fadeIn("", "", 0.1, 1)}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 w-fit border-[#fc5e57] p-4 rounded-md font-bold text-white bg-[#fc5e57] transition-all hover:bg-white hover:text-[#fc5e57] text-center"
      >
        Voir mon profil Malt
        <img src={malt.image} alt="malt" className="w-8 h-8 object-contain" />
      </motion.a>
    </div>
  );
};

export default Malt;
