import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import about from '../assets/images/night.jpg'
import '../compnents/About.css'

function About() {
  return (
    <div>
       <Banner
            cName="banner-about"
            img={about}
            title="About Us"
            btn="hide"
            
        />
        <div className='about-content'>
          <p>Our mission is not just to be a travel agency which helps you book a holiday; we want to be your travel partner who would go an extra mile to help you choose an ideal destination and learn more about the place you have been dreaming to visit. Since holidays are more about personal choices and interests, we bring to you customizable tour packages as well. We give you the prerogative to pick and choose anything that matches your interest. No matter how many travel experiences we sell every day, we ensure that you are the protagonist of your own travel story.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default About