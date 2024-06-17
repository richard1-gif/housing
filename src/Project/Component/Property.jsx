import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { RxHome } from "react-icons/rx";
import { RiHome2Line } from "react-icons/ri";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
function Property() {
  return (
    <div className='bigdiv'>
      <div className="text">
        <h1>Explore <br /> by Property Type</h1>
        <p>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
      <button>View All Property</button>
      </div>
      <div className="bigdiv2">
        <div className="texticon1">
       <IoHomeOutline/>
        </div>
        <div className="texticon2">
       <RxHome/>
        </div>
        <div className="texticon3">
        <RiHome2Line/>
        </div>
        <div className="texticon4">
          <HiOutlineBuildingOffice/>
        </div>
      </div>
      </div>
    
  )
}

export default Property
