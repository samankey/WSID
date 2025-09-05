import { MyPostsList } from "@/components/features/me/MyPostsList";

export default function MePostPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-semibold">내 포스트</h1>
      <MyPostsList />
    </main>
  )
}
