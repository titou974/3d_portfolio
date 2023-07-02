import { motion } from 'framer-motion';
import { styles } from '../styles';
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import Preloader  from "./Preloader";
import { swipe } from "../assets";
import { Typewriter } from 'react-simple-typewriter';


const Hero = () => {

  const [show, setShow] = useState(false)
  const el = useRef(null);

  return (
    <>
      <Preloader />
      <section className="relative w-full h-screen">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#5877FA] dark:bg-[#1d1836]"/>
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#5877FA] dark:from-[#1d1836] to-violet"/>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} dark:text-stone-700`}>Bonjour, je suis <span className="text-[#5877FA] dark:text-[#1d1836]">Titouan</span></h1>
            <span className={`${styles.heroSubText} mt-2 dark:text-stone-500`}>
            <Typewriter
              words={["const Hero = () => { const [show, setShow] = useState(false) const el = useRef","Cher voyageur, bienvenue sur mon portfolio!", "Prenez le temps de découvrir chaque détail de ce site fait avec le coeur. En somme !...","Je créer des applications mobiles et des sites internets."]}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={30}
              delaySpeed={1000}
            />
            </span>
          </div>
        </div>
        <div className='h-full hidden'>

        </div>
        <div className="absolute bottom-60 w-full flex items-center justify-center">
          <img src={swipe} alt="model 3d" className={`${!show && "hidden"} md:hidden`}/>
        </div>
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#work">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#5877FA] dark:border-[#1d1836] hover:border-white flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-[#5877FA] dark:bg-[#1d1836] mb-1"
                />
            </div>
          </a>
        </div>
      </section>
    </>
  )
}

export default Hero
