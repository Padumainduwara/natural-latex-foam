import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Natural Latex Foam Sri Lanka',
    short_name: 'Natural Latex LK',
    description: 'Buy 100% Natural Latex Mattresses & Pillows in Sri Lanka',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#14532d',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}