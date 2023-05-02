"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Philosopher } from "next/font/google";

const philosopher = Philosopher({
  weight: "400",
  subsets: ["latin"],
});

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`bg-white shadow ${philosopher.className}`}>
        <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex-shrink-0 flex items-center'>
              <Link href='/'>
                <Image
                  src='/logo.png'
                  width={40}
                  height={40}
                  className='mx-auto'
                  alt={"logo"}
                />
              </Link>
            </div>
            <div className='uppercase hidden sm:ml-6 sm:flex sm:items-center'>
              <div className='px-3 py-2 text-blue-500 hover:text-gray-900'>
                <Link href='/'>Home</Link>
              </div>

              <div className='px-3 py-2 text-blue-500 hover:text-gray-900'>
                <Link href='/blog'>Blog</Link>
              </div>
            </div>

            <div className='-mr-2 flex items-center sm:hidden'>
              <button
                type='button'
                className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-green-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className='sr-only'>Open main menu</span>

                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          id='mobile-menu'
        >
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <Link
              href='/'
              className='block px-3 py-2 text-base font-medium text-green-500 hover:text-gray-900'
            >
              Home
            </Link>
            <Link
              href='/blog'
              className='block px-3 py-2 text-base font-medium text-green-500 hover:text-gray-900'
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
