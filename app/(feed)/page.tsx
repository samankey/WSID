import { PostsFeed } from "@/components/features/post/PostsFeed";
import { ReactQueryClientProvider } from "@/components/providers/ReactQueryClientProvider";

export default function FeedPage() {
  return (
    <main>
      <ReactQueryClientProvider>
        <PostsFeed />
      </ReactQueryClientProvider>
    </main>
  );
}
