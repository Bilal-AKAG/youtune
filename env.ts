import * as z from 'zod'

const envSchema = z.object({
  BETTER_AUTH_SECRET: z.string().min(1),
  BETTER_AUTH_URL: z.string().default('http://localhost:3000'),
  DATABASE_URL: z.string().min(1),
})

export const env = envSchema.parse(process.env)
