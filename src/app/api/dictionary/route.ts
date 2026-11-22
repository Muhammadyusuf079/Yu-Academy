import { NextRequest, NextResponse } from 'next/server';
import { YU_DICTIONARY_DATABASE } from '@/data/dictionary';
import { DictionaryEntry } from '@/types';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search')?.toLowerCase().trim() || '';
    const category = searchParams.get('category')?.toLowerCase().trim() || 'all';
    const level = searchParams.get('level')?.toUpperCase().trim() || 'all';
    const band = searchParams.get('band')?.trim() || 'all';
    const topic = searchParams.get('topic')?.toLowerCase().trim() || 'all';
    const random = searchParams.get('random') === 'true';
    const stats = searchParams.get('stats') === 'true';

    // 1. Return platform dictionary statistics
    if (stats) {
      const levelCounts: Record<string, number> = { B1: 0, B2: 0, C1: 0, C2: 0 };
      const categoryCounts: Record<string, number> = { ielts: 0, sat: 0, math: 0, everyday: 0 };
      const topicCounts: Record<string, number> = {};

      YU_DICTIONARY_DATABASE.forEach((item) => {
        if (item.level && levelCounts[item.level] !== undefined) {
          levelCounts[item.level]++;
        }
        if (item.category && categoryCounts[item.category] !== undefined) {
          categoryCounts[item.category]++;
        }
        if (item.topic) {
          topicCounts[item.topic] = (topicCounts[item.topic] || 0) + 1;
        }
      });

      return NextResponse.json({
        success: true,
        totalWords: YU_DICTIONARY_DATABASE.length,
        levelCounts,
        categoryCounts,
        topicCounts,
      });
    }

    // 2. Return random word of the day / quiz word
    if (random) {
      let pool = YU_DICTIONARY_DATABASE;
      if (level !== 'all') {
        pool = pool.filter((w) => w.level === level);
      }
      if (category !== 'all') {
        pool = pool.filter((w) => w.category === category);
      }
      const randomWord = pool[Math.floor(Math.random() * pool.length)] || YU_DICTIONARY_DATABASE[0];
      return NextResponse.json({
        success: true,
        word: randomWord,
      });
    }

    // 3. Filter words by query, level, band, category and topic
    let results: DictionaryEntry[] = YU_DICTIONARY_DATABASE;

    if (search) {
      results = results.filter((item) => {
        return (
          item.word?.toLowerCase().includes(search) ||
          item.uz?.toLowerCase().includes(search) ||
          item.shortDef?.toLowerCase().includes(search) ||
          item.example?.toLowerCase().includes(search) ||
          item.synonyms?.some((s) => s.toLowerCase().includes(search))
        );
      });
    }

    if (category !== 'all') {
      results = results.filter((item) => item.category?.toLowerCase() === category);
    }

    if (level !== 'all') {
      results = results.filter((item) => item.level === level);
    }

    if (band !== 'all') {
      results = results.filter((item) => item.ieltsBand === band);
    }

    if (topic !== 'all') {
      results = results.filter((item) => item.topic === topic);
    }

    // Pagination
    const page = Math.max(1, parseInt(searchParams.get('page') || '1'));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '40')));
    const totalResults = results.length;
    const totalPages = Math.ceil(totalResults / limit);
    const paginatedWords = results.slice((page - 1) * limit, page * limit);

    return NextResponse.json({
      success: true,
      total: totalResults,
      page,
      limit,
      totalPages,
      words: paginatedWords,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Dictionary API Error' },
      { status: 500 }
    );
  }
}
