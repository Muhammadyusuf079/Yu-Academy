import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://yuacademy.uz/sitemap.xml',
    host: 'https://yuacademy.uz',
  };
}
