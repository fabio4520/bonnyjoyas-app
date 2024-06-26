'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.png';
import style from './navbar.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import NavItems from './NavItems';
import Link from 'next/link';


export default function Navbar() {
  const [showItems, setShowItems] = useState(false);

  const toggleItems = () => {
    setShowItems(!showItems);
  };

  return (
    <nav className={`${style.nav} ${showItems ? " h-full w-full" : ""}`}>
      <div className='flex justify-between w-full md:justify-center'>
        <Link
        href={'/landing'}
        >
          <Image
            src={logo}
            alt='Bonny Joyas logo'
            width={80}
            height={80}
          />
        </Link>
        <button
          onClick={toggleItems}
          aria-expanded={showItems ? 'true' : 'false'}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-primary-700 dark:focus:ring-primary-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <AnimatePresence>
        <NavItems showItems={ showItems} toggleItems={toggleItems}/>
      </AnimatePresence>
    </nav>
  );
}
