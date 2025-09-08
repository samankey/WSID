import { PostDetail } from "@/components/features/post/PostDetail";

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // 서버에서 id만 받고, 실제 데이터는 우선 mock으로
  const { id } = await params;
  return (
    <main className="py-6">
      <PostDetail postId={id} />
    </main>
  );
}
