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
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 -z-10" />
        <Hero />
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/596257607.jpg?k=0b513d8fca0734c02a83d558cbad7f792ef3ac900fd42c7d783f31ab94b4062c&o=&hp=1"
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