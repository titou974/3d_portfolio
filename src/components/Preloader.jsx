import { useEffect } from "react";
import { preLoaderAnim } from "../utils/loaderanim";

const Preloader = () => {

  useEffect(() => {
    preLoaderAnim()
  },)



  return (
    <div className="preloader">
      <div className="texts-container items-center text-lg hidden sm:flex">
        <span>En route </span> <span>vers le Portfolio </span> <span>de Titouan...</span>
      </div>
      <div className="texts-container flex items-center text-lg sm:hidden">
        <span>Bienvenue. </span> <span>Welcome. </span> <span>ようこそ.</span>
      </div>
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Preloader;
