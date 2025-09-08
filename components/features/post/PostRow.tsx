"use client";
import Link from "next/link";
import { DecisionBadge } from "@/components/features/post/DecisionBadge";
import type { PostListItem } from "@/lib/types/post";

export const PostRow = ({ post }: { post: PostListItem }) => {
  return (
    <Link
      href={`/post/${post.id}`}
      className="group block border-b py-2 hover:bg-white/5"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium leading-tight line-clamp-1 group-hover:underline">
          {post.title}
        </h3>
        <DecisionBadge decided={post.decided} />
      </div>
      <div className="mt-1 text-xs opacity-60">
        조회수 {post.views.toLocaleString()}
      </div>
    </Link>
  );
};
