import Lottie from "lottie-react";
import { useRef, useEffect } from "react";
import { styles } from "../../styles";
import { Typewriter } from "react-simple-typewriter";
import checkAnimationDark from "../../assets/checkdarkportfolio.json";
import checkAnimationlight from "../../assets/checklightportfolio.json";

export default function StepThreeForm({ form, setForm }) {
  const lottieRef = useRef(null);
  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={checkAnimationDark}
      className="w-60 h-60"
      autoplay={true}
      loop={false}
    />
  );
}
