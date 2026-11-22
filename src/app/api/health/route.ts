import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    platform: 'YU Academy - 2026 Digital SAT & IELTS Premium EdTech Platform',
    version: '2.0.0',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production',
    endpoints: {
      dictionary: '/api/dictionary',
      tests: '/api/tests',
      evaluate: '/api/tests/evaluate',
      verifyCertificate: '/api/verify-certificate',
      analytics: '/api/analytics',
      aiTutor: '/api/ai-tutor',
    },
    googleIndexing: {
      sitemap: 'https://yuacademy.uz/sitemap.xml',
      robots: 'https://yuacademy.uz/robots.txt',
      canonical: 'https://yuacademy.uz',
    },
  });
}
