import React from 'react'
import '../compnents/Destination.css'
import Mountain1 from '../assets/images/1.jpg'
import Mountain2 from '../assets/images/2.jpg'


function Destinations( props ) {
  return (
    <div className='destination'>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        
        <div className={props.cName}>
           
            <div className='desti-text'>
                <h3>{props.contextHeading}</h3>
                <p>{props.context}</p>
            </div>
            <div className='desti-image'>
                <img alt='mountain-1' src={props.img1}/>
                <img alt='mountain-2' src={props.img2}/>
            </div>
        </div>
    </div>
  )
}

export default Destinations