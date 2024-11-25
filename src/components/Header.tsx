'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed left-0 right-0 top-0 z-40 border bg-light bg-opacity-90 p-6 backdrop-blur-sm transition-all duration-300'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between'>
        <Link href='/' className='transition-all duration-300 hover:pl-2'>
          <h1 className='mb-0 text-2xl font-light'>JEAN MARC LARHANTEC</h1>
        </Link>
        <button
          className='space-y-1 transition-all duration-300 hover:opacity-70'
          onClick={() => setIsOpen(!isOpen)}
          type='button'
          aria-label='Toggle menu'
        >
          <div className='h-0.5 w-6 bg-dark'></div>
          <div className='h-0.5 w-6 bg-dark'></div>
          <div className='h-0.5 w-6 bg-dark'></div>
        </button>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } space-x-6 transition-all duration-300`}
        >
          <li>
            <a href='#home' className='hover:text-border'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='hover:text-border'>
              About
            </a>
          </li>
          <li>
            <a href='#contact' className='hover:text-border'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
