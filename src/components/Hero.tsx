'use client';

import Image from 'next/image';
import Section from '@/components/Section';

export default function Hero() {
  const handleScrollToSection = () => {
    const target = document.getElementById('hero-part-2');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id='home' padding={false}>
      <div className='relative mx-auto flex flex-col'>
        <div className='min-h-[95vh]'>
          <div className='flex flex-col items-center gap-8 py-20 md:flex-row md:py-32'>
            <div className='order-1 w-full md:order-2 md:w-1/2'>
              <Image
                src='/frequences.webp'
                width={400}
                height={600}
                className='animate-fade-in md:max-h-sm h-full max-h-[70%] w-full max-w-[70%] object-cover md:ml-auto md:max-w-sm'
                alt='Fréquences exhibition'
                priority={true}
              />
            </div>

            <div className='animate-fade-in order-2 md:order-1 md:w-1/2'>
              <h1 className='uppercas mb-4'>JEAN MARC LARHANTEC</h1>
              <h2 className='taviraj mb-2 text-2xl italic'>
                AU DOMAINE DE TROPLONG MONDOT
              </h2>

              <h3 className='mt-4 text-xl'>
                Bienvenue dans l’univers de «FRÉQUENCES»
              </h3>
            </div>
          </div>

          <div
            className='animate-fade-in absolute left-1/2 -mt-4 hidden w-auto cursor-pointer duration-1000 md:block'
            onClick={handleScrollToSection}
          >
            <div className='mx-auto mb-2 h-8 w-[1px] bg-dark'></div>
            <span className='uppercase tracking-wide'>Scroll</span>
          </div>
        </div>

        <div
          className='animate-fade-in mx-auto md:max-w-[80%]'
          id='hero-part-2'
        >
          <p className='animate-fade-in mb-24 text-center text-xl font-medium italic md:mt-64'>
            Explorez les œuvres de Jean Marc Larhantec d&#39;une manière inédite
            !
          </p>
          <p className='animate-fade-in text-xl'>
            En scannant le QR code de chaque tableau, vous accèderez en un seul
            clic à un guide audiovisuel gratuit. Plongez dans les profondeurs de
            chaque œuvre grâce aux textes, images et musiques spécialement créés
            pour cette exposition.
          </p>
          <p className='animate-fade-in text-xl'>
            Pour une immersion totale, branchez vos AirPods ou votre casque
            audio et laissez-vous emporter par cette expérience sensorielle
            inédite, à la rencontre des vibrations et émotions que Jean Marc
            Larhantec infuse dans chaque toile.
          </p>
          <p className='animate-fade-in text-xl'>Bonne visite !</p>
        </div>
      </div>
    </Section>
  );
}
