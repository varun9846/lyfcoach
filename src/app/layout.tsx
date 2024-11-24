'use client'

import { Toaster } from 'react-hot-toast'
import { LoaderProvider } from '@/context/LoaderContext'
import { AuthProvider } from '@/context/AuthContext'
import Loader from '@/components/common/Loader'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LoaderProvider>
          <AuthProvider>
            <Loader />
            {children}
            <Toaster position="top-right" />
          </AuthProvider>
        </LoaderProvider>
      </body>
    </html>
  )
} 