import { useState } from 'react'

import { close, logo, menu } from '../assets'
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='w-full flex justify-between py-6 items-center navbar'>
      <div className="flex justify-start items-center">
        {/* Logo */}
        <img src={logo} alt='logo' className='w-32 h-6 ml-10' />
      </div>


      {/* Large menu */}

      <ul className='list-none hidden justify-end items-center flex-1
      xs:hidden sm:hidden smp:hidden md:hidden lg:flex '>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length  - 1 ? 'mr-0' : 'mr-10'}  text-[white]`}>
            <a href={`#&{nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Medium menu */}

      <ul className='list-none hidden justify-end items-center flex-1
       xs:hidden sm:hidden smp:hidden md:flex lg:hidden '>
        {navLinks.slice(0, navLinks.length - 1).map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length  - 1 ? 'mr-0' : 'mr-10'} text-[white]`}>
            <a href={`#&{nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        
        <li className="relative font-poppins font-normal cursor-pointer text-[16px] text-[white] group">
          <a href="#">
            More &#9662;
          </a>   
          <ul className='list-none absolute left-0 mt-2 bg-black-gradient rounded-md shadow-lg py-2 px-4 z-10 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible'>
            <li key={navLinks[navLinks.length - 1].id} className="font-poppins font-normal cursor-pointer text-[16px] text-white">
              {navLinks[navLinks.length - 1].title}
            </li>
          </ul>
        </li>
      </ul>

      {/* Small Plus menu */}
      
      <ul className='list-none hidden justify-end items-center flex-1
      xs:hidden sm:hidden smp:flex md:hidden lg:hidden '>
        {navLinks.slice(0, navLinks.length - 2).map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length  - 1 ? 'mr-0' : 'mr-10'} text-[white]`}>
            <a href={`#&{nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        
        <li className="relative font-poppins font-normal cursor-pointer text-[16px] text-[white] group">
          <a href="#">
            More &#9662;
          </a>   
          <ul className='list-none absolute left-0 mt-2 bg-black-gradient rounded-md shadow-lg py-2 px-4 z-10 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible'>
            <li key={navLinks[navLinks.length - 2].id} className="font-poppins font-normal cursor-pointer text-[16px] text-white">
              {navLinks[navLinks.length - 2].title}
            </li>
            <li key={navLinks[navLinks.length - 1].id} className="font-poppins font-normal cursor-pointer text-[16px] text-white">
              {navLinks[navLinks.length - 1].title}
            </li>
          </ul>
        </li>
      </ul>      

      {/* Small menu */}

      <ul className='list-none hidden justify-end items-center flex-1
      xs:hidden sm:flex smp:hidden md:hidden lg:hidden '>
        {navLinks.slice(0, navLinks.length - 3).map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length  - 1 ? 'mr-0' : 'mr-10'} text-[white]`}>
            <a href={`#&{nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        
        <li className="relative font-poppins font-normal cursor-pointer text-[16px] text-[white] group">
          <a href="#">
            More &#9662;
          </a>   
          <ul className='list-none absolute left-0 mt-2 bg-black-gradient rounded-md shadow-lg py-2 px-4 z-10 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible w-44'>
            <li key={navLinks[navLinks.length - 3].id} className="font-poppins font-normal cursor-pointer text-[16px] text-white">
              {navLinks[navLinks.length - 3].title}
            </li>
            <li key={navLinks[navLinks.length - 2].id} className="font-poppins font-normal cursor-pointer text-[16px] text-white">
              {navLinks[navLinks.length - 2].title}
            </li>
            <li key={navLinks[navLinks.length - 1].id} className="font-poppins font-normal cursor-pointer text-[16px] text-white">
              {navLinks[navLinks.length - 1].title}
            </li>
          </ul>
        </li>
      </ul>

      {/* Mobile menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={showMenu ? close : menu}
          alt="menu"
          className="w-[16px] h-[16px] object-contain mr-10"
          onClick={() => setShowMenu(!showMenu)}
        />

        <div
          className={`${
            !showMenu ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

