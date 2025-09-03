import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.email({ message: '이메일 형식이 올바르지 않습니다.' }),
  password: z.string().min(8, { message: '비밀번호는 8자 이상이어야 합니다.' }),
})
export type LoginInput = z.infer<typeof LoginSchema>
