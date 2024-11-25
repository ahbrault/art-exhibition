'use client';

import React from 'react';

interface SectionProps {
  id?: string;
  padding?: boolean;
  children: React.ReactNode;
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ id, children, padding = true }, ref) => {
    return (
      <section
        id={id}
        className='relative min-h-screen bg-white text-dark'
        ref={ref}
      >
        <div className={`mx-auto max-w-6xl ${padding ? 'py-32' : ''}`}>
          {children}
        </div>
      </section>
    );
  }
);

// Définir le displayName pour le composant
Section.displayName = 'Section';

export default Section;
