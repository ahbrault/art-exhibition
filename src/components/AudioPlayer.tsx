'use client';

import React, { useEffect, useRef, useState } from 'react';
import { IoPauseOutline, IoPlayOutline } from 'react-icons/io5';

interface AudioPlayerProps {
  audioSrc: string; // URL du fichier audio
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true); // Initialise à `true` pour commencer la lecture
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!audioRef.current) return;

    // Lecture automatique lorsque le composant est monté
    audioRef.current.play().catch((err) => {
      console.warn('Erreur lors du démarrage de la lecture automatique:', err);
    });

    setIsPlaying(true); // Met à jour l'état pour refléter la lecture
  }, []);

  // Lecture/Pause
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

  // Met à jour la barre de progression
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  // Permet à l'utilisateur de se déplacer dans la musique
  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;

    const newTime = parseFloat(event.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime); // Met à jour la barre pour refléter la position actuelle
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
      <div className='fixed bottom-0 left-0 right-0 z-50 mx-auto w-full max-w-6xl p-6 xl:px-0'>
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
                    accentColor: 'transparent', // Cache le style natif du curseur
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
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 4px;
          height: 16px;
          border-radius: 2px;
          background-color: #121211;
          z-index: 52;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        input[type='range']::-moz-range-thumb {
          width: 4px;
          height: 16px;
          border-radius: 2px;
          background-color: #121211;
          z-index: 52;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        input[type='range']::-ms-thumb {
          width: 4px;
          height: 16px;
          border-radius: 2px;
          background-color: #121211;
          cursor: pointer;
          z-index: 52;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default AudioPlayer;
