'use client';

import React, { useRef } from 'react';
import { artworks } from '@/data';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import AudioPlayer from '@/components/AudioPlayer';
import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from 'react-icons/lia';
import Image from 'next/image';
import Section from '@/components/Section';

const WorkPreview = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const artwork = artworks.find((art) => art.slug === slug);
  const currentIndex = artworks.findIndex((art) => art.slug === slug);

  if (!artwork) {
    setTimeout(() => {
      router.push('/#works');
    }, 2000);

    return (
      <div className='flex h-screen flex-col items-center justify-center'>
        <p className='text-xl'>Oeuvre non trouvée.</p>
        <p className='text-sm font-light opacity-50'>Redirection en cours...</p>
      </div>
    );
  }

  return (
    <Section ref={contentRef}>
      <AudioPlayer audioSrc={artwork.audioPath} />
      <div className='text-center'>
        <h2 className='animate-fade-in mb-0 break-words text-4xl uppercase opacity-0 md:text-7xl'>
          {artwork.title}
        </h2>
        <h3 className='animate-fade-in taviraj text-3xl uppercase italic opacity-0 md:text-5xl'>
          {artwork.frequency}
        </h3>
        <p className='animate-fade-in mb-0 block text-lg uppercase opacity-0 md:text-2xl lg:hidden'>
          {artwork.size}
          <br /> {artwork.paintType}
        </p>
      </div>

      <div className='relative'>
        <div className='space-y-24'>
          <div className='artwork-section mt-8 items-start gap-8 transition-all duration-1000 md:gap-12 lg:flex'>
            <div className='w-full overflow-hidden lg:sticky lg:top-24 lg:w-1/2'>
              <Image
                src={artwork.image}
                alt={artwork.title}
                height={850}
                width={550}
                className='animate-fade-in max-h-4xl mx-auto mb-12 h-full w-full max-w-4xl object-cover opacity-0 transition-transform duration-700 lg:mb-4'
              />
              <p className='animate-fade-in mb-12 hidden text-center text-xl uppercase opacity-0 lg:block'>
                {artwork.size} - {artwork.paintType}
              </p>
            </div>

            <div className='mx-auto lg:w-1/2'>
              {artwork.description.map((desc, index) => (
                <p
                  key={index}
                  className='animate-fade-in mt-0 text-lg text-gray-500 opacity-0'
                >
                  {desc}
                </p>
              ))}

              <Image
                src={artwork.subImage}
                alt={artwork.title}
                height={224}
                width={550}
                className='animate-fade-in mb-8 mt-16 max-h-40 w-full object-cover opacity-0'
              />
              <h4 className='animate-fade-in text-xl uppercase opacity-0'>
                {artwork.subTitle}
              </h4>
              {artwork.subDescription.map((subDesc, index) => (
                <p
                  key={`subDescription-${index}`}
                  className='animate-fade-in mt-0 text-lg text-gray-500 opacity-0'
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
            {currentIndex > 0 ? (
              <Link
                href={`/works/${artworks[currentIndex - 1].slug}`}
                className='flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8'
              >
                <Image
                  src={artworks[currentIndex - 1].image}
                  alt={artworks[currentIndex - 1].title}
                  height={100}
                  width={150}
                  className='h-[100px] w-[150px] object-cover md:order-2'
                />
                <span className='inline-flex items-center gap-2 text-left font-medium uppercase md:text-lg'>
                  <LiaLongArrowAltLeftSolid />
                  {artworks[currentIndex - 1].title}
                </span>
              </Link>
            ) : (
              <div className='ml-auto'></div>
            )}
            {currentIndex < artworks.length - 1 && (
              <Link
                href={`/works/${artworks[currentIndex + 1].slug}`}
                className='flex flex-col items-end gap-4 md:flex-row md:items-center md:gap-8'
              >
                <Image
                  src={artworks[currentIndex + 1].image}
                  alt={artworks[currentIndex + 1].title}
                  height={100}
                  width={150}
                  className='h-[100px] w-[150px] object-cover'
                />
                <span className='inline-flex items-center gap-2 text-right font-medium uppercase md:text-lg'>
                  {artworks[currentIndex + 1].title}
                  <LiaLongArrowAltRightSolid />
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WorkPreview;
