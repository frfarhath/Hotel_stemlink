'use client'

import { Button } from '@/components/ui/button'   

export function Hero() {  
  return (  
    <section  
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-4 sm:px-6 lg:px-8"   
    >  
      {/* Content */}  
      <div className="text-center max-w-2xl mx-auto">  
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">  
          Find Your Best Staycation  
        </h1>  
        <p className="text-lg text-gray-600 mb-8">  
          Describe your dream destination and experience, and we'll find the perfect place for you.  
        </p>  
        {/* Search Input & Button */}  
        <div className="flex justify-center items-center space-x-4 mb-8">  
          <input  
            type="text"  
            placeholder="Search..."  
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"  
          />  
          <Button>Search</Button>  
        </div>  
      </div>  
    </section>  
  )  
}
