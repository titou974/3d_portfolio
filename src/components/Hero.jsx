import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Preloader  from "./Preloader";


const Hero = () => {

  const el = useRef(null);
  useEffect(() => {
    setTimeout(() => {
        const typed = new Typed(el.current, {
        strings: ["Bienvenue sur mon Portfolio !", "Je suis développeur fullstack, avec une préférence pour le back-end", "Surtout ! N'hésitez pas à me contacter pour la moindre question..."],
        startDelay: 300,
        typeSpeed: 50,
        backSpeed: 30,
        showCursor: false
        })
    }, 9000)
  })


  return (
    <>
      <Preloader />
      <section className="relative w-full h-screen">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#5877FA] dark:bg-[#915eff]"/>
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#5877FA] dark:from-[#915eff] to-violet"/>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} dark:text-stone-700`}>Bonjour, je suis <span className="text-[#5877FA] dark:text-[#915eff]">Titouan</span></h1>
            <p className={`${styles.heroSubText} mt-2 dark:text-stone-500`} ref={el}>
            </p>
          </div>
        </div>
        <ComputersCanvas />

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary dark:border-[#915eff] hover:border-white flex justify-center items-start p-2">
              <motion.dev
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-secondary dark:bg-[#915eff] mb-1"
                />
            </div>
          </a>
        </div>
      </section>
    </>
  )
}

export default Hero
