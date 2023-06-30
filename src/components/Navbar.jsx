import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, logolight, menu, close, menulight, closelight } from '../assets';

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [disable3d, setDisable3d] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  })

  useEffect(() => {
    if (disable3d === true) {
      document.documentElement.classList.add("hide3d")
    } else {
      document.documentElement.classList.remove("hide3d")
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

  const handleDisable3dSwitch = () => {
    setDisable3d(disable3d ? false : true)
  };


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
        <div className='justify-center md:justify-end items-center mx-3 flex xs:flex-1 xs:ms-16 xs:w-full md:w-1/2 md:ms-0 md:me-0 me-8'>
            <i className= {`text-[#5877FA] dark:text-stone-500 fa-solid fa-moon dark:hover:text-black mr-3 ms-1 xs: fa-xl`}></i>
            <input className="container_toggle" type="checkbox" id="switch" name="mode" onChange={handleThemeSwitch} />
            <label for="switch" className="switch-mode md:mx-0">Toggle</label>
            <i className= {`fa-solid fa-sun text-secondary dark:text-[#1d1836] ms-3 xs: fa-xl`}></i>
        </div>
        <div className='hidden justify-start items-center flex-1 md:flex ms-8'>
            <p className='text-secondary font-bold dark:text-stone-500 dark:text-[#1d1836] me-3'>3D</p>
            <input className="container_toggle_3d" type="checkbox" id="switch-3d" name="mode-3d" onChange={handleDisable3dSwitch} />
            <label for="switch-3d" className="switch-mode-3d md:mx-0">Toggle 3d</label>
            <i class="text-secondary dark:text-stone-500 fa-solid fa-power-off dark:hover:text-black ms-3 ms-1 xs: fa-xl"></i>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className={`text-secondary dark:text-stone-500 hover:text-white dark:hover:text-black text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
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
