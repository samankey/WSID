'use client'

import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const mockMyPosts = [
  { id: 'post_a1', title: '낮잠 vs 커피', createdAt: '2025-08-10' },
  { id: 'post_b2', title: '퇴사 vs 이직', createdAt: '2025-08-02' },
  { id: 'post_c3', title: '운동 A 루틴 vs B 루틴', createdAt: '2025-07-28' },
]

export const MyPostsList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>내가 쓴 글</CardTitle>
      </CardHeader>
      <CardContent className="divide-y divide-white/10">
        {mockMyPosts.map((p) => (
          <div key={p.id} className="py-3">
            <Link href={`/post/${p.id}`} className="block font-medium hover:underline">
              {p.title}
            </Link>
            <div className="mt-1 text-xs opacity-60">{p.createdAt}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
