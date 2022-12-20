import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Form from './Form'
import contact from '../assets/images/5.jpg'

function Contact() {
  return (
    <div>
       <Banner
            cName="banner-contact"
            img={contact}
            title="Contact Us"
            btn="hide"
        />
        <Form/>
        <Footer/>
    </div>
  )
}

export default Contact