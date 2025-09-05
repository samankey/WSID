import { ProfileSummary } from '@/components/features/me/ProfileSummary';

export default function MePage() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-semibold">내정보</h1>
      <ProfileSummary />
    </main>
  )
}