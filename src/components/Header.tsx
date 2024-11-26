'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  name: string;
  href: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const main = document.getElementById('main');

    if (isMenuOpen) {
      main?.classList.add('blur-sm');
      document.body.style.overflow = 'hidden';
    } else {
      main?.classList.remove('blur-sm');
      document.body.style.overflow = '';
    }

    return () => {
      main?.classList.remove('blur-sm');
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
        opacity: { duration: 0.3 },
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <header className='fixed left-0 right-0 top-0 z-40 border bg-light bg-opacity-90 p-6 backdrop-blur-sm transition-all duration-300'>
      <div className='mx-auto flex max-w-3xl items-center justify-between lg:max-w-6xl'>
        <Link href='/' className='transition-all duration-300 hover:pl-2'>
          <h1 className='mb-0 text-2xl font-light'>JEAN MARC LARHANTEC</h1>
        </Link>
        <button
          className={`space-y-0.5 transition-all duration-300 hover:space-y-1.5 hover:opacity-70 ${isMenuOpen ? 'hidden' : ''}`}
          onClick={toggleMenu}
          type='button'
          aria-label='Toggle menu'
        >
          <div className='h-0.5 w-6 bg-dark transition-all duration-300'></div>
          <div className='h-0.5 w-6 bg-dark transition-all duration-300'></div>
          <div className='h-0.5 w-6 bg-dark transition-all duration-300'></div>
        </button>
        <div
          className={`z-[51] cursor-pointer transition-all duration-300 hover:opacity-70 ${!isMenuOpen ? 'hidden' : ''}`}
          onClick={toggleMenu}
          aria-label='Close menu'
        >
          <div className='absolute h-0.5 w-6 rotate-45 bg-dark'></div>
          <div className='relative h-0.5 w-6 -rotate-45 bg-dark'></div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className='fixed inset-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-white/90 backdrop-blur-xl'
            variants={menuVariants}
            initial='closed'
            animate='open'
            exit='closed'
          >
            {navLinks.map((navLink) => (
              <motion.div
                key={`navlink-${navLink.name}`}
                variants={linkVariants}
                onClick={toggleMenu}
                className='pb-12 transition-transform duration-300'
              >
                <Link
                  href={navLink.href}
                  className='block transform text-7xl uppercase transition-transform duration-300 hover:scale-105'
                >
                  {navLink.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
