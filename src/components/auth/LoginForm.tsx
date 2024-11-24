'use client'

import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { loginSchema } from '@/utils/validation'
import { supabase } from '@/lib/supabase'
import { useLoader } from '@/context/LoaderContext'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function LoginForm() {
  const router = useRouter()
  const { setIsLoading } = useLoader()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
          email: values.email,
          password: values.password,
        })

        if (error) throw error

        router.push('/ai-life-coach')
        toast.success('Logged in successfully!')
      } catch (error: any) {
        toast.error(error.message)
      } finally {
        setIsLoading(false)
      }
    },
  })

  return (
    <div className=" login-parent flex min-h-screen items-center justify-center">
      <div className="flex w-full h-lvh">
        <div className="relative hidden w-1/2 overflow-hidden lg:block shadow-[0_0px_10px_#ccc] rounded-r-[40px] rounded-l-none">
          <div

            className="h-full w-full bg-[url('/assets/images/Login.jpg')] bg-cover bg-center bg-no-repeat"

            role="img"

            aria-label="AI Life Coach"

          />
        </div>

        <div className="w-full space-y-6 p-8 lg:w-1/2 flex justify-center items-center">
          <div className="w-[75%]">
            <div className="text-center">
              <h1 className="text-[42px] mb-10 font-bold text-custom-heading">AI-Life Coach</h1>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Sign in</h2>
              <p className="text-sm text-gray-600 mt-0 m-0">

                Don't have an account?
                <Link

                  href="/auth/signup"

                  className="ml-1 text-custom-green hover:underline"
                >

                  Sign up here
                </Link>
              </p>

              <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                  )}
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                >
                  Login
                </button>
              </form>
            </div></div>
        </div>
      </div>
    </div >

  )
} 