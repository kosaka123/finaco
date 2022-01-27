import { MenuIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../Picture/logo.png";

function Navbar() {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const [navbarVisibility, setNavbarVisibility] = useState(false);

  // const changeBackground = () => {
  //   if (window.scrollY >= 80) {
  //     setNavbarVisibility(true);
  //   } else {
  //     setNavbarVisibility(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeBackground);
  // });

  return (
    <nav className="flex items-center bg-transparent p-3 flex-wrap sticky top-0 z-50  bg-green-700">
      <Link href="/">
        <a className="p-2 mr-4 inline-flex items-center">
          <img
            src="logo.png"
            alt={Logo}
            layout="fixed"
            height="50px"
            width="50px"
            className="sm:opacity-0 lg:opacity-100"
          />
          <span className="sm:text-6xl lg:text-2xl text-white font-bold uppercase tracking-wide ml-2">
            Finaco
          </span>
        </a>
      </Link>
      <button
        onClick={() => setMenuVisibility(!isMenuVisible)}
        className=" w-1/5 text-white inline-flex p-3  rounded lg:hidden ml-auto"
      >
        <MenuIcon className="w-full" />
      </button>

      <div
        className={`${
          isMenuVisible ? "max-h-full" : "h-0"
        }  w-full lg:h-full lg:inline-flex lg:flex-grow lg:w-auto overflow-hidden`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto flex flex-col">
          <Link href="/about">
            <a className="sm:text-4xl lg:text-xl lg:inline-flex lg:w-auto px-3 p-2 rounded text-gray-400 hover:text-white text-lg">
              <span>關於樺齡</span>
            </a>
          </Link>

          <Link href="/news">
            <a className="sm:text-4xl lg:text-xl lg:inline-flex lg:w-auto px-3 p-2 rounded text-gray-400 hover:text-white text-lg">
              <span>最新消息</span>
            </a>
          </Link>

          <Link href="/product1">
            <a className="sm:text-4xl lg:text-xl lg:inline-flex lg:w-auto px-3 p-2 rounded text-gray-400 hover:text-white text-lg">
              <span>强身如樺系列</span>
            </a>
          </Link>

          <Link href="/product2">
            <a className="sm:text-4xl lg:text-xl lg:inline-flex lg:w-auto px-3 p-2 rounded text-gray-400 hover:text-white text-lg">
              <span>凍齡美麗系列</span>
            </a>
          </Link>

          <Link href="/contact">
            <a className="sm:text-4xl lg:text-xl lg:inline-flex lg:w-auto px-3 p-2 rounded text-gray-400 hover:text-white text-lg">
              <span>聯絡我們</span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
