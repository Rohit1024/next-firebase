import { literal, z } from 'zod';
export const registerSchema = z
  .object({
    email: z.string().min(1, { message: 'Email is required' }).email({
      message: 'Must be a valid email',
    }),
    password: z
      .string()
      .min(1, { message: 'Password is required'})
      .min(6, { message: 'Password must be atleast 6 characters' })
      .max(32, 'Password must be less than 32 characters'),
    confirmPassword: z
      .string()
      .min(1, { message: 'Confirm Password is required' }),
    terms: literal(true, {
      errorMap: () => ({ message: 'You must accept Terms and Conditions' }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Password don't match",
  });

export type SchemaType = z.infer<typeof registerSchema>;

