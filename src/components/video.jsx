import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import ReactPlayer from "react-player";
import { useRef } from "react";
import { useCallback, useState } from "react";

const Video = () => {

  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef();

  const onReady = useCallback(() => {
    if (!isReady) {
      const timeToStart = 60*35 + 27;
      playerRef.current.seekTo(timeToStart, "seconds");
      setIsReady(true);
    }
  }, [isReady]);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:text-stone-500`}>Apprenez-en à travers</p>
        <h2 className={`${styles.sectionHeadText} dark:text-stone-700`}>Mes Vidéos.</h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center items-center">
        <div className="bg-tertiary p-5 rounded-md">
          <ReactPlayer
            url='https://www.youtube.com/shorts/X3IL5fJs3Hs'
            controls={true}
          />
        </div>
        <div className="bg-tertiary p-5 rounded-md">
          <ReactPlayer
            url='https://www.youtube.com/watch?v=XK0nbuPuGio&ab_channel=LeWagon'
            controls={true}
            onReady={onReady}
            ref={playerRef}
          />
        </div>

      </div>
    </div>
  )
}

export default SectionWrapper(Video, "video");
