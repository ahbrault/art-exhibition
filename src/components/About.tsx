import React from 'react';
import Image from 'next/image';
import Section from '@/components/Section';

const About = () => {
  return (
    <Section id='about'>
      <h2 className='animate-fade-in mb-16 text-center uppercase opacity-0'>
        About
      </h2>

      <div className='flex flex-col items-center gap-8 md:flex-row md:gap-12'>
        <div className='md:w-1/3'>
          <Image
            src='/jml-about.webp'
            alt='Jean Marc Larhantec'
            width={400}
            height={600}
            className='animate-fade-in h-full w-full object-cover md:ml-auto md:max-w-sm'
          />
        </div>
        <div className='md:w-2/3'>
          <h3 className='animate-fade-in'>JEAN MARC LARHANTEC</h3>
          <p className='animate-fade-in text-xl'>
            Libre de toute convention artistique, Jean Marc Larhantec puise son
            inspiration dans la musique, la lumière et les énergies subtiles.
            Ses œuvres, véritables immersions sensorielles, invitent à ressentir
            plutôt qu’à comprendre.
          </p>
          <p className='animate-fade-in text-xl'>
            Cette exposition marque un nouveau chapitre dans sa recherche
            artistique, où la notion de fréquence universelle devient un fil
            conducteur.
          </p>
        </div>
      </div>
      <div className='animate-fade-in mx-auto' id='hero-part-2'>
        <h4 className='animate-fade-in mb-12 mt-24 text-4xl uppercase opacity-0'>
          Tout est Fréquence
        </h4>

        <p className='animate-fade-in text-xl'>
          Cette courte phrase résume la source d’inspiration de l’artiste
          peintre Jean Marc Larhantec. Fruit d’années de méditations, de voyages
          et d’une connexion intime avec la musique et la lumière, son travail
          explore les vibrations invisibles du monde qui nous entoure. Jean Marc
          Larhantec invite à entrer dans son univers singulier, où chaque geste
          pictural résonne comme une note sur une portée musicale.
        </p>
        <p className='animate-fade-in text-xl'>
          L’artiste ne suit aucune convention artistique, et son geste sur la
          toile est tout aussi libre. Enrichi par des expériences de vie
          multiples, il a fait de la méditation et de ses influences musicales
          les piliers de sa pratique artistique. Son art est le reflet d’une
          quête personnelle de la fréquence universelle qui relie tous les êtres
          et toutes les choses. Les oeuvres de Jean Marc Larhantec sont une
          invitation à ressentir plutôt qu’à comprendre. Ses toiles, abstraites
          et lumineuses, captent des instants de grâce, des fragments de réalité
          transcendés par la couleur et la forme. Il laisse son intuition guider
          son pinceau, comme un musicien laisse ses doigts danser sur les cordes
          d’une guitare ou les notes d’un piano.
        </p>
        <p className='animate-fade-in text-xl'>
          Chaque tableau est une immersion dans un univers sensoriel où
          couleurs, formes et textures s’entrelacent pour créer un langage
          visuel unique. Les visiteurs sont plongés dans un parcours sensible,
          fait de grandes toiles qui toutes vibrent d’une énergie singulière.
          L’artiste cherche à transmettre l’idée que tout dans l’univers, du
          plus petit atome à la plus grande galaxie, est en mouvement, en
          fréquence, et qu’on peut ressentir cette danse perpétuelle en se
          connectant à la somme de ses passés.
        </p>
      </div>
    </Section>
  );
};

export default About;
