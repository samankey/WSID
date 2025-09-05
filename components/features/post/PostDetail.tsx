// components/features/post/PostDetail.tsx
"use client";

import { CommentForm } from "@/components/features/post/CommentForm";
import { CommentList } from "@/components/features/post/CommentList";
import { VoteCard } from "@/components/features/post/VoteCard";
import { Button } from "@/components/ui/button";

const mockPost = {
  id: "post_a1",
  title: "점심 메뉴: 파스타 vs 덮밥",
  createdAt: "2025-09-01 12:30",
  author: { id: "user_1", nickname: "소식좌" },
  story: "시간이 없는데 뭐 먹을지 결정을 못하겠어요. 탄수화물 땡김.",
  optionA: "파스타",
  optionB: "덮밥",
  counts: { A: 42, B: 58 }, // 투표 집계(임시)
  hasVoted: false, // 내가 투표했는지(임시)
  myChoice: null as "A" | "B" | null,
  decided: false, // 글쓴이 결정 여부
  isOwner: true, // 현재 사용자가 글쓴이인지(임시)
};

export const PostDetail = ({ postId }: { postId: string }) => {
  const p = mockPost;

  return (
    <article className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">{p.title}</h1>
        <div className="text-xs opacity-70">
          {p.createdAt} · 글쓴이 {p.author.nickname}
        </div>
        {p.isOwner && (
          <div className="flex gap-2 pt-2">
            <Button className="rounded-md border border-white/15 px-3 py-1 text-sm hover:bg-white/5">
              수정
            </Button>
            <Button className="rounded-md border border-red-500/40 px-3 py-1 text-sm text-red-300 hover:bg-red-500/10">
              삭제
            </Button>
          </div>
        )}
      </header>

      <section className="rounded-2xl border border-white/10 p-4">
        <h2 className="mb-2 text-sm opacity-70">사연</h2>
        <p className="whitespace-pre-wrap text-base leading-relaxed">
          {p.story}
        </p>
      </section>

      <section>
        <VoteCard
          postId={p.id}
          optionA={p.optionA}
          optionB={p.optionB}
          counts={p.counts}
          hasVoted={p.hasVoted}
          defaultRevealed={p.hasVoted}
          myChoice={p.myChoice}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">댓글</h2>
        <CommentForm postId={p.id} />
        <CommentList
          postId={p.id}
          meId={"user_1"} // 현재 로그인 사용자 id (임시)
        />
      </section>
    </article>
  );
};
