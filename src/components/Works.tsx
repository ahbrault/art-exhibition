'use client';

import React, { useEffect, useRef, useState } from 'react';
import { artworks } from '@/data';
import Link from 'next/link';

interface VisibleSections {
  [key: string]: boolean;
}

const Works = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [visibleSections, setVisibleSections] = useState<VisibleSections>({});
  const rafRef = useRef<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const smoothProgress = (targetProgress: number): void => {
    const currentProgress = scrollProgress;

    const animate = (): void => {
      const diff = targetProgress - currentProgress;
      const speed = 0.1;

      if (Math.abs(diff) > 0.1) {
        const updatedProgress = currentProgress + diff * speed;
        setScrollProgress(updatedProgress);
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setScrollProgress(targetProgress);
      }
    };

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      if (!contentRef.current) return;

      const content = contentRef.current;
      const contentTop = content.offsetTop;
      const contentHeight = content.offsetHeight;
      const scrollTop = window.scrollY;

      // Progression basée sur la hauteur de `contentRef`
      const progress =
        ((scrollTop - contentTop) / (contentHeight - window.innerHeight)) * 100;

      // Contrainte entre 0% et 100%
      smoothProgress(Math.min(Math.max(progress, 0), 100));

      const sections =
        document.querySelectorAll<HTMLElement>('.artwork-section');
      const newVisibleSections: VisibleSections = {};

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        newVisibleSections[section.id] = rect.top < window.innerHeight * 0.8;
      });

      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className='relative min-h-screen bg-white text-dark'>
      <div className='mx-auto max-w-6xl px-6 py-32 md:px-12' ref={contentRef}>
        <h2 className='animate-fade-in mb-16 text-center opacity-0'>WORKS</h2>

        <div className='relative'>
          {/* Barre de progression */}
          <div className='absolute left-1/2 top-0 h-full w-px bg-gray-200'>
            <div
              className='w-px origin-top transform bg-dark transition-transform duration-100 ease-out'
              style={{
                height: '100%',
                transform: `scaleY(${scrollProgress / 100})`,
                willChange: 'transform',
              }}
            />
          </div>

          <div className='space-y-24'>
            {artworks.map((artwork, index) => (
              <div
                key={index}
                id={`artwork-${index}`}
                className={`artwork-section flex transform flex-row items-start gap-8 transition-all duration-1000 md:gap-24 ${
                  visibleSections[`artwork-${index}`]
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <div className='w-1/2 overflow-hidden'>
                  <Link href={`/works/${artwork.id}`}>
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className='max-h-md ml-auto h-full w-full max-w-md object-cover transition-transform duration-700 hover:scale-110'
                    />
                  </Link>
                </div>
                <div className='w-1/2'>
                  <Link href={`/works/${artwork.id}`}>
                    <h3 className='mb-0 text-xl font-normal uppercase'>
                      {artwork.title}
                    </h3>
                    <p className='mt-0 text-lg italic'>{artwork.frequency}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
