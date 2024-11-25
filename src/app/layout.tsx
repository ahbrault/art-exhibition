import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fréquences by Jean Marc Larhantec',
  description:
    'Bienvenue dans l’univers de «FRÉQUENCES» au domaine de Troplong Mondot',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className='min-h-screen bg-light px-6 py-12 text-dark'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
