'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

interface NavLink {
  name: string;
  href: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks: NavLink[] = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/#about',
    },
    {
      name: 'Works',
      href: '/#works',
    },
  ];

  const menuVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
        opacity: { duration: 0.3 },
      },
    },
    closed: {
      y: '-100%',
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
        opacity: { duration: 0.2 },
      },
    },
  };

  const linkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
        opacity: { duration: 0.5 },
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
        opacity: { duration: 0.5 },
      },
    },
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border bg-light bg-opacity-90 p-6 backdrop-blur-sm transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="transition-all duration-300 hover:pl-2">
          <h1 className="mb-0 text-2xl font-light">JEAN MARC LARHANTEC</h1>
        </Link>
        <button
          className="space-y-0.5 transition-all duration-300 hover:space-y-1.5 hover:opacity-70"
          onClick={toggleMenu}
          type="button"
          aria-label="Toggle menu"
        >
          <div className="h-0.5 w-6 bg-dark transition-all duration-300"></div>
          <div className="h-0.5 w-6 bg-dark transition-all duration-300"></div>
          <div className="h-0.5 w-6 bg-dark transition-all duration-300"></div>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed left-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-white"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="absolute top-10 right-10 cursor-pointer transition-all duration-300 hover:opacity-70">
              {/*<X size={32} onClick={toggleMenu} />*/}
              <IoMdClose onClick={toggleMenu} className="h-10 w-10" />

            </div>
            {navLinks.map((navLink) => (
              <motion.div
                key={`navlink-${navLink.name}`}
                className="mb-12 text-7xl uppercase transition-all duration-300 hover:opacity-70"
                variants={linkVariants}
                onClick={toggleMenu}
              >
                <Link href={navLink.href}>{navLink.name}</Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
