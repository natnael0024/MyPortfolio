'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Moon, Sun, Menu, X } from 'lucide-react'; // ← Add icons
import { TbCircleDashedLetterN } from "react-icons/tb";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = stored === 'dark' || (!stored && prefersDark);
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };
return (
    <nav className="bg-white dark:bg-[#1C1C27] duration-200 fixed top-0 left-0 right-0 z-50 py-2 shadow-xl shadow-secondary-300/5 dark:shadow-gray-950/10">
      <div className=" mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className=' flex flex-shrink-0 items-center gap-2'>
            <div className=' bg-gradient-to-tr from-primary-500 to-primary-600 p-2 px-4 w-12 h-12 flex items-center justify-center rounded-xl font-bold text-white text-xl shadow-lg shadow-primary-500/50 dark:shadow-primary-800'>
            <span className=' '><TbCircleDashedLetterN size={40}/></span>
            </div>
            <span className=' text-xl font-bold text-secondary-600'>Natnael</span>
        </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2 space-x-8 text-md">
            <NavLink href="/">
                <span className='text-secondary-700'>Home</span>
            </NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <div className='hidden md:flex'>
             {/* Dark Mode Toggle */}
             <button
              onClick={toggleTheme}
              className="text-gray-800 dark:text-gray-100 mr-4  w-10 h-10 flex items-center justify-center rounded-lg focus:outline-none"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="/nResume8-7-25.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=' bg-gradient-to-r from-secondary-400 to-secondary-600 text-white p-2 px-6 rounded-full shadow-xl shadow-secondary-500/45 text-md font-semibold hover:shadow-none hover:scale-105 duration-300'>
                Download Resume
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 dark:text-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col items-center space-y-3 bg-white dark:bg-[#1C1C27]">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <button
              onClick={toggleTheme}
              className="text-gray-800 dark:text-gray-100 mr-4  w-10 h-10 flex items-center justify-center rounded-lg focus:outline-none"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
              href="/nResume8-7-25.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=' bg-gradient-to-r from-secondary-400 to-secondary-600 text-white p-2 px-6 rounded-full shadow-xl shadow-secondary-500/45 text-md font-semibold hover:shadow-none hover:scale-105 duration-300'>
                Download Resume
              </button>
          </a>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 font-medium"
    >
      {children}
    </Link>
  );
}
