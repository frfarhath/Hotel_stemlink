import { Button } from "@/components/ui/button"  
import Navbar from "@/Navbar"  
import { Badge } from "@/components/ui/badge"  
import { Calendar } from "@/components/ui/calendar"  
import { Hero } from "./Hero"  

function App() {  
  return (  
    <div>  
      <Navbar/>  
      <Hero/>  
      <Calendar/>  
      <Badge/>  
      <Button>Click me</Button>  
    </div>  
  )  
}  

export default App  