'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, type LoginInput } from '@/lib/validators/auth'
// import { createClient } from '@/lib/supabase/client' // @supabase/ssr createBrowserClient 래퍼

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export const LoginForm = () => {
  const router = useRouter()
//   const supabase = createClient()
  const [serverError, setServerError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const form = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: '', password: '' },
    mode: 'onSubmit',
  })

  async function onSubmit(values: LoginInput) {
    setServerError(null)
    setLoading(true)
    const { email, password } = values

    // const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)

    // if (error) {
    //   setServerError(error.message || '로그인에 실패했습니다.')
    //   return
    // }

    // 성공: 원하는 곳으로 이동
    router.replace('/') // 또는 /me
  }

  return (
    <div className="mx-auto w-full max-w-sm">
      <h1 className="mb-6 text-2xl font-semibold">로그인</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" autoComplete="current-password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {serverError && (
            <p className="text-sm text-red-400">{serverError}</p>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? '로그인 중…' : '로그인'}
          </Button>
        </form>
      </Form>
    </div>
  )
}
