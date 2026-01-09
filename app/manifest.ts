import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Natural Latex Foam Sri Lanka',
    short_name: 'Natural Latex',
    description: '100% Natural Latex Foam Mattresses & Pillows in Sri Lanka',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#052e16',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/images/logo.png', 
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}