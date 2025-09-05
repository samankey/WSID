// components/features/post/CommentList.tsx
"use client";

import { CommentItem } from "@/components/features/post/CommentItem";

const mockComments = [
  {
    id: "c1",
    author: { id: "user_1", nickname: "소식좌" },
    body: "파스타 추천!",
    createdAt: "12:41",
  },
  {
    id: "c2",
    author: { id: "user_2", nickname: "밥맛남" },
    body: "덮밥 가즈아",
    createdAt: "12:43",
  },
];

export const CommentList = ({
  postId,
  meId,
}: {
  postId: string;
  meId: string;
}) => {
  return (
    <ul className="divide-y divide-white/10 rounded-2xl border border-white/10">
      {mockComments.map((c) => (
        <li key={c.id} className="p-4">
          <CommentItem comment={c} isOwner={c.author.id === meId} />
        </li>
      ))}
    </ul>
  );
};
