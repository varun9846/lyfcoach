'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { useLoader } from '@/context/LoaderContext'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const router = useRouter()
  const { setIsLoading } = useLoader()

  useEffect(() => {
    setIsLoading(true)
    if (!user) {
      router.push('/auth/login')
    }
    setIsLoading(false)
  }, [user, router, setIsLoading])

  if (!user) return null

  return <>{children}</>
} 