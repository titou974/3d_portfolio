import { motion } from 'framer-motion';
import { styles } from '../styles';
import { malt } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Malt = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:text-stone-500`}>{ malt.subtitle }</p>
        <h2 className={`${styles.sectionHeadText} dark:text-stone-700`}>{ malt.title }</h2>
      </motion.div>
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="flex flex-col gap-4 mt-4 text-secondary text-[17px] max-w-3xl dark:text-stone-500">
        <p>{ malt.description }</p>
        <a href="https://www.malt.fr/profile/titouanhirsch" target="_blank" rel="noreferrer" className='flex items-center gap-2 w-fit border-[#fc5e57] p-4 rounded-md font-bold text-white bg-[#fc5e57] transition-all hover:bg-white hover:text-[#fc5e57] text-center'>
            Voir mon profil Malt
            <img src={malt.image} alt="malt" className='w-8 h-8 object-contain' />
        </a>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Malt, "malt")
