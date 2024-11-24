'use client'

import { useAuth } from '@/context/AuthContext'
import { FiLogOut } from 'react-icons/fi'

export default function Sidebar() {
  const { user, signOut } = useAuth()

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 flex flex-col">
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4">AI Life Coach</h2>
        <div className="space-y-2">
          {/* Add chat history or navigation items here */}
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm">{user?.email}</span>
          <button
            onClick={signOut}
            className="p-2 hover:bg-gray-800 rounded-full"
          >
            <FiLogOut />
          </button>
        </div>
      </div>
    </div>
  )
} 