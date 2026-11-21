import React from 'react';

export default function SeoSchema() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EducationalOrganization',
        '@id': 'https://yuacademy.uz/#organization',
        'name': 'YU Academy',
        'alternateName': 'YU Academy EdTech Uzbekistan',
        'url': 'https://yuacademy.uz',
        'logo': 'https://yuacademy.uz/icons/icon.svg',
        'description': '2026 Digital SAT va IELTS imtihonlariga tayyorlovchi rasmiy ta\'lim platformasi. Rasmiy Bluebook imtihon simulyatori va Desmos integratsiyasi.',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Tashkent',
          'addressRegion': 'Tashkent City',
          'addressCountry': 'UZ',
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 41.2995,
          'longitude': 69.2401,
        },
        'founder': [
          {
            '@type': 'Person',
            'name': 'Ilkhomjonov Umarbek',
            'jobTitle': 'Co-Founder & Lead Educator',
          },
          {
            '@type': 'Person',
            'name': 'Xurramov MuhammadYusuf',
            'jobTitle': 'Co-Founder & Chief Architect',
          },
        ],
        'sameAs': [
          'https://github.com/Muhammadyusuf079/Yu-Academy',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://yuacademy.uz/#website',
        'url': 'https://yuacademy.uz',
        'name': 'YU Academy',
        'publisher': {
          '@id': 'https://yuacademy.uz/#organization',
        },
        'inLanguage': ['uz', 'en', 'ru'],
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://yuacademy.uz/questions?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Course',
        'name': '2026 Digital SAT Preparation with Desmos',
        'description': 'Digital SAT Math va Reading/Writing bo\'yicha rasmiy College Board Bluebook formati, Desmos kalkulyatori va 1500+ ball strategiyalari.',
        'provider': {
          '@id': 'https://yuacademy.uz/#organization',
        },
        'educationalLevel': 'High School / University Preparation',
        'isAccessibleForFree': true,
      },
      {
        '@type': 'Course',
        'name': 'IELTS Academic 2026 Masterclass & Shadowing Studio',
        'description': 'Cambridge CD-IELTS Reading, Listening, Writing va AI talaffuz tahlili bilan Speaking Shadowing trenajyori (Band 8.5+).',
        'provider': {
          '@id': 'https://yuacademy.uz/#organization',
        },
        'educationalLevel': 'Intermediate to Advanced',
        'isAccessibleForFree': true,
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'YU Academy platformasida Digital SAT formati qanday?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Platformamiz 100% rasmiy College Board Bluebook 2026 formatiga mos bo\'lib, 2 ta Math moduli (44 savol), 2 ta Reading & Writing moduli (54 savol), o\'rnatilgan Desmos grafik kalkulyatori va rasmiy formulalar varaqasini o\'z ichiga oladi.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Speaking Shadowing qanday ishlaydi?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Band 8.5 va 9.0 darajasidagi native speaker audio yozuvlarini ketma-ket takrorlash, ritm va intonatsiyani real vaqtda rivojlantirish imkonini beradi.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Platformadan foydalanish bepulmi?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ha, asosiy mock imtihonlar, 1,850+ savollar bazasi, Desmos kalkulyatori va 5,000+ lug\'at barcha o\'quvchilar uchun bepul ochiq.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
