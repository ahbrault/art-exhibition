"use client";

import React, {useState} from 'react';
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <header
            className="p-6 fixed top-0 left-0 right-0 z-40 bg-light bg-opacity-90 backdrop-blur-sm transition-all duration-300 border ">
            <nav className="flex justify-between items-center max-w-6xl mx-auto">
                <Link href="/">
                    <h1 className="text-2xl mb-0 font-light">JEAN MARC LARHANTEC</h1>
                </Link>
                <button
                    className="space-y-1 transition-all duration-300 hover:opacity-70"
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-0.5 bg-dark"></div>
                    <div className="w-6 h-0.5 bg-dark"></div>
                    <div className="w-6 h-0.5 bg-dark"></div>
                </button>
                <ul
                    className={`${
                        isOpen ? 'block' : 'hidden'
                    } space-x-6 transition-all duration-300`}
                >
                    <li>
                        <a href="#home" className="hover:text-border">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-border">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-border">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
