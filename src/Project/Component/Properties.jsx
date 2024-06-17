import React from 'react'
import image from '../Component/modern.jpg'
import images from '../Component/design.jpg'
import bed from '../Component/bedroom.jpg'
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const product =[
  {
    id:1,
    img:'/images/items.jpg',
    price:'$6728',
    type:'Appartment',
    description:'Get started by choosing from one of our pre-bulit page template to showcase your properties'
  },
  {
    id:1,
    img:'/images/items2.jpg',
    price:'$6728',
    type:'Appartment',
    description:'Get started by choosing from one of our pre-bulit page template to showcase your properties'
  },
   {
    id:1,
    img:'/images/items.jpg',
    price:'$6728',
    type:'Appartment',
    description:'Get started by choosing from one of our pre-bulit page template to showcase your properties'
  }
]

function Properties() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div className='w-4/5 m-auto' id='prop'>
    <h1>Properties For Sale</h1>
    <div className='mt-10'>
    <Slider {...settings}>
  {product.map((d) => (
    <div key={d.id}>
      <div className='' >
        <div className="flex justify-between items-center rounded-t-xl" >
          <img src={d.img} alt= {product.type} className=' w-120 g-4 p-4' />
        </div>

        <div className="g-4 p-4 flex flex-col" >
          <div className=' w-65 m-auto' id='row'>
          <span className=''>{d.price}</span>
          <h5><a href="#">{d.type}</a></h5>
          <small>{d.description}</small>
        </div>
        </div>
      </div>
    </div>
  ))}
</Slider>
    </div>
  </div>
  )
}

export default Properties
