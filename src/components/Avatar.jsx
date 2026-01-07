import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Player } from "@lordicon/react";
import ICON from "../assets/lordicon/message.json";

export default function Avatar() {
  const [isHovered, setIsHovered] = useState(false);
  const playerRef = useRef(null);

  // Joue l'animation quand on survole
  useEffect(() => {
    // add timeout to ensure the player is loaded
    if (isHovered && playerRef.current) {
      setTimeout(() => {
        playerRef.current.play();
      }, 100);
    }
  }, [isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-16 sm:w-24 h-16 sm:h-24 rounded-full overflow-hidden border-4 border-primary bg-background dark:bg-[url(/src/assets/titoudark.webp)] bg-[url(/src/assets/titoulight.webp)] bg-cover bg-no-repeat bg-center cursor-pointer transition-all duration-300"
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            >
              <div className="w-8 sm:w-12 h-8 sm:h-12">
                <Player ref={playerRef} icon={ICON} size="100%" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Tilt>
    </div>
  );
}
