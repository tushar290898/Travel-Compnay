import React, { useState } from 'react'
import '../compnents/Navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';

function Navbar() {

    const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='navbar'>
        <h2 className='nav-logo'>Mr.Travel</h2>
        <ul id='nav-menu' className={openMenu ? 'active' : 'nav-menu'}>
            <Link className='links' href='/'><li><HomeIcon/><a>Home</a></li></Link>
            <Link className='links' href='/About'><li><InfoIcon/><a>About</a></li></Link>
            <Link className='links' href='/Service'><li><BusinessCenterIcon/><a>Service</a></li></Link>
            <Link className='links' href='/Contact'><li><PermContactCalendarIcon/><a>Contact</a></li></Link>
            {/* <div className='nav-button'>
                <h4>Sign Up</h4>
            </div> */}
        </ul>
        <div onClick={()=>{setOpenMenu(!openMenu)}} className='mobile-menu'>
            <MenuIcon/>
        </div>
      
      
    </div>
  )
}

export default Navbar