import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';



const About = () => {
  const body = document.documentElement;
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:text-stone-500`}>Et...</p>
        <h2 className={`${styles.sectionHeadText} dark:text-stone-700`}>À Propos.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] dark:text-stone-500">
        Je suis un passionné de programmation web, qui a commencé à explorer ce domaine en 2021 avec mon école. Ma soif d'apprendre m'a rapidement conduit à me plonger dans l'auto-apprentissage de la programmation. Après avoir suivi avec succès une formation de 2 mois avec <a href='https://www.lewagon.com/fr' className='text-[#5877FA] dark:text-[#1d1836] hover:underline' target='_blank' rel="noopener noreferrer">Le Wagon</a>, j'ai solidifié mes compétences en Rails, ce qui m'a donné une base solide dans le développement web. Récemment, j'ai élargi mes connaissances en acquérant des bases en React JS, et désormais, je suis déterminé à rajouter le développement mobile à mon arc de compétences.
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
