import { Button } from "@/components/ui/button"  
import Navbar from "@/components/Navbar"  
import { Badge } from "@/components/ui/badge"  
import { Calendar } from "@/components/ui/calendar"  
import { Hero } from "./components/Hero"  
import HotelListing from "./components/HotelListing"


function App() {  
  return (  
    <div>  
      <Navbar/>
      <div className="relative min-h-screen">
        <Hero />
        <img
          src="/assets/images/1.jpg"
          alt="HeroImage"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
      </div>  
        <HotelListing />
      <Calendar/>  
      <Badge/>  
      <Button>Click me</Button>  
    </div>  
  )  
}  

export default App  