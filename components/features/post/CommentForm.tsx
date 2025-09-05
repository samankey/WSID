"use client";

import { useState } from "react";

export const CommentForm = ({ postId }: { postId: string }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: /api/comment POST → 완료 후 리스트 리프레시
    setTimeout(() => {
      setLoading(false);
      setText("");
    }, 400);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/10 p-4"
    >
      <textarea
        className="w-full rounded-md border border-white/15 bg-transparent p-2"
        rows={3}
        placeholder="댓글을 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="mt-2 flex justify-end">
        <button
          disabled={loading || !text.trim()}
          className="rounded-md border border-white/15 px-3 py-1 text-sm hover:bg-white/5 disabled:opacity-50"
        >
          {loading ? "작성 중…" : "댓글 작성"}
        </button>
      </div>
    </form>
  );
};
