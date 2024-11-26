'use client';

import React from 'react';
import { artworks } from '@/data';
import { QRCodeSVG } from 'qrcode.react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const QrCodeListPage = () => {
  // Fonction pour télécharger un QR code individuel
  const downloadQrCode = (slug: string) => {
    // Récupère le SVG du QR code en utilisant l'ID unique
    const svgElement = document.getElementById(`qr-code-${slug}`);
    if (!svgElement) return;

    // Serialize le SVG en string
    const serializer = new XMLSerializer();
    let svgString = serializer.serializeToString(svgElement);

    // Ajouter la déclaration XML pour que le fichier soit valide
    svgString = '<?xml version="1.0" encoding="UTF-8"?>\n' + svgString;

    // Créer un blob à partir de la chaîne SVG
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });

    // Utiliser FileSaver pour télécharger le fichier
    saveAs(blob, `${slug}-qr-code.svg`);
  };

  // Fonction pour télécharger tous les QR codes en un seul fichier ZIP
  const downloadAllQrCodes = async () => {
    const zip = new JSZip();

    // Parcours de toutes les œuvres pour ajouter leurs QR codes au ZIP
    for (const artwork of artworks) {
      const slug = artwork.slug;
      const title = artwork.title;

      // Récupère le SVG du QR code
      const svgElement = document.getElementById(`qr-code-${slug}`);
      if (!svgElement) continue;

      // Serialize le SVG en string
      const serializer = new XMLSerializer();
      let svgString = serializer.serializeToString(svgElement);

      // Ajouter la déclaration XML
      svgString = '<?xml version="1.0" encoding="UTF-8"?>\n' + svgString;

      // Ajouter le fichier SVG au ZIP
      zip.file(`${title}-qr-code.svg`, svgString);
    }

    try {
      // Générer le ZIP
      const content = await zip.generateAsync({ type: 'blob' });

      // Télécharger le ZIP
      saveAs(content, 'qr-codes.zip');
    } catch (error) {
      console.error('Erreur lors de la génération du ZIP:', error);
    }
  };

  return (
    <div className='mx-auto grid gap-8 pt-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {/* Bouton pour télécharger tous les QR codes */}
      <div className='col-span-full text-center'>
        <button
          onClick={downloadAllQrCodes}
          className='mb-8 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
        >
          Download All
        </button>
      </div>

      {/* QR Code de la page d'accueil */}
      <div className='mb-12 text-center'>
        <p className='mb-4 font-semibold'>Home Page</p>
        <div className='mx-auto mb-4 h-20 w-20' />

        <div className='flex flex-col items-center gap-4'>
          <QRCodeSVG
            id={`qr-code-home`}
            value='https://frequences.larhantec.fr'
            size={128}
            bgColor='#ffffff'
            fgColor='#000000'
            level='H'
          />
          <button
            onClick={() => downloadQrCode('home')}
            className='mt-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          >
            Download
          </button>
        </div>
      </div>

      {/* QR Codes pour chaque œuvre */}
      {artworks.map((artwork) => (
        <div className='mb-12 text-center' key={`qr-code-${artwork.slug}`}>
          <p className='mb-4 font-semibold'>{artwork.title}</p>
          <img
            className='mx-auto mb-4 h-20 w-20 object-cover'
            src={artwork.image}
            alt={artwork.title}
          />

          <div className='flex flex-col items-center gap-4'>
            <QRCodeSVG
              id={`qr-code-${artwork.slug}`}
              value={`https://frequences.larhantec.fr/works/${artwork.slug}`}
              size={128}
              bgColor='#ffffff'
              fgColor='#000000'
              level='H'
            />
            <button
              onClick={() => downloadQrCode(artwork.slug)}
              className='mt-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
            >
              Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QrCodeListPage;
