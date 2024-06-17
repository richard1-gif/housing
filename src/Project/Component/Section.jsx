import React from 'react'
import { RiHotelLine } from "react-icons/ri";
function Section() {
  return (
    <div className='sec'>
      <div className='how'>
        <h5>How we help people?</h5>
      </div>
      <div className="div">
        <div className="div1">
            <div className='hotel'>
        <RiHotelLine />
            </div>
            <h4>Sell home or office</h4>
            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
        </div>
        <div className="div2">
        <div className='hotel'>
        <RiHotelLine />
            </div>
            <h4>Rent home or office</h4>
            <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
        </div>
        <div className="div3"> 
        <div className='hotel'>
        <RiHotelLine />
            </div>
        <h4>find next</h4>
        <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
        </div>
      </div>
    </div>
  )
}

export default Section
