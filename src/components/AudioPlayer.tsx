'use client';

import React, { useEffect, useRef, useState } from 'react';
import { IoPauseOutline, IoPlayOutline } from 'react-icons/io5';

interface AudioPlayerProps {
  audioSrc: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Fonction pour gérer les interactions utilisateur
    const handleUserInteraction = () => {
      if (audioRef.current && !hasStarted) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasStarted(true);
          })
          .catch((err) => {
            console.warn('Erreur lors du démarrage de la lecture:', err);
          });
      }
    };

    // Fonction de debounce pour le scroll
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        handleUserInteraction();
      }, 100); // Débounce de 100ms
    };

    // Ajouter des écouteurs d'événements pour différentes interactions utilisateur
    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [hasStarted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.warn('Erreur lors du démarrage de la lecture:', err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;

    const newTime = parseFloat(event.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

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
      <div className='fixed bottom-0 left-0 right-0 z-30 mx-auto w-full max-w-6xl p-6 xl:px-0'>
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
            className='cursor-pointer rounded-bl-lg rounded-tl-lg bg-dark p-2 text-light'
          >
            {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
          </button>
          <div className='flex flex-auto items-center border-l border-slate-200/60 pl-6 pr-4 text-[0.8125rem]/5 text-slate-700'>
            <div className='w-6'>
              {Math.floor(currentTime / 60)}:
              {Math.floor(currentTime % 60)
                .toString()
                .padStart(2, '0')}
            </div>

            {/* Barre de progression interactive avec style */}
            <div className='ml-4 flex flex-auto items-center'>
              <div className='relative w-full'>
                <div
                  className='absolute left-0 top-[10px] z-[51] h-1 rounded-full bg-dark'
                  style={{
                    width: `${((currentTime / duration) * 100).toFixed(4)}%`,
                  }}
                ></div>
                <input
                  type='range'
                  min='0'
                  max={duration.toString()}
                  step='0.1'
                  value={currentTime}
                  onChange={handleSeek}
                  className='relative h-1 w-full cursor-pointer appearance-none bg-slate-100'
                  style={{
                    accentColor: 'transparent',
                  }}
                />
              </div>
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
