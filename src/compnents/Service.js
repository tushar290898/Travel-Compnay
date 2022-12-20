import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Trips from './Trips'
import service from '../assets/images/6.jpg'

function Service() {
  return (
    <div>
       <Banner
            cName="banner-service"
            img={service}
            title="Services"
            btn="hide"
        />
        <Trips/>  
        <Footer/>
    </div>
  )
}

export default Service