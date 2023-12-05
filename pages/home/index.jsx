import Carousel from '@/components/Carousel'
import MenuWrapper from '@/components/product/MenuWrapper'
import React from 'react'
import About from '@/components/About'
import Reservation from '@/components/Reservation'
import Footer from '@/components/layout/Footer'

const Home = () => {
  return (
    <>
     <Carousel />
     <MenuWrapper />
     <About />
     <Reservation />
    </>
  )
}

export default Home
