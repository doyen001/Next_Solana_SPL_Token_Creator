'use client'

import { useState } from 'react'
import { AppHero } from '../ui/ui-layout'
import { CreateTokenMintButton } from './token-ui'

export default function TokenFeature() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <AppHero title="My Tokens" subtitle="Create and manage your Solana tokens" />
      <div className="mt-4 bg-white bg-opacity-5 rounded-xl p-5 w-full max-w-3xl mx-auto flex flex-col items-center">
        <CreateTokenMintButton />
      </div>
    </div>
  )
}
