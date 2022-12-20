import React from 'react'
import '../compnents/Banner.css'

function Banner(props) {
  return (
    <div className={props.cName}>
        <img alt='home-banner' src={props.img}/>
        <div className='banner-text'>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <a className={props.btn} href='/'> Travel Plan</a>
        </div>
    </div>
  )
}

export default Banner


