"use client"

import React, {useState, useEffect, useRef} from 'react';
import {artworks} from "@/data";
import {useParams} from "next/navigation";
import ReactPlayer from "react-player";

interface VisibleSections {
    [key: string]: boolean;
}

const WorkPreview = () => {
    const [visibleSections, setVisibleSections] = useState<VisibleSections>({});
    const rafRef = useRef<number | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const {id} = useParams();

    const artwork = artworks.find(art => art.id.toString() === id);

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

    const [muted, setMuted] = useState(true);

    const audioRef = useRef<HTMLAudioElement>(null);
    const playerRef = useRef(null);

    const simulateKeyPress = () => {
        // Créer un événement clavier pour la touche "Espace"
        const keyEvent = new KeyboardEvent("keydown", {
            key: " ", // Touche espace
            code: "Space",
            keyCode: 32, // Code ASCII pour la touche espace
            bubbles: true,
            cancelable: true,
        });

        // Déclencher l'événement sur le document
        document.body.dispatchEvent(keyEvent);
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.error("Impossible de lire l'audio :", error);
            });
        }
    }, []);

    useEffect(() => {
        const simulateKeyPress = () => {
            const keyEvent = new KeyboardEvent("keydown", {
                key: " ", // Touche espace
                code: "Space",
                keyCode: 32,
                bubbles: true,
                cancelable: true,
            });

            document.body.dispatchEvent(keyEvent);

            // Tentative d'unmute après la simulation
            setTimeout(() => {
                if (playerRef.current) {
                    // @ts-ignore
                    playerRef.current.getInternalPlayer().unMute();
                }
            }, 2000);
        };

        setTimeout(simulateKeyPress, 1000);
    }, []);
    if (!artwork)
        return;

    return (
        <div className="min-h-screen bg-white text-dark relative">
            <main className="py-32 px-6 md:px-12 max-w-6xl mx-auto text-center" ref={contentRef}>
                <h2 className="opacity-0 animate-fade-in text-center uppercase text-[75px] mb-0">{artwork.title}</h2>
                <h3 className="opacity-0 animate-fade-in text-center uppercase text-xxl taviraj italic">{artwork.frequency}</h3>
                <p className="opacity-0 animate-fade-in text-xl uppercase mb-0">{artwork.size} - {artwork.paintType}</p>

                <div className="relative">

                    <div className="space-y-24">
                        <div
                            id={`artwork-${artwork.id}`}
                            className={`artwork-section gap-8 md:gap-24 items-start transition-all duration-1000 
                                // transform${visibleSections[`artwork-${artwork}`]
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'}`}
                        >
                            <div className="w-full overflow-hidden">
                                <img
                                    src={artwork.image}
                                    alt={artwork.title}
                                    className="w-full h-full object-cover transition-transform duration-700 max-w-xxl max-h-xxl mx-auto mb-12"
                                />
                            </div>

                            <div className="md:w-[70%] mx-auto">
                                {artwork.description.map((desc, index) => (
                                    <p key={index}
                                       className="opacity-0 animate-fade-in text-lg text-left mt-0 text-gray-500">{desc}</p>
                                ))}

                                <h4 className="opacity-0 animate-fade-in text-left uppercase text-xl mt-16">
                                    {artwork.subTitle}
                                </h4>
                                {artwork.subDescription.map((subDesc, index) => (
                                    <p key={`subDescription-${index}`}
                                       className="opacity-0 animate-fade-in text-lg text-left mt-0 text-gray-500">{subDesc}</p>
                                ))}
                                {/*<audio*/}
                                {/*    ref={audioRef}*/}
                                {/*    src="/musics/Radiohead%20-%20Nude.mp3" // Remplacez par votre URL audio*/}
                                {/*    autoPlay*/}
                                {/*    loop*/}
                                {/*/>*/}
                                {/*<ReactPlayer*/}
                                {/*    url={artwork.youtubeLink} // Remplacez par votre URL*/}
                                {/*    playing={true} // Autoplay activé*/}
                                {/*    loop={true} // Lecture en boucle*/}
                                {/*    controls={true} // Cache les contrôles*/}
                                {/*    volume={1} // Volume ajusté*/}
                                {/*    muted={muted} // Non muet*/}
                                {/*    // onDuration={duration => {*/}
                                {/*    //     console.log('duration', duration);*/}
                                {/*    //     if (duration === 2) {*/}
                                {/*    //         setMuted(false)*/}
                                {/*    //     }*/}
                                {/*    // }}*/}
                                {/*    // onUnstarted={() => setTimeout(() => setMuted(false), 1000)}*/}
                                {/*    onPlay={() => setMuted(false)}*/}
                                {/*    // style={{ display: 'none' }} // Cache la vidéo*/}
                                {/*/>*/}
                                <ReactPlayer
                                    ref={playerRef}
                                    url={artwork.youtubeLink} // Remplacez par votre URL
                                    playing={true}
                                    loop={true}
                                    controls={false}
                                    volume={0.5}
                                    muted={muted} // Non muet
                                    onPlay={() => {
                                        simulateKeyPress();
                                        setTimeout(() => {
                                            setMuted(false)
                                        }, 1000)
                                    }}
                                    // style={{ display: 'none' }} // Cache la vidéo
                                />
                                <p className="opacity-0 animate-fade-in text-left uppercase text-center mt-16">
                                    Pour la suite de la visite, approchez-vous du tableau suivant.
                                </p>
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
