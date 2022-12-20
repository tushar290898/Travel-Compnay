import React from 'react'
import '../compnents/TripStyle.css'
import TripsCard from './TripsCard'
import Jaipur from '../assets/images/Jaipur.avif'
import Kashmir from '../assets/images/Kashmir-1.avif'
import Kerala from '../assets/images/Kerala.avif'

function Trips() {
  return (
    <div className='trips-section'>
        <h1>Recents Trips</h1>
        <p>You can disocver unique destination</p>
        <div className='trips'>
        <TripsCard 
            image={Kashmir}
            title="Jammu and Kashmir"
            context="Popularly known as the Paradise on Earth, Jammu and Kashmir is world famous for its scenic splendour, snow-capped mountains, plentiful wildlife, exquisite monuments, hospitable people and local handicrafts. 
            Your trip to Jammu and Kashmir will be a memorable one as the state will not only appeal to you with its scenic beauty and snow-covered mountain ranges, but the adventure sports will take you to a different world. 
          
            "/>
         <TripsCard 
            image={Jaipur}
            title="Jaipur, Rajasthan"
            context="Also called the Pink City, Jaipur is the capital of the royal state of Rajasthan. Along with Delhi and Agra, Jaipur forms the Golden Triangle and hails as one of the most famous tourist circuits in the country.
            One of the largest cities in India, Jaipur is also home to all the modern amenities with some of the most exotic hotels and resorts in the world. The city has boasts an international airport.
            "/>

        <TripsCard 
            image={Kerala}
            title="Alleppey, Kerela"
            context="Officially called Alappuzha, Alleppey is the picture-perfect place known for its beautiful backwaters and the houseboats offering overnight stays. The coastline of Alleppey offers some of the best beaches in Kerala with water sports during the dry season.
            Alleppey is located close to Kochi in the South Indian state of Kerala. Its palm-fringed inter-connect network of canal backwaters attracts a lot of tourists.
         
            "/>
        </div>           
    </div>
  )
}

export default Trips