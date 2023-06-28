import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, logolight, menu, close, menulight, closelight } from '../assets';

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  })

  const changeNavbar = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeNavbar()
    window.addEventListener("scroll", changeNavbar)
  })



  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }


  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${navbar ? "bg-primary dark:bg-stone-200" : "bg-transparent"} `}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={ theme !== "dark" ? logo : logolight } alt="logo" className="w-9 h-9 object-contain"/>
          <p className="text-white dark:text-stone-700 text-[18px] font-bold cursor-pointer flex">Titouan Hirsch</p>
        </Link>
        <i className= {`fa-solid ${ theme === "dark" ? "fa-moon" : "fa-sun" } hidden sm:block fa-xl text-secondary dark:text-stone-500 hover:text-white dark:hover:text-black`} onClick={handleThemeSwitch}></i>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className={`text-secondary dark:text-stone-500 hover:text-white dark:hover:text-black text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <i className= {`fa-solid ${ theme === "dark" ? "fa-moon" : "fa-sun" } fa-xl text-secondary dark:text-stone-500 hover:text-white dark:hover:text-black mr-12`} onClick={handleThemeSwitch}></i>
          {theme !== "dark" && (
            <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer dark:text-stone-700" onClick={() => setToggle(!toggle)}/>
          )}
          {theme === "dark" && (
            <img src={toggle ? closelight : menulight} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer dark:text-stone-700" onClick={() => setToggle(!toggle)}/>
          )}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id} className={`${ active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => {setActive(link.title); setToggle(!toggle) }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
