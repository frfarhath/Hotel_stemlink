import { useState } from "react";
import HotelCard from "./Hotelcard";
import LocationTab from "./LocationTab";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";

export default function HotelListings() {

    const hotels = [  
        // Existing hotels ...  
        {  
          _id: "1",  
          name: "Silverpine Grand Resort",  
          location: "Zurich, Switzerland",  
          rating: 4.6,  
          reviews: 1345,  
          image: img1,  
          price: 210,  
          description:  
            "Nestled in the scenic Alps, Silverpine Grand Resort offers luxurious stays with panoramic mountain views. Enjoy local Swiss cuisine, spa treatments, and serene hikes. Perfect for nature lovers and retreat seekers.",  
          __v: 0,  
        },  
        {  
          _id: "2",  
          name: "Coral Crest Bay Hotel",  
          location: "Malé, Maldives",  
          rating: 4.8,  
          reviews: 1092,  
          image: img2,  
          price: 380,  
          description:  
            "Set on a private beach, Coral Crest Bay Hotel provides breathtaking views and overwater villas. Dive into the turquoise waters or unwind with tropical cocktails under the sun. Ideal for couples and beachgoers.",  
          __v: 0,  
        },  
        {  
          _id: "3",  
          name: "Ivory Peaks Lodge",  
          location: "Queenstown, New Zealand",  
          rating: 4.7,  
          reviews: 974,  
          image: img3,  
          price: 190,  
          description:  
            "Ivory Peaks Lodge is your gateway to thrilling outdoor adventures, offering ski access and lakefront views. Starting at $190, enjoy rustic luxury with modern touches in the adventure capital of New Zealand.",  
          __v: 0,  
        },  
        {  
          _id: "4",  
          name: "Willowstone Inn",  
          location: "Vancouver, Canada",  
          rating: 4.5,  
          reviews: 1238,  
          image: img4,  
          price: 175,  
          description:  
            "Located in downtown Vancouver, Willowstone Inn offers a mix of comfort and convenience. Explore Stanley Park or local food markets just minutes away. Great for city explorers and weekend trips.",  
          __v: 0,  
        },  
        {  
          _id: "5",  
          name: "Maple Bay Retreat",  
          location: "Cape Town, South Africa",  
          rating: 4.9,  
          reviews: 880,  
          image: img5,  
          price: 230,  
          description:  
            "Overlooking the iconic Table Mountain, Maple Bay Retreat features modern rooms with floor-to-ceiling views. Relax in style after safari tours or ocean escapes. Perfect for both thrill and tranquility.",  
          __v: 0,  
        },  
        {  
          _id: "6",  
          name: "Golden Palm Residences",  
          location: "Dubai, UAE",  
          rating: 4.6,  
          reviews: 1674,  
          image: img6,  
          price: 300,  
          description:  
            "Step into luxury at Golden Palm Residences, located near the Burj Khalifa. Featuring rooftop infinity pools and fine dining, it’s perfect for lavish vacations or business stays.",  
          __v: 0,  
        },  
        {  
          _id: "7",  
          name: "Aurora Skyline Suites",  
          location: "Reykjavik, Iceland",  
          rating: 4.7,  
          reviews: 1120,  
          image: img7,  
          price: 250,  
          description:  
            "Chase the Northern Lights from the comfort of Aurora Skyline Suites. Featuring glass roofs and geothermal spas, it's a must-visit destination for a cozy winter escape.",  
          __v: 0,  
        },  
        {  
          _id: "8",  
          name: "Velvet Haven Hotel",  
          location: "Lisbon, Portugal",  
          rating: 4.8,  
          reviews: 1495,  
          image: img8,  
          price: 160,  
          description:  
            "Explore Lisbon’s charm from Velvet Haven Hotel, with rooftop gardens and colorful decor. A perfect mix of tradition and modern elegance for travelers seeking vibrant city life.",  
          __v: 0,  
        },  
      
        {  
          _id: "9",  
          name: "Alpine Serenity Lodge",  
          location: "Zurich, Switzerland",  
          rating: 4.7,  
          reviews: 1130,  
          image: img1,  
          price: 220,  
          description:  
            "Set in the Swiss Alps, Alpine Serenity Lodge offers cozy rooms with alpine views, hiking trails, and Swiss cheese tastings. A serene mountain escape.",  
          __v: 0,  
        },  
        {  
          _id: "10",  
          name: "Swiss Heritage Inn",  
          location: "Zurich, Switzerland",  
          rating: 4.4,  
          reviews: 950,  
          image: img2,  
          price: 190,  
          description:  
            "Enjoy traditional Swiss hospitality in the heart of Zurich, with antique decor and local cuisine, perfect for a cultural stay.",  
          __v: 0,  
        },  
        {  
          _id: "11",  
          name: "Maldives Overwater Villas",  
          location: "Malé, Maldives",  
          rating: 4.9,  
          reviews: 1340,  
          image: img3,  
          price: 450,  
          description:  
            "Experience ultimate luxury in overwater villas with private pools and direct lagoon access. A truly tropical paradise for honeymooners and luxury travelers.",  
          __v: 0,  
        },  
        {  
          _id: "12",  
          name: "Maldives Beachfront Retreat",  
          location: "Malé, Maldives",  
          rating: 4.7,  
          reviews: 1025,  
          image: img4,  
          price: 375,  
          description:  
            "Relax on pristine beaches, with beachfront bungalows and sunset cruises. The perfect tropical getaway with world-class amenities.",  
          __v: 0,  
        },  
        {  
          _id: "13",  
          name: "Queenstown Adventure Lodge",  
          location: "Queenstown, New Zealand",  
          rating: 4.8,  
          reviews: 1250,  
          image: img5,  
          price: 200,  
          description:  
            "Thrilling adventures await at this lodge, with access to mountain biking, bungee jumping, and lake kayaking, all with stunning lake views.",  
          __v: 0,  
        },  
        {  
          _id: "14",  
          name: "Lakeview Cabin",  
          location: "Queenstown, New Zealand",  
          rating: 4.6,  
          reviews: 890,  
          image: img6,  
          price: 180,  
          description:  
            "Rustic cabin with modern comforts, situated right on the lake. Perfect for relaxing escapes and outdoor activities.",  
          __v: 0,  
        },  
        {  
          _id: "15",  
          name: "Canmore Mountain Lodge",  
          location: "Vancouver, Canada",  
          rating: 4.7,  
          reviews: 1020,  
          image: img7,  
          price: 190,  
          description:  
            "Nestled near the Rockies, this lodge offers hiking, skiing, and wildlife tours, with cozy mountain decor.",  
          __v: 0,  
        },  
        {  
          _id: "16",  
          name: "Lisbon Coastal Inn",  
          location: "Lisbon, Portugal",  
          rating: 4.5,  
          reviews: 1420,  
          image: img8,  
          price: 150,  
          description:  
            "A seaside inn with stunning coastal views, fresh seafood, and easy access to Lisbon's city center. Great for relaxed beachside holidays.",  
          __v: 0,  
        }  
      ];  
      

      const locations = [
        "All",
        "Maldives",
        "Canada",
        "UAE",
        "Iceland",
        "Portugal",
        "Switzerland",
        "New Zealand",
        "South Africa",
      ];
      
  const [selectedLocation, setSelectedLocation] = useState("All");

  const handleSelectedLocation = (location) => {
    setSelectedLocation(location);
  }

  const filteredHotels = selectedLocation === "All" ? hotels : hotels.filter((hotel) => {
    return hotel.location.toLowerCase().includes(selectedLocation.toLowerCase());
  })

  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Top trending hotels worldwide
        </h2>

        <p className="text-lg text-muted-foreground">
          Discover the most trending hotels worldwide for an unforgettable
          experience.
        </p>
      </div>
      <div className="flex items-center gap-x-4 overflow-x-auto whitespace-nowrap scrollbar-none mb-6">  
        {locations.map((location) => (  
          <LocationTab  
            key={location}  
            selectedLocation={selectedLocation}  
            name={location}  
            onClick={handleSelectedLocation}  
          />  
        ))}  
      </div>  

      {/* Hotels Grid */}  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">  
        {filteredHotels.map((hotel) => (  
          <HotelCard key={hotel._id} hotel={hotel} />  
        ))}  
      </div>

    </section>
  );
}