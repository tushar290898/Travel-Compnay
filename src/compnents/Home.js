import React from 'react'
import '../compnents/Home.css'
import Banner from './Banner'
import Destinations from './Destinations'
import Footer from './Footer'
import Trips from './Trips'
import banner from '../assets/images/banner.avif'
import Mountain1 from '../assets/images/Maountain-1.avif'
import Mountain2 from '../assets/images/Mountain-2.avif'
import Manali1 from '../assets/images/Manali-1.avif'
import Manali2 from '../assets/images/Manali-2.avif'

function Home() {
  return (
    <div>
        <Banner
            cName="banner"
            img={banner}
            title="Your Journey Your Story"
            subtitle="Choose Your Favurite Destination."
            btn="banner-btn"
        />
        <Destinations 
            title="Popular Destinations"
            subtitle="Tours give you opportunity to see a lot within a time frame "
            cName="destination-first"
            contextHeading="Taal Volcano, Batangas"
            context="Taal Volcano in Batangas, Philippines began to erupt on January 12, 2020, when a phreatomagmatic eruption from its main crater spewed ashes over Calabarzon,Metro 
            Manila, and some parts of Central Luzon and Ilocos Region, resulting in the suspension of school classes, work schedules, and flights in the area.The Philippine Institute of Volcanology and 
            Seismology (PHIVOLCS) subsequently issued an Alert Level 4, indicating that a hazardous explosive eruption is possible within hours to days. Volcanic activity continued into 2021, when smaller eruptions occurred in July 2021.On 26 March 2022
            a short-lived phreatomagmatic eruption was recorded by PHIVOLCS raising the status from Alert level 2 to Alert level 3 as well as surrounding towns."
            img1={Mountain1}
            img2={Mountain2}

        />
        <Destinations
            cName="destination-second"
            contextHeading="Manali, Himachal Pradesh"
            context="One of the most popular hill stations in Himachal, Manali offers the most magnificent views of the Pir Panjal and the Dhauladhar ranges covered with snow for most parts of the year. 
            With the Covid-19 pandemic going on, Manali has evolved to be a place loved by young people looking for longer stays for workation. With ambient cafes, good wifi availability, small eateries and convenient shops, 
            Old Manali is among the favorite neighbourhood for such people. There are many homestays and hostels offering dorm beds for cheap for longer durations. 
            Manali has many trekking options around it, making it a great base for exploring this side of Himalayas. River Beas provides great rafting options in the nearby town of Kullu."
            img1={Manali1}
            img2={Manali2} />

        <Trips/>    

        <Footer/>
    </div>

  )
}

export default Home