"use client";
import React, { useState,useEffect } from "react";
import Container from "./Container";
import Link from "next/link";
import { navLinks } from "@/constants/data";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
export default function Navbar() {
  const [nav,setNav] = useState(false)
  const [menu,setMenu] = useState(false)
  const pathname = usePathname();
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setNav(true);
      else setNav(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`py-[20px] ${nav ? "sticky left-0 top-0 mt-[-8px]": null}`}>
      <Container>
        <nav className="flex items-center justify-between">
          <div className="logo">
            <img src="/letter-h.png" className="md:w-[90px] md:h-[90px] w-[50px] h-[50px]" />
          </div>
          <ul className="hidden sm:flex gap-4 items-center shadow-md ring-1 p-[12px] rounded-full ring-zinc-200 backdrop-blur-md">
            {navLinks.map((item, i) => {
              return (
                <Link
                  href={item.href}
                  key={i}
                  className={`${
                    pathname === item.href ? "bg-green text-white" : null
                  } 
                        cursor-pointer text-[15px] text-black rounded-[30px] px-4 py-2 transition-all duration-200 hover:scale-105
                        `}
                >
                  {item.name}
                </Link>
              );
            })}
          </ul>
          <FiMenu onClick={()=> setMenu(true)} className={`text-green rounded-md shadow-md w-[30px] h-[30px] cursor-pointer block sm:hidden text-[20px]`}/>
        </nav>
      </Container>
      {/* =============modile_CODE============== */}
     {menu && <div class={`fixed z-20 top-0 sm:hidden block left-0 w-full h-screen bg-white z-10`}>
      <RxCross2 onClick={()=> setMenu(false)} className="text-[28px] absolute right-[20px] top-[30px] cursor-pointer"/>
      <ul className={`flex flex-col gap-4 items-center justify-center h-screen p-[12px]`}>
            {navLinks.map((item, i) => {
              return (
                <Link
                  href={item.href}
                  key={i}
                  className={`${
                    pathname === item.href ? "bg-green text-white" : null
                  } 
                        cursor-pointer text-[15px] text-black rounded-[30px] px-4 py-2 transition-all duration-200 hover:scale-105
                        `}
                >
                  {item.name}
                </Link>
              );
            })}
          </ul>
      </div>}
    </div>
  );
}
