'use client';

import React, { useState, useEffect, useRef } from 'react';
import { artworks } from '@/data';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import AudioPlayer from '@/components/AudioPlayer';
import { IoPlay } from 'react-icons/io5';
import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from 'react-icons/lia';

const WorkPreview = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { id } = useParams<{ id: string }>();

  const artwork = artworks.find((art) => art.id.toString() === id);
  const currentIndex = artworks.findIndex((art) => art.id.toString() === id);
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
          <button
            type='button'
            onClick={() => setIsLoaded(true)}
            className='pointer'
          >
            <div className='fixed inset-0 z-30 flex h-full w-full items-center justify-center'>
              <img
                src={artwork.image}
                alt={artwork.title}
                className='animate-fade-in mx-auto w-full max-w-2xl max-h-[80vh] object-cover transition-transform duration-700 lg:mb-4'
              />
            </div>

            <div className='fixed inset-0 z-30 flex h-full w-full items-center justify-center'>
              <div className='animate-fade-in inline-flex h-16 w-16 items-center justify-center rounded-lg bg-white/75 p-2 text-dark'>
                <IoPlay className='mx-auto h-8 w-8' />
              </div>
            </div>
          </button>
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
            <AudioPlayer audioSrc={artwork.audioPath} />
            <h2 className='animate-fade-in mb-0 text-center text-4xl uppercase opacity-0 md:text-7xl break-words'>
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

                    <img
                      src={artwork.subImage}
                      className='animate-fade-in mb-8 mt-16 opacity-0 max-h-56 w-full object-cover'
                      alt=''
                    />
                    <h4 className='animate-fade-in text-left text-xl uppercase opacity-0'>
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
                <p className='animate-fade-in mt-24 text-center text-xl font-medium uppercase opacity-0'>
                  {artwork.nextPaintingText}
                </p>
                <div className='mx-auto flex max-w-5xl justify-between'>
                  {(() => {
                    if (currentIndex > 0) {
                      return (
                        <Link
                          href={`/works/${artwork.id - 1}`}
                          className='flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8'
                        >
                          <img
                            src={artworks[currentIndex - 1].image}
                            className='max-w-[100px] md:order-2'
                            alt=''
                          />
                          <span className='inline-flex items-center gap-2 font-medium uppercase md:text-lg text-left'>
                            <LiaLongArrowAltLeftSolid />
                            {artworks[currentIndex - 1].title}
                          </span>
                        </Link>
                      );
                    }
                    return <div className='ml-auto'></div>;
                  })()}
                  {(() => {
                    if (currentIndex < artworks.length - 1) {
                      return (
                        <Link
                          href={`/works/${artwork.id + 1}`}
                          className='flex flex-col items-end gap-4 md:flex-row md:items-center md:gap-8'
                        >
                          <img
                            src={artworks[currentIndex + 1].image}
                            className='max-w-[100px]'
                            alt=''
                          />
                          <span className='inline-flex items-center gap-2 font-medium uppercase md:text-lg text-right'>
                            {artworks[currentIndex + 1].title}
                            <LiaLongArrowAltRightSolid />
                          </span>
                        </Link>
                      );
                    }
                    return null;
                  })()}
                </div>
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
