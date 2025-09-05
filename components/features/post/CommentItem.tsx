// components/features/post/CommentItem.tsx
"use client";

import { useState } from "react";

export const CommentItem = ({
  comment,
  isOwner,
}: {
  comment: {
    id: string;
    author: { id: string; nickname: string };
    body: string;
    createdAt: string;
  };
  isOwner: boolean;
}) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(comment.body);

  function onSave() {
    // TODO: /api/comment/[id] PATCH
    setEditing(false);
  }
  function onDelete() {
    // TODO: /api/comment/[id] DELETE
  }

  return (
    <div>
      <div className="mb-1 text-xs opacity-70">
        {comment.author.nickname} · {comment.createdAt}
      </div>
      {editing ? (
        <div className="space-y-2">
          <textarea
            className="w-full rounded-md border border-white/15 bg-transparent p-2"
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              onClick={onSave}
              className="rounded-md border border-white/15 px-3 py-1 text-sm hover:bg-white/5"
            >
              저장
            </button>
            <button
              onClick={() => setEditing(false)}
              className="rounded-md border border-white/15 px-3 py-1 text-sm hover:bg-white/5"
            >
              취소
            </button>
          </div>
        </div>
      ) : (
        <p className="whitespace-pre-wrap">{comment.body}</p>
      )}

      {isOwner && !editing && (
        <div className="mt-2 flex gap-2 text-xs">
          <button
            onClick={() => setEditing(true)}
            className="rounded-md border border-white/15 px-2 py-1 hover:bg-white/5"
          >
            수정
          </button>
          <button
            onClick={onDelete}
            className="rounded-md border border-red-400/40 px-2 py-1 text-red-300 hover:bg-red-500/10"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};
