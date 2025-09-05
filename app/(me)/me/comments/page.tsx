import { MyCommentsList } from "@/components/features/me/MyCommentsList";
export default function MeCommentsPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-semibold">내 포스트</h1>
      <MyCommentsList />
    </main>
  );
}
