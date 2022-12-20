import React from 'react'
import '../compnents/TripStyle.css'

function TripsCard( props) {
  return (
        <div className='card'>
            <img src={props.image}/>
            <div className='text-section'>
                <h2>{props.title}</h2>
                <p>{props.context}</p>
            </div>
        </div>
    
  )
}

export default TripsCard