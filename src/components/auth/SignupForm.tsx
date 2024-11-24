'use client'

import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { signupSchema } from '@/utils/validation'
import { supabase } from '@/lib/supabase'
import { useLoader } from '@/context/LoaderContext'
import Link from 'next/link'
import toast from 'react-hot-toast'

interface SignUpWithPasswordCredentials {
  firstName: string;
  lastName: string;
  
}

export default function SignupForm() {
  const router = useRouter()
  const { setIsLoading } = useLoader()

  const formik = useFormik({
    initialValues: {
      firstName:'',
      lastName:'',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true)
        const { error } = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
        })

        
        if (error) throw error

        toast.success('Signup successful! Please check your email for verification.')
        router.push('/auth/login')
      } catch (error: any) {
        toast.error(error.message)
      } finally {
        setIsLoading(false)
      }
    },
  })

  return (
    <>
      <div className=" login-parent flex min-h-screen items-center justify-center">
        <div className="flex w-full h-lvh">
          <div className="relative hidden w-1/2 overflow-hidden lg:block shadow-[0_0px_10px_#ccc] rounded-r-[40px] rounded-l-none">
            <div

              className="h-full w-full bg-[url('/assets/images/SignUp.jpg')] bg-cover bg-center bg-no-repeat"

              role="img"

              aria-label="AI Life Coach"

            />
          </div>

          <div className="w-full space-y-6 p-8 lg:w-1/2 flex justify-center items-center">
            <div className="w-[75%]">
              <div className="text-center">
                <h1 className="text-[42px] mb-10 font-bold text-custom-heading">

                  AI-Life Coach
                </h1>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Sign Up</h2>
                <p className="text-sm text-gray-600 mt-0 m-0">

                  Already Have an Account ?
                  <Link

                    href="/auth/login"

                    className="ml-1 text-custom-green hover:underline"
                  >

                    Sign In here
                  </Link>
                </p>
                <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
                  <div className='grid grid-cols-2 gap-4'>
                <div>
                    <input
                      type="firstName"
                      name="firstName"
                      placeholder="firstName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="lastName"
                      name="lastName"
                      placeholder="lastName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>
                    )}
                  </div>
                  </div>
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
                  <div>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                  >
                    Sign Up
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div >
    </>


  )
} 