"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const mockMyComments = [
  {
    id: "c_1",
    postId: "post_a1",
    postTitle: "낮잠 vs 커피",
    body: "낮잠 20분 추천! 커피는 심장 쿵쾅...",
    createdAt: "2025-08-12 10:31",
  },
  {
    id: "c_2",
    postId: "post_b2",
    postTitle: "퇴사 vs 이직",
    body: "이직해도 도망은 아님. 목표가 명확하면 ㄱ",
    createdAt: "2025-08-03 21:07",
  },
];

export const MyCommentsList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>내가 쓴 코멘트</CardTitle>
      </CardHeader>
      <CardContent className="divide-y divide-white/10">
        {mockMyComments.map((c) => (
          <div key={c.id} className="py-3">
            <div className="text-sm opacity-70">
              <Link href={`/post/${c.postId}`} className="hover:underline">
                {c.postTitle}
              </Link>
              <span className="mx-2">·</span>
              <span className="text-xs">{c.createdAt}</span>
            </div>
            <Link
              href={`/post/${c.postId}`}
              className="mt-1 block text-base hover:underline"
            >
              {c.body}
            </Link>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
