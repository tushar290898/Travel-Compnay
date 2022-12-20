import React from 'react'
import '../compnents/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <div className='footer-section'>
        <div className='top-section'>
            <div className='heading-section'>
                <h2>Mr.Travel</h2>
                <p>Find your favourite destinations.</p>
            </div>
            <div className='icon-section'>
                <InstagramIcon/>
                <TwitterIcon/>
                <FacebookIcon/>
                {/* icons */}
            </div>
        </div>
        <div className='bottom-section'> 
            <div className='footer-content'>
                <h2>Project</h2>
                <ul><li><a>Changlog</a></li></ul>
                <ul><li><a>Licence</a></li></ul>
                <ul><li><a>Status</a></li></ul>
                <ul><li><a>All Version</a></li></ul>
            </div>
            <div className='footer-content'>
                <h2>Community</h2>
                <ul><li><a>Github</a></li></ul>
                <ul><li><a>Issues</a></li></ul>
                <ul><li><a>Project</a></li></ul>
                <ul><li><a>Twitter</a></li></ul>
                
            </div>
            <div className='footer-content'>
                <h2>Help</h2>
                <ul><li><a>Support</a></li></ul>
                <ul><li><a>Trubleshooting</a></li></ul>
                <ul><li><a>Contact Us</a></li></ul>
              
                
            </div>
            <div className='footer-content'>
                <h2>Other</h2>
                <ul><li><a>Term of Service</a></li></ul>
                <ul><li><a>Privacy Policy</a></li></ul>
                <ul><li><a>Licence</a></li></ul>    
            </div>
            

        </div>
    </div>
  )
}

export default Footer