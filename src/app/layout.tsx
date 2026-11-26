import type { Metadata, Viewport } from 'next';
import './globals.css';
import SeoSchema from '@/components/SeoSchema';
import { ThemeProvider } from '@/lib/theme-provider';

export const viewport: Viewport = {
  themeColor: '#0B192C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://yuacademy.uz'),
  title: {
    default: 'YU Academy - 2026 Digital SAT & IELTS Premium EdTech Platform',
    template: '%s | YU Academy',
  },
  description:
    '1500+ SAT va 8.5 IELTS natijasiga erishish uchun ultra-zamonaviy ta\'lim platformasi. Rasmiy 2026 Bluebook imtihon simulyatori, o\'rnatilgan Desmos kalkulyatori va qadamma-qadam yechimlar.',
  keywords: [
    'Digital SAT 2026',
    'SAT Bluebook test',
    'SAT Math Desmos',
    'IELTS Speaking 8.5',
    'IELTS 2026 actual exam',
    'YU Academy',
    'SAT tayyorgarlik Toshkent',
    'AQSH grantlari',
    'College Board Bluebook',
    'Tashkent SAT',
    'Uzbekistan EdTech',
  ],
  authors: [
    { name: 'Ilkhomjonov Umarbek' },
    { name: 'Xurramov MuhammadYusuf' },
  ],
  creator: 'Ilkhomjonov Umarbek va Xurramov MuhammadYusuf',
  publisher: 'YU Academy',
  alternates: {
    canonical: 'https://yuacademy.uz',
    languages: {
      'uz-UZ': 'https://yuacademy.uz',
      'en-US': 'https://yuacademy.uz',
      'ru-RU': 'https://yuacademy.uz',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    url: 'https://yuacademy.uz',
    siteName: 'YU Academy',
    title: 'YU Academy - 2026 Digital SAT & IELTS Premium EdTech Platform',
    description:
      '1500+ SAT va 8.5 IELTS natijasiga erishish uchun rasmiy College Board va British Council imtihon simulyatori.',
    images: [
      {
        url: '/icons/favicon-512.png',
        width: 512,
        height: 512,
        alt: 'YU Academy Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YU Academy - 2026 Digital SAT & IELTS Platform',
    description: '1500+ SAT va 8.5 IELTS rasmiy simulyatori va savollar banki.',
    images: ['/icons/favicon-512.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'UZ-TK',
    'geo.placename': 'Tashkent, Uzbekistan',
    'geo.position': '41.2995;69.2401',
    'ICBM': '41.2995, 69.2401',
    'application-name': 'YU Academy',
    'apple-mobile-web-app-title': 'YU Academy',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('yu_academy_theme');
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch (_) {}
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <SeoSchema />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased font-sans selection:bg-cyan-500/30 selection:text-cyan-800 dark:selection:text-cyan-200 transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
