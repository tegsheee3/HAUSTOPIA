
"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useMediaQuery } from "@utils/useMediaQuery";

const NavBar = () =>{
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

  return(
  <header className='w-full  absolute z-10 bg-gradient-to-b from-blue-300 to-white'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
        />
        <div className="pl-3 font-extrabold text-2xl">
          HAUSTOPIA
        </div>
      </Link>

      {isAboveMediumScreens ? (
      <div className="flex flex-row gap-5">
        <Link href="/" className="flex justify-center items-center pop-up">
          <p className="font-medium text-xl">Home</p>
        </Link>
        <p className="font-thin text-4xl">|</p>
        <Link href="/#about" className="flex justify-center items-center pop-up">
          <p className="font-medium text-xl">Über uns</p>
        </Link>
        <p className="font-thin text-4xl">|</p>
        <Link href="/#contact" className="flex justify-center items-center pop-up">
          <p className="font-medium text-xl">Kontakt</p>
        </Link>
      </div>
      ) : (
        <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-7 w-7 text-red-400 " />
              </button>
      )}

      {!isAboveMediumScreens && isMenuToggled && (
        <div className=" fixed right-0 bottom-0 z-40 h-full w-[300px] drop-shadow-xl bg-gradient-to-l from-blue-300 via-white">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-7 w-7 text-red-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col justify-center items-center gap-10 text-2xl">
            <Link href="/" className=" pop-up">
              <p className="font-medium text-xl">Home</p>
            </Link>
            <Link href="/#about" className=" pop-up">
              <p className="font-medium text-xl">Über uns</p>
            </Link>
            <Link href="/#contact" className=" pop-up">
              <p className="font-medium text-xl">Kontakt</p>
            </Link>
          </div>
        </div>
      )}
    </nav>
    
  </header>
)};

export default NavBar;
