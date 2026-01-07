import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, menulight, closelight } from "../assets";
import { Avatar } from "@heroui/react";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

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
          className="flex-1 xs:flex-none flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="border-primary bg-background dark:bg-[url(/src/assets/titoudark.webp)] bg-[url(/src/assets/titoulight.webp)] bg-cover bg-no-repeat bg-center cursor-pointer transition-all duration-300 w-8 h-8 rounded-full ring-2 ring-primary"></div>
          <p className="hidden xs:block text-white dark:text-stone-700 text-[18px] sm:text-[12px] md:text-[18px] font-bold cursor-pointer flex">
            Titouan Hirsch
          </p>
        </Link>
        <div className="justify-center items-center mx-3 flex xs:flex-1 xs:ms-16 xs:w-full md:w-1/2 sm:ms-0 sm:me-0 ">
          <i
            className={`dark:text-primary text-stone-500 fa-solid fa-moon hover:text-black mr-3 ms-1 xs: fa-lg sm:fa-xl`}
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
            className={`fa-solid fa-sun dark:text-secondary text-foreground/80 ms-3 xs: fa-lg sm:fa-xl`}
          ></i>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-base-content hover:text-foreground sm:text-[12px] md:text-[18px] font-medium cursor-pointer `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {theme !== "dark" && (
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer dark:text-stone-700"
              onClick={() => setToggle(!toggle)}
            />
          )}
          {theme === "dark" && (
            <img
              src={toggle ? closelight : menulight}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer dark:text-stone-700"
              onClick={() => setToggle(!toggle)}
            />
          )}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
