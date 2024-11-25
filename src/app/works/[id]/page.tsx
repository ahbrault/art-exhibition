'use client';

import React, { useState, useEffect, useRef } from 'react';
import { artworks } from '@/data';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import AudioPlayer from '@/components/AudioPlayer';
import { IoPlay } from 'react-icons/io5';

const WorkPreview = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { id } = useParams<{ id: string }>();

  const artwork = artworks.find((art) => art.id.toString() === id);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      const body = document.getElementsByName('body');
      if (body.length === 1) {
        body[0].style.overflow = 'hidden';
      }
    }
  }, [isLoaded]);

  useEffect(() => {
    // Gérer l'overflow du body en fonction de isLoaded
    const body = document.body;
    if (!isLoaded) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }

    // Nettoyage lorsque le composant est démonté
    return () => {
      body.style.overflow = '';
    };
  }, [isLoaded]);

  if (!artwork) return;

  const Loader = () => {
    return (
      <div>
        <div className='overflow-hidden'>
          <div className='fixed inset-0 z-40 flex h-full w-full items-center justify-center'>
            <img
              src={artwork.image}
              alt={artwork.title}
              className='animate-fade-in mx-auto w-full max-w-2xl object-cover transition-transform duration-700 lg:mb-4'
            />
          </div>

          <div className='fixed inset-0 z-40 flex h-full w-full items-center justify-center'>
            <button
              type='button'
              onClick={() => setIsLoaded(true)}
              className='animate-fade-in h-16 w-16 rounded-lg bg-white/75 p-2 text-dark'
            >
              <IoPlay className='mx-auto h-8 w-8' />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='relative min-h-screen bg-white text-dark'>
      <main className='mx-auto max-w-6xl py-32 text-center' ref={contentRef}>
        {!isLoaded ? (
          <Loader />
        ) : (
          <div>
            <AudioPlayer audioSrc={'/musics/Radiohead - Nude.mp3'} />
            <h2 className='animate-fade-in mb-0 text-center text-5xl uppercase opacity-0 md:text-7xl'>
              {artwork.title}
            </h2>
            <h3 className='animate-fade-in taviraj text-center text-3xl uppercase italic opacity-0 md:text-5xl'>
              {artwork.frequency}
            </h3>
            <p className='animate-fade-in mb-0 block text-lg uppercase opacity-0 md:text-2xl lg:hidden'>
              {artwork.size}
              <br /> {artwork.paintType}
            </p>

            <div className='relative'>
              <div className='space-y-24'>
                <div className='artwork-section mt-8 items-start gap-8 transition-all duration-1000 md:gap-12 lg:flex'>
                  <div className='w-full overflow-hidden lg:sticky lg:top-24 lg:w-1/2'>
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className='animate-fade-in max-h-4xl mx-auto mb-12 h-full w-full max-w-4xl object-cover opacity-0 transition-transform duration-700 lg:mb-4'
                    />
                    <p className='animate-fade-in mb-12 hidden text-xl uppercase opacity-0 lg:block'>
                      {artwork.size} - {artwork.paintType}
                    </p>
                  </div>

                  <div className='mx-auto lg:w-1/2'>
                    {artwork.description.map((desc, index) => (
                      <p
                        key={index}
                        className='animate-fade-in mt-0 text-left text-lg text-gray-500 opacity-0'
                      >
                        {desc}
                      </p>
                    ))}

                    <h4 className='animate-fade-in mt-16 text-left text-xl uppercase opacity-0'>
                      {artwork.subTitle}
                    </h4>
                    {artwork.subDescription.map((subDesc, index) => (
                      <p
                        key={`subDescription-${index}`}
                        className='animate-fade-in mt-0 text-left text-lg text-gray-500 opacity-0'
                      >
                        {subDesc}
                      </p>
                    ))}
                  </div>
                </div>
                <p className='animate-fade-in mt-16 text-left text-center uppercase opacity-0'>
                  Pour la suite de la visite, approchez-vous du tableau suivant.
                </p>
                <Link href={`/works/${artwork.id + 1}`}>Next</Link>
              </div>
            </div>
          </div>
        )}
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
