'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const mockUser = {
  id: 'user_1234567890',
  nickname: '결정장애탈출러',
}

export const ProfileSummary = () => {
  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>
              {mockUser.nickname[0]}
            </AvatarFallback>
          </Avatar>
          내정보
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 text-sm">
        <div>
          <div className="opacity-60">아이디</div>
          <div className="mt-1 font-mono text-xs">{mockUser.id}</div>
        </div>
        <Separator />
        <div>
          <div className="opacity-60">닉네임</div>
          <div className="mt-1 text-base font-medium">{mockUser.nickname}</div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 sm:flex-row">
        <Link href="/me/posts" className="w-full sm:w-auto">
          <Button className="w-full">내가 쓴 글</Button>
        </Link>
        <Link href="/me/comments" className="w-full sm:w-auto">
          <Button variant="outline" className="w-full">내가 쓴 코멘트</Button>
        </Link>
        <Button variant="destructive" className="w-full sm:ml-auto sm:w-auto">
          탈퇴하기
        </Button>
      </CardFooter>
    </Card>
  )
}
