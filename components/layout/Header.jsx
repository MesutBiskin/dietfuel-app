"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa"
import Search from "../ui/Search"
import { GiHotMeal } from "react-icons/gi";
import Logo from "components/ui/Logo"
import Link from "next/link"



function Header() {
  const [isSearchModal, setIsSearchModal] = useState(false) // setISSearchModal true ise onu degistirmeye yariyor.
  // yazdiracagimiz yerlerde isSearchModal i kullaniyoruz degisecek yerde setIsSearchModal
  const [isMenuModal, setIsMenuModal] = useState(false)

  const router = useRouter();
  

  return (
    <div className="h-[5.5rem] bg-secondary  ">
      <div className="container mx-auto text-white flex
    justify-between items-center h-full">

        <Logo />

        <nav className={`sm:static absolute top-0 left-0 grid 
        place-content-center sm:w-auto sm:h-auto w-full h-screen
         sm:text-white text-black sm:bg-transparent bg-white ${isMenuModal != true && "hidden md:block"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/about">About</Link> 
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="reservation">Book Table</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login" >
            <FaUserAlt className="hover:text-primary transition-all cursor-pointer" />
          </Link>

          <Link href="/cart" >
            <FaShoppingCart className="hover:text-primary transition-all cursor-pointer" />
          </Link>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all cursor-pointer" />
          </button>
          <a href="#" className="md:inline-block hidden sm">
            <button className="btn-primary">Order Online</button>
          </a>
          <button className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(!isMenuModal)}>
            <GiHotMeal className="text-xl hover:text-primary" />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header
