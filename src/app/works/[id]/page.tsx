"use client"

import React, {useState, useEffect, useRef} from 'react';
import {artworks} from "@/data";
import {useParams} from "next/navigation";

interface VisibleSections {
    [key: string]: boolean;
}

const WorkPreview = () => {
    const [visibleSections, setVisibleSections] = useState<VisibleSections>({});
    const rafRef = useRef<number | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const {id} = useParams();

    const artwork = artworks.find(art => art.id.toString() === id);
    console.log('artwork', artwork)

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';

        const handleScroll = (): void => {
            if (!contentRef.current) return;

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

    if (!artwork)
        return;

    return (
        <div className="min-h-screen bg-white text-dark relative">
            <main className="py-32 px-6 md:px-12 max-w-6xl mx-auto" ref={contentRef}>
                <h2 className="mb-16 opacity-0 animate-fade-in text-center uppercase mb-0">{artwork.title}</h2>
                <h3 className="text-xl font-normal mb-0 uppercase text-center">{artwork.frequency}</h3>


                {/* Content Container with Vertical Progress Bar */}
                <div className="relative">

                    <div className="space-y-24">
                        <div
                            id={`artwork-${artwork.id}`}
                            className={`artwork-section gap-8 md:gap-24 items-start transition-all duration-1000 
                                // transform${visibleSections[`artwork-${artwork}`]
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'}`}
                        >
                            <div className="w-1/2 overflow-hidden">
                                <img
                                    src={artwork.image}
                                    alt={artwork.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 max-w-md max-h-md ml-auto"
                                />
                            </div>
                            <div className="w-1/2">
                                <h3 className="text-xl font-normal mb-0 uppercase">{artwork.title}</h3>
                                <p className="text-lg italic mt-0">{artwork?.frequency}</p>
                            </div>
                        </div>
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

export default WorkPreview;
