"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { Virtuoso } from "react-virtuoso";
import { PostRow } from "@/components/features/post/PostRow";
import { Skeleton } from "@/components/ui/skeleton";
import type { PostListPage } from "@/lib/types/post";

const fetchPage = async (cursor?: string | null): Promise<PostListPage> => {
  const url = cursor
    ? `/api/posts?cursor=${encodeURIComponent(cursor)}`
    : "/api/posts";
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("failed to load");
  return res.json();
};

export const PostsFeed = () => {
  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts-feed"],
    queryFn: ({ pageParam }) => fetchPage(pageParam),
    getNextPageParam: (last) => last.nextCursor,
    initialPageParam: null as string | null,
  });

  // 플랫 목록
  const items = (data?.pages ?? []).flatMap((p) => p.items);

  if (isLoading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-16 rounded-xl bg-white/5" />
        ))}
      </div>
    );
  }
  if (isError) {
    return (
      <div className="text-sm text-red-400">목록을 불러오지 못했습니다.</div>
    );
  }

  return (
    // <div className="rounded-2xl border border-white/10">
    <Virtuoso
      style={{ height: "calc(100dvh - 100px)" }} // 헤더/푸터 제외한 가용 높이. 필요시 조절
      data={items}
      itemContent={(index, post) => (
        <div className="p-2">
          <PostRow post={post} />
        </div>
      )}
      endReached={() => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
      }}
      overscan={200} // 스크롤 성능 튜닝
      components={{
        Footer: () => (
          <div className="p-4 text-center text-xs opacity-70">
            {isFetchingNextPage
              ? "불러오는 중…"
              : hasNextPage
                ? "더보기"
                : "마지막입니다"}
          </div>
        ),
      }}
    />
    // </div>
  );
};
