"use client"

import React, {useState, useEffect, useRef} from 'react';
import {artworks} from "@/data";
import Link from "next/link";

interface VisibleSections {
    [key: string]: boolean;
}

const Works = () => {
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const [visibleSections, setVisibleSections] = useState<VisibleSections>({});
    const progressRef = useRef<number>(0);
    const rafRef = useRef<number | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const smoothProgress = (targetProgress: number): void => {
        progressRef.current = progressRef.current || 0;

        const animate = (): void => {
            const diff = targetProgress - progressRef.current;
            const speed = 0.1;

            if (Math.abs(diff) > 0.1) {
                progressRef.current += diff * speed;
                setScrollProgress(progressRef.current);
                rafRef.current = requestAnimationFrame(animate);
            } else {
                progressRef.current = targetProgress;
                setScrollProgress(targetProgress);
            }
        };

        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }

        rafRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';

        const handleScroll = (): void => {
            if (!contentRef.current) return;

            const contentTop = contentRef.current.offsetTop;
            const contentHeight = contentRef.current.scrollHeight;
            const scrollTop = window.scrollY - contentTop;
            const viewportHeight = window.innerHeight;

            // Calculate progress only after the title
            if (scrollTop < 0) {
                smoothProgress(0);
            } else {
                const scrollPercent = Math.min((scrollTop / (contentHeight - viewportHeight)) * 100, 100);
                smoothProgress(scrollPercent);
            }

            const sections = document.querySelectorAll<HTMLElement>('.artwork-section');
            const newVisibleSections: VisibleSections = {};

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight * 0.8;
                newVisibleSections[section.id] = isVisible;
            });

            setVisibleSections(newVisibleSections);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.documentElement.style.scrollBehavior = 'auto';
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-white text-dark relative">
            {/* Header */}


            {/* Main Content */}
            <main className="py-32 px-6 md:px-12 max-w-6xl mx-auto" ref={contentRef}>
                <h2 className="mb-16 opacity-0 animate-fade-in text-center">WORKS</h2>

                {/* Content Container with Vertical Progress Bar */}
                <div className="relative">
                    {/* Vertical Progress Bar */}
                    <div className="absolute left-1/2 top-0 w-px h-full bg-gray-200">
                        <div
                            className="w-px bg-dark transform origin-top transition-transform duration-100 ease-out"
                            style={{
                                height: '100%',
                                transform: `scaleY(${scrollProgress / 100})`,
                                willChange: 'transform'
                            }}
                        />
                    </div>

                    <div className="space-y-24">
                        {artworks.map((artwork, index) => (
                            <div
                                key={index}
                                id={`artwork-${index}`}
                                className={`artwork-section flex flex-row gap-8 md:gap-24 items-start transition-all duration-1000 transform 
                  ${visibleSections[`artwork-${index}`]
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'}`}
                            >
                                <div className="w-1/2 overflow-hidden">
                                    <Link href={`/works/${artwork.id}`}>

                                        <img
                                            src={artwork.image}
                                            alt={artwork.title}
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 max-w-md max-h-md ml-auto"
                                        />
                                    </Link>
                                </div>
                                <div className="w-1/2">
                                    <h3 className="text-xl font-normal mb-0 uppercase">{artwork.title}</h3>
                                    <p className="text-lg italic mt-0">{artwork.frequency}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <style jsx global>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fadeIn 1s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default Works;
