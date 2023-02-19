import { z } from 'zod';
export const loginSchema = z
  .object({
    email: z.string().min(1, { message: 'Email is required' }).email({
      message: 'Must be a valid email',
    }),
    password: z
      .string()
      .min(1, { message: 'Password is required'})
      .min(6, { message: 'We accept Passwords with atleast 6 characters' })
      .max(32, 'We do not accept Password with more than 32 characters')
  });

export type SchemaType = z.infer<typeof loginSchema>;