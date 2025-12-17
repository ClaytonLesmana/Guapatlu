import { DefaultSeoProps } from 'next-seo';

const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | Guapatlu - Bakmi Khas Jambi',
  defaultTitle: 'Guapatlu - Bakmi Khas Jambi Terenak di Jakarta',
  description: 'Nikmati Bakmi Khas Jambi yang autentik dengan resep turun temurun. Guapatlu menyajikan mie kenyal dengan kuah gurih, daging babi cincang, bakso ikan, dan otak-otak. Pesan sekarang via Gojek & Grab!',
  canonical: 'https://guapatlu.com',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://guapatlu.com',
    siteName: 'Guapatlu Bakmi Khas Jambi',
    title: 'Guapatlu - Bakmi Khas Jambi Terenak di Jakarta',
    description: 'Nikmati Bakmi Khas Jambi yang autentik dengan resep turun temurun. Guapatlu menyajikan mie kenyal dengan kuah gurih, daging babi cincang, bakso ikan, dan otak-otak. Pesan sekarang via Gojek & Grab!',
    images: [
      {
        url: 'https://guapatlu.com/bakmi-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Bakmi Khas Jambi - Guapatlu',
        type: 'image/jpeg',
      },
      {
        url: 'https://guapatlu.com/logo.png',
        width: 800,
        height: 800,
        alt: 'Guapatlu Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@guapatlu',
    site: '@guapatlu',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'bakmi jambi, bakmi jakarta, mie khas jambi, chinese noodles, bakmi babi, restoran jambi, kuliner jakarta, delivery makanan, gojek food, grab food',
    },
    {
      name: 'author',
      content: 'Guapatlu',
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    {
      name: 'googlebot',
      content: 'index, follow',
    },
    {
      property: 'og:type',
      content: 'restaurant',
    },
    {
      name: 'format-detection',
      content: 'telephone=yes',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'application-name',
      content: 'Guapatlu',
    },
    {
      name: 'msapplication-TileColor',
      content: '#dc2626',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/logo.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};

export default defaultSEO;


