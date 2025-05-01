'use client'

import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-4 sm:px-6 lg:px-8"
    >
      {/* Content */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 drop-shadow-lg">
          Find Your Best Staycation
        </h1>
        <p className="text-lg text-gray-900 mb-8 drop-shadow-md">
          Describe your dream destination and experience, and we'll find the perfect place for you.
        </p>

        {/* Glassmorphism Search Bar */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-2 flex items-center max-w-xl mx-auto shadow-lg space-x-2">
          <input
            type="text"
            placeholder="Describe your destination, experience, or hotel..."
            className="flex-1 bg-transparent text-white placeholder-white/70 focus:outline-none px-4 py-2"
          />
          <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full">
            🔍 AI Search
          </Button>
        </div>
      </div>
    </section>
  )
}
