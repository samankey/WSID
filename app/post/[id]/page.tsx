import { PostDetail } from "@/components/features/post/PostDetail";

export default function PostDetailPage({ params }: { params: { id: string } }) {
  // 서버에서 id만 받고, 실제 데이터는 우선 mock으로
  return (
    <main className="py-6">
      <PostDetail postId={params.id} />
    </main>
  );
}
