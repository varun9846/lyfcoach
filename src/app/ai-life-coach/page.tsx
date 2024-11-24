'use client'

import ProtectedRoute from '@/components/common/ProtectedRoute'
import Sidebar from '@/components/chat/Sidebar'
import ChatBox from '@/components/chat/ChatBox'

export default function AiLifeCoachPage() {
  return (
    <ProtectedRoute>
      <div className="flex">
        <Sidebar />
        <ChatBox />
      </div>
    </ProtectedRoute>
  )
} 