import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { useTranslation } from "react-i18next";
import ScrollProgressBar from "./ScrollProgressBar";
import { Button } from "@heroui/react";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const changeNavbar = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeNavbar();
    window.addEventListener("scroll", changeNavbar);
  });

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transitions-all transition-colors duration-500 ease-in-out ${
        navbar ? "bg-background" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="md:flex-1 flex-none flex items-center gap-4"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          aria-label="Ma photo de profil"
        >
          <div className="border-primary bg-background dark:bg-[url(/src/assets/titoudark.webp)] bg-[url(/src/assets/titoulight.webp)] bg-cover bg-no-repeat bg-center cursor-pointer transition-all duration-300 min-w-8 min-h-8 rounded-full ring-2 ring-primary"></div>
          <p className="hidden xs:block text-foreground text-xl sm:text-[12px] md:text-[18px] font-bold cursor-pointer md:flex">
            Titouan Hirsch
          </p>
        </Link>
        <div className="md:justify-center items-center flex flex-1 w-1/2 ms-4 md:mx-0 ">
          <i
            className={`dark:text-primary text-stone-500 fa-solid fa-moon hover:text-black mr-2 md:mr-3 ms-1 fa-md md:fa-xl`}
          ></i>
          <input
            className="container_toggle"
            type="checkbox"
            id="switch"
            name="mode"
            onChange={handleThemeSwitch}
          />
          <label htmlFor="switch" className="switch-mode sm:mx-0">
            Toggle
          </label>
          <i
            className={`fa-solid fa-sun dark:text-secondary text-foreground/80 ms-2 md:ms-3 fa-md md:fa-xl`}
          ></i>
        </div>
        <div className="flex flex-1 justify-end">
          <a href="#contact">
            <Button
              className="text-white"
              size="sm"
              color="primary"
              endContent={
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
              }
            >
              {t("nav.hireMe")}
            </Button>
          </a>
        </div>
      </div>
      {navbar && <ScrollProgressBar navbar={navbar} />}
    </nav>
  );
};

export default Navbar;
