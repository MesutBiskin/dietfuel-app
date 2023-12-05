import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Title from './ui/Title'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : false,
    autoplay : true,
    autoplaySpeed: 3500,
    appendDots: (dots) => {
      <div style={{color:"yellow"}}></div>
    },
    customPaging: (i) => {
      <div className='w-3 h-3 border bg-white rounded-full mt-10'></div>
    }
  };
  return (
    <div className="h-screen relative">
    <Image src="/images/bg4salmon.jpg"
    alt="" 
    layout="fill"
    objectFit='cover'
    className='salmon'
    /> 
      <div>
      <Slider {...settings}>
      <div>
          <div className="mt-48  text-white flex flex-col items-end gap-y-10">
            <Title addClass="text-6xl">Diet Food Restaurant</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
          
        </div>
        

      </Slider>

        
      </div>
      </div>
  )
}

export default Carousel
