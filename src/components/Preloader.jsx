import { useEffect } from "react";
import { preLoaderAnim } from "../utils/loaderanim";
import { useTranslation } from "react-i18next";

const Preloader = () => {
  const { t } = useTranslation();

  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container items-center text-lg hidden sm:flex">
        <span>{t("preloader.desktop.part1")} </span>
        <span>{t("preloader.desktop.part2")} </span>
        <span>{t("preloader.desktop.part3")}</span>
      </div>
      <div className="texts-container flex items-center text-lg sm:hidden">
        <span>{t("preloader.mobile.part1")} </span>
        <span>{t("preloader.mobile.part2")} </span>
        <span>{t("preloader.mobile.part3")}</span>
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
  );
};

export default Preloader;
