"use client";

import React, { useState } from "react";
import Button from "./Button";
import { openWhatsApp } from "@/services/openWhatsApp";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="py-2 text-white bg-black">
      <div className="container mx-auto flex justify-between items-center w-11/12 lg:w-3/4">
        <div className="text-2xl font-bold">
          <img src="/svg/logo.svg" alt="logo" />
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle menu">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:block absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-black lg:bg-transparent z-20 lg:z-auto p-6 lg:p-0`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-16 text-xl">
            <li>
              <a href="#home" className="hover:text-gray-400 transition duration-200">
                HOME
              </a>
            </li>
            <li>
              <a href="#diferenciais" className="hover:text-gray-400 transition duration-200">
                DIFERENCIAIS
              </a>
            </li>
            <li>
              <a href="#sobre-nos" className="hover:text-gray-400 transition duration-200">
                QUEM SOMOS
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-gray-400 transition duration-200">
                SERVIÇOS
              </a>
            </li>
          </ul>

          {/* Mobile Button inside the Hamburger Menu */}
          <div className="mt-6 lg:hidden">
            <Button onClick={openWhatsApp} bgColor="default">
              Contrate hoje mesmo
            </Button>
          </div>
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block w-56">
          <Button onClick={openWhatsApp} bgColor="default">
            Contrate hoje mesmo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
