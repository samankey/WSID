// app/api/posts/route.ts
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const cursorParam = searchParams.get("cursor");
  const cursor = Number.isFinite(Number(cursorParam)) ? Number(cursorParam) : 0;

  const pageSize = 20;
  const start = cursor * pageSize;
  const end = start + pageSize;

  const items = Array.from({ length: pageSize }).map((_, i) => {
    const n = start + i + 1;
    return {
      id: `post_${n}`,
      title: `예시 게시물 제목 ${n}`,
      decided: n % 5 === 0, // 5개마다 결정됨
      views: 1000 + n * 3, // 대충 늘어나는 뷰
    };
  });

  // 총 200개까지만 있다고 가정
  const hasMore = end < 200;
  const nextCursor = hasMore ? String(cursor + 1) : null;

  return Response.json({ items, nextCursor }, { status: 200 });
}
