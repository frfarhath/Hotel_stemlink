'use client'  

import { Button } from '@/components/ui/button'   
import heroImage from '@/assets/images/2.jpeg' 

export function Hero() {  
  return (  
    <section  
    className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-4 sm:px-6 lg:px-8"  
    style={{  
      backgroundImage: `url(${heroImage.src})`, // Use template literal and src property  
      backgroundSize: 'cover',  
      backgroundPosition: 'center',  
    }}  
  >     
      {/* Background Blob */}  
      <div aria-hidden="true" className="absolute inset-0 -z-10 transform-gpu overflow-hidden">  
        <div  
          style={{  
            clipPath:  
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',  
          }}  
          className="w-[36rem] aspect-[1155/678] translate-x-[-50%] rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"  
        />  
      </div>  

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
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"  
          />  
          <Button>Search</Button>  
        </div>  
        {/* Other buttons */}  
      </div>  

      {/* Overlay Blob */}  
      <div aria-hidden="true" className="absolute inset-0 -z-10 transform-gpu overflow-hidden">  
        <div  
          style={{  
            clipPath:  
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',  
          }}  
          className="w-[36rem] aspect-[1155/678] translate-x-[50%] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"  
        />  
      </div>  
    </section>  
  )  
}  