import { useEffect } from "react";
import { videoLoader } from "../assets";
import { preLoaderAnim } from "../utils/loaderanim";

const Preloader = () => {

  useEffect(() => {
    preLoaderAnim()
  },)



  return (
    <div className="preloader">
      <div className="texts-container text-lg">
        <span>En route </span> <span>vers le Portfolio </span> <span>de Titouan...</span>
      </div>
      <video autoPlay loop muted className="w-7/12 md:w-2/5 lg:w-1/5">
          <source src={videoLoader}/>
      </video>
    </div>
  )
}

export default Preloader;
