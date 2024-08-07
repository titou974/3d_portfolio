import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services, aboutSection } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:text-stone-500`}>{ aboutSection.subtitle }</p>
        <h2 className={`${styles.sectionHeadText} dark:text-stone-700`}>{ aboutSection.title }</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] dark:text-stone-500">
        Maintenant 1 an que je suis développeur Fullstack, et 2 ans et demi que j'ai écris mes premières lignes de code. J'ai commencé en auto-didacte, enchainé avec une formation intensive <a href='https://www.lewagon.com/fr' className='text-[#5877FA] dark:text-[#1d1836] hover:underline' target='_blank' rel="noopener noreferrer">au Wagon</a>, co-fondé et développer entièrement le SAAS de voiturier <a href='https://nestorapp.app/' className='text-[#5877FA] dark:text-[#1d1836] hover:underline' target='_blank' rel="noopener noreferrer">Nestor</a>, et travaillé en freelance pour des entreprises comme <a href='https://www.kessel.media' className='text-[#5877FA] dark:text-[#1d1836] hover:underline' target='_blank' rel="noopener noreferrer">Kessel Media</a>. J'ai une forte passion et une satisfaction à donner vie aux app mobiles et sites web, et je suis toujours à la recherche de nouveaux projets pour lesquels je pourrais apporter mon expertise.
      </motion.p>
      <div className="mt-20 flex justify-center flex-wrap gap-10">
        <Tilt className="xs:w-[250px] w-full">
          <motion.div variants={fadeIn("right", "spring", 0.5 * 0, 0.75)} className={`w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card`}>
            <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <img src={services[0].icon} alt={services[0].title} className='w-16 h-16 object-contain'/>
              <h3 className="text-white text-[20px] font-bold text-center">{services[0].title}</h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className="xs:w-[250px] w-full">
          <motion.div variants={fadeIn("right", "spring", 0.5 * 0, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <img src={services[1].icon} alt={services[1].title} className='w-16 h-16 object-contain'/>
              <h3 className="text-white text-[20px] font-bold text-center">{services[1].title}</h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className="xs:w-[250px] w-full">
          <motion.div variants={fadeIn("right", "spring", 0.5 * 0, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <img src={services[2].icon} alt={services[2].title} className='w-16 h-16 object-contain'/>
              <h3 className="text-white text-[20px] font-bold text-center">{services[2].title}</h3>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
