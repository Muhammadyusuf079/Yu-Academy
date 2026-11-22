import { NextRequest, NextResponse } from 'next/server';
import { ALL_SAT_QUESTIONS, SAT_MATH_FULL_2026, SAT_RW_FULL_2026 } from '@/data/sat-questions';
import { ALL_IELTS_QUESTIONS, IELTS_READING_FULL_2026, IELTS_LISTENING_FULL_2026 } from '@/data/ielts-questions';
import { Question } from '@/types';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const exam = (searchParams.get('exam') || 'SAT').toUpperCase();
    const mode = searchParams.get('mode') || (exam === 'SAT' ? 'SAT_MOCK_1' : 'IELTS_MOCK_1');
    const questionId = searchParams.get('id');

    let pool: Question[] = [];

    // Single question fetch
    if (questionId) {
      const allPool = [...ALL_SAT_QUESTIONS, ...ALL_IELTS_QUESTIONS];
      const target = allPool.find((q) => q.id === questionId);
      if (!target) {
        return NextResponse.json({ success: false, error: 'Question not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, question: target });
    }

    // Exam mode pool construction (Exactly 54 questions standard)
    if (exam === 'SAT') {
      if (mode === 'SAT_MATH') {
        pool = SAT_MATH_FULL_2026;
      } else if (mode === 'SAT_RW') {
        pool = SAT_RW_FULL_2026;
      } else if (mode === 'SAT_MOCK_2') {
        pool = ALL_SAT_QUESTIONS.slice(54, 108);
      } else if (mode === 'SAT_MOCK_3') {
        pool = ALL_SAT_QUESTIONS.slice(108, 162);
      } else {
        // SAT_MOCK_1 or default
        pool = ALL_SAT_QUESTIONS.slice(0, 54);
      }
    } else {
      // IELTS
      if (mode === 'IELTS_READING') {
        pool = IELTS_READING_FULL_2026;
      } else if (mode === 'IELTS_LISTENING') {
        pool = IELTS_LISTENING_FULL_2026;
      } else if (mode === 'IELTS_MOCK_2') {
        pool = ALL_IELTS_QUESTIONS.slice(54, 108);
      } else if (mode === 'IELTS_MOCK_3') {
        pool = ALL_IELTS_QUESTIONS.slice(108, 162);
      } else {
        // IELTS_MOCK_1 or default
        pool = ALL_IELTS_QUESTIONS.slice(0, 54);
      }
    }

    // Pad to 54 if needed
    if (pool.length < 54) {
      const backup = exam === 'SAT' ? ALL_SAT_QUESTIONS : ALL_IELTS_QUESTIONS;
      const needed = 54 - pool.length;
      const additional = backup.filter((q) => !pool.some((p) => p.id === q.id)).slice(0, needed);
      pool = [...pool, ...additional];
    }
    pool = pool.slice(0, 54);

    return NextResponse.json({
      success: true,
      exam,
      mode,
      totalQuestions: pool.length,
      durationMinutes: exam === 'SAT' ? (mode === 'SAT_MATH' ? 70 : 64) : 60,
      questions: pool,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Tests API Error' },
      { status: 500 }
    );
  }
}
