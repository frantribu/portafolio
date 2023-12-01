"use client";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const closeNavbar = () => setNavbar(false);

  return (
    <div className='mb-20 font-serif'>
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Image src="/img/logo-portafolio.png" alt='' width={45} height={45} />
              <div className="md:hidden">
                <button
                  className="p-2 text-black rounded-md outline-none border-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 6l16 0" />
                      <path d="M4 12l16 0" />
                      <path d="M4 18l16 0" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="sm:pb-2 pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-azul-especial  border-azul-especial  md:hover:text-azul-especial md:hover:bg-transparent cursor-pointer">
                  <ScrollLink
                    to="sobre-mi"
                    spy={true}
                    smooth={true}
                    offset={-300}
                    duration={500}
                    onClick={closeNavbar}
                  >
                    Sobre mi
                  </ScrollLink>
                </li>

                <li className="sm:pb-2 pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-azul-especial  border-azul-especial  md:hover:text-azul-especial md:hover:bg-transparent cursor-pointer">
                  <ScrollLink
                    to="habilidades"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={closeNavbar}
                  >
                    Habilidades
                  </ScrollLink>
                </li>

                <li className="sm:pb-2 pb-6 text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-azul-especial  border-azul-especial  md:hover:text-azul-especial md:hover:bg-transparent cursor-pointer">
                  <ScrollLink
                    to="proyectos"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={closeNavbar}
                  >
                    Proyectos
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className=' border-slate-400 mx-2' />
      </nav>
    </div>
  );
}

export default NavBar;