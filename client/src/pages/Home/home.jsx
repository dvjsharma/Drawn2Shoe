import React from 'react'
import HomeBanner from '../../components/Home-banner/HomeBanner'
import Home_retailers_comp from '../../components/Home-retailers'
import Carousel from '../../components/carousel'
import Carousel2 from '../../components/Carousel2'

const Home = () => {
  return (
    <>
    <HomeBanner/>
    <Carousel/>
    <Home_retailers_comp/>
    <Carousel2/>
  </>
  )
}

export default Home
