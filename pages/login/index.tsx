import { Card, Label, TextInput, Button } from "flowbite-react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, SchemaType } from "../helpers/LoginSchema";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<SchemaType> = (data) => console.table(data);

  return (
    <div className='flex flex-col items-center justify-center mt-16'>
      <div className='w-full max-w-lg'>
        <Card>
          <h1 className='text-xl text-center font-bold text-gray-900 md:text-2xl dark:text-white'>
            Sign in to your account
          </h1>
          <form
            className='flex flex-col gap-5 px-2'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='email1' value='Email' />
              </div>
              <input
                type='email'
                id='email'
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ${
                  errors.email && "border-red-500 dark:border-red-500"
                } focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder='name@flowbite.com'
                {...register("email")}
              />
              {errors.email && (
                <p className='mt-2 text-xs text-red-600 dark:text-red-500'>
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='password1' value='Password' />
              </div>
              <input
                type='password'
                id='password1'
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ${
                  errors.password && "border-red-500 dark:border-red-500"
                } focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder='password'
                {...register("password")}
              />
              {errors.password && (
                <p className='mt-2 text-xs text-red-500'>
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className='flex items-center gap-2 py-1'>
              <a
                href='#'
                className='text-sm text-blue-700 hover:underline dark:text-blue-500'
              >
                Lost Password?
              </a>
            </div>
            <Button type='submit'>Submit</Button>
            <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
              Not registered?{" "}
              <Link
                className='text-blue-700 hover:underline dark:text-blue-500'
                href='/register'
              >
                Create account
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
