// app/(feed)/page.tsx
import PostsFeed from "@/components/features/post/PostsFeed";
import { ReactQueryClientProvider } from "@/components/providers/ReactQueryClientProvider";

export default function FeedPage() {
  return (
    <main className="py-6">
      <h1 className="mb-4 text-2xl font-semibold">게시물 리스트</h1>
      <ReactQueryClientProvider>
        <PostsFeed />
      </ReactQueryClientProvider>
    </main>
  );
}
