// src/app/api/vote/route.ts
import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabase/admin';
import { ratelimitVote } from '@/lib/rateLimit';
// import { cleanText } from '@/lib/profanity';

const VoteSchema = z.object({
  postId: z.uuid(),
  choice: z.enum(['A','B']),
  reasonTag: z.string().max(24).optional(),
  anonId: z.uuid().optional(),  // 게스트일 때 필수
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? '0.0.0.0';
  const body = await req.json();
  const parsed = VoteSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: 'invalid' }, { status: 400 });

  const { postId, choice, reasonTag, anonId } = parsed.data;

  // 레이트리밋 (IP+anonId 기준)
  const ok = await ratelimitVote.limit(`${ip}:${anonId ?? 'auth'}`);
  if (!ok.success) return NextResponse.json({ error: 'rate' }, { status: 429 });

  const db = supabaseAdmin();

  // (선택) 비속어/화이트리스트 필터
//   const safeTag = reasonTag ? cleanText(reasonTag) : null;

  // user 세션 확인 (쿠키→server client로 읽는 방법도 가능, 여기선 단순화)
  // 게스트: anonId 필수 / 로그인: anonId 없이 userId 기준 처리 (권장: /api/vote/me 별도)
  if (!anonId) {
    return NextResponse.json({ error: 'anonId-required' }, { status: 400 });
  }

  const { error } = await db.from('votes').insert({
    post_id: postId,
    anon_id: anonId,
    choice,
    reason_tag: reasonTag ?? null,
  });

  if (error?.code === '23505') {
    return NextResponse.json({ ok: true, duplicated: true });
  }
  if (error) return NextResponse.json({ error: 'db' }, { status: 500 });

  return NextResponse.json({ ok: true });
}
