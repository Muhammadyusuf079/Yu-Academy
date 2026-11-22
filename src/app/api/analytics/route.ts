import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

let livePlatformStats = {
  activeStudents: 109240,
  testsCompleted: 48930,
  questionsSolved: 1850420,
  averageSatisfactionRate: '99.4%',
  certifiedIvyLeagueScholars: 342,
  topUniversitiesAccepted: ['MIT', 'Harvard', 'Stanford', 'Oxford', 'Cambridge', 'NYU Abu Dhabi'],
  lastUpdated: new Date().toISOString(),
};

export async function GET() {
  return NextResponse.json({
    success: true,
    stats: {
      ...livePlatformStats,
      lastUpdated: new Date().toISOString(),
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action } = body;

    if (action === 'increment_test') {
      livePlatformStats.testsCompleted += 1;
      livePlatformStats.questionsSolved += body.count || 54;
    } else if (action === 'new_student') {
      livePlatformStats.activeStudents += 1;
    }

    return NextResponse.json({
      success: true,
      stats: livePlatformStats,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
