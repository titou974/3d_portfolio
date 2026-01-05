import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import ReactPlayer from "react-player";
import { useRef } from "react";
import { useCallback, useState } from "react";
import {
  InstagramEmbed,
  TikTokEmbed,
  YouTubeEmbed,
} from "react-social-media-embed";

const Video = () => {
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef();

  const onReady = useCallback(() => {
    if (!isReady) {
      const timeToStart = 60 * 35 + 27;
      playerRef.current.seekTo(timeToStart, "seconds");
      setIsReady(true);
    }
  }, [isReady]);

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:text-stone-500`}>
          Apprenez-en à travers
        </p>
        <h2 className={`${styles.sectionHeadText} dark:text-stone-700`}>
          Mes Vidéos.
        </h2>
      </motion.div>
      <div className="mt-8 flex flex-wrap gap-7 justify-center items-center">
        <div className="bg-tertiary p-5 rounded-xl sm:w-[400px] w-full space-y-4 h-full">
          <p className="text-[24px] font-bold">Instagram</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InstagramEmbed
              url="https://www.instagram.com/p/DRsermnkjSn/"
              width="100%"
              height="400px"
            />
          </div>
        </div>
        <div className="bg-tertiary p-5 rounded-xl sm:w-[400px] w-full space-y-4 h-full">
          <p className="text-[24px] font-bold">Tiktok</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TikTokEmbed
              url="https://www.tiktok.com/@bobodigital_/video/7589361251256388886"
              width="100%"
              height="400px"
            />
          </div>
        </div>
        <div className="bg-tertiary p-5 rounded-xl sm:w-[400px] w-full space-y-4 h-full">
          <p className="text-[24px] font-bold">Youtube</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <YouTubeEmbed
              url="https://www.youtube.com/shorts/ss_WKloGuN4"
              width="100%"
              height="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Video, "video");
