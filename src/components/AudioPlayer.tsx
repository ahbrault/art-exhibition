'use client';

import React, { useEffect, useRef, useState } from 'react';
import { IoPauseOutline, IoPlayOutline } from 'react-icons/io5';

interface AudioPlayerProps {
  audioSrc: string; // URL du fichier audio
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (!audioRef.current) return;
      console.log('audioRef?.current', audioRef?.current);

      if (isPlaying) {
        audioRef?.current.pause();
      } else {
        audioRef.current.play();
      }
    }, 500);
  }, []);

  // Lecture/Pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    console.log('audioRef?.current', audioRef?.current);

    if (isPlaying) {
      audioRef?.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Met à jour la barre de progression
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  // Initialisation des données audio
  useEffect(() => {
    if (!audioRef.current) return;

    const handleLoadedMetadata = () => {
      setDuration(audioRef.current?.duration || 0);
    };

    audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audioRef.current?.removeEventListener(
        'loadedmetadata',
        handleLoadedMetadata
      );
    };
  }, [audioSrc]);

  return (
    <div>
      <div className='fixed bottom-0 left-0 right-0 z-50 w-full p-4'>
        <div className='flex rounded-lg bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10'>
          <audio
            ref={audioRef}
            src={audioSrc}
            onTimeUpdate={handleTimeUpdate}
            preload='metadata'
          />
          <button
            type='button'
            onClick={togglePlay}
            className='pointer rounded-bl-lg rounded-tl-lg bg-dark p-2 text-light'
          >
            {!isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
          </button>
          <div className='flex flex-auto items-center border-l border-slate-200/60 pl-6 pr-4 text-[0.8125rem]/5 text-slate-700'>
            <div className='w-6'>
              {Math.floor(currentTime / 60)}:
              {Math.floor(currentTime % 60)
                .toString()
                .padStart(2, '0')}
            </div>
            <div className='ml-4 flex flex-auto rounded-full bg-slate-100'>
              <div
                className={`h-1 flex-none rounded-l-full rounded-r-[1px] bg-dark`}
                style={{
                  width: `${((currentTime / duration) * 100).toFixed(4)}%`,
                }}
              ></div>
              <div className='-my-[0.3125rem] ml-0.5 h-3.5 w-1 rounded-full bg-dark'></div>
            </div>
            <div className='ml-4'>
              {Math.floor(duration / 60)}:
              {Math.floor(duration % 60)
                .toString()
                .padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
