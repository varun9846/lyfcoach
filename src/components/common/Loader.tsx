'use client'

import { useLoader } from '@/context/LoaderContext'

export default function Loader() {
  const { isLoading } = useLoader()

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )
} 