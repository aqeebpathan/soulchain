"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // Get all sections
      const scrollTop = window.scrollY || document.documentElement.scrollTop; // Get scroll position
      let newActiveSection = "";

      // Find the first visible section from the top
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollTop >= sectionTop) {
          newActiveSection = section.id;
        }
      });

      setActiveSection(newActiveSection);
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Initial update
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(activeSection);
  return (
    <nav className="sticky top-0 z-50 bg-transparent sm:px-16 px-6 nav-gradient">
      <div className="2xl:max-w-[1000px] mx-auto lg:text-sm relative">
        <div className="flex justify-between py-6">
          <div className="flex items-center">
            <a href="#" className="text-2xl">
              SoulChain
            </a>
          </div>

          <ul className="hidden lg:flex items-center text-[12px] bg-[#e9efff] text-[#0d1729] rounded-3xl self-center overflow-hidden">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`px-4 py-2 hover:bg-[#fff] ${
                  link.href === "#" + activeSection ? "bg-[#fff]" : ""
                }`}
              >
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center items-center bg-[#6816b9] py-2 px-8 rounded-3xl text-[12px] group cursor-pointer">
            <a href="#" className="pr-2">
              Waitlist
            </a>
            <Image
              src="/right-arrow-white.svg"
              alt="right-arrow"
              height={32}
              width={32}
              className="transition-transform transform-gpu ease-in-out group-hover:translate-x-5"
            />
          </div>

          <div className="flex lg:hidden bg-[#6816b9] rounded-full p-2">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <Image src="/menu.svg" alt="menu" width={32} height={32} />
            </button>
          </div>
        </div>
        <div
          className={`fixed top-0 right-0 z-20 bg-[#6816b9]  w-full h-[100vh] lg:hidden transition-transform duration-300 ease-in-out transform ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={toggleMenu}
        >
          <div className="bg-[#1d1d1d] m-2 p-5 rounded-[39px] text-3xl  ">
            <div className="flex justify-between">
              <div className="flex items-center">
                <a href="#" className="text-2xl">
                  SoulChain
                </a>
              </div>

              <button onClick={toggleMenu}>
                {!menuOpen ? (
                  <Image src="/menu.svg" alt="menu" width={32} height={32} />
                ) : (
                  <Image src="/close.svg" alt="close" width={48} height={48} />
                )}
              </button>
            </div>
            <h3 className="text-[12px]">Menu:</h3>
            <ul className="mt-6 mb-12">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="border-b border-[#e9efff] py-2 hover:text-[#6816b9]"
                >
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>

            <div className="flex justify-center items-center bg-[#6816b9] py-2 px-8 rounded-[64px] text-[12px]">
              <a href="#" className="pr-2">
                Waitlist
              </a>
              <Image
                src="/right-arrow-white.svg"
                alt="right-arrow"
                height={32}
                width={32}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
