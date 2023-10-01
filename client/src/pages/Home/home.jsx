import React from 'react'
import HomeBanner from '../../components/Home-banner/HomeBanner'
import Home_retailers_comp from '../../components/Home-retailers'
import Carousel from '../../components/carousel'
import Guide from '../../components/Guide/guide'

const Home = () => {
  return (
    <>
    <HomeBanner/>
    <Carousel/>
    <Guide/>
    <Home_retailers_comp/>
  </>
  )
}

export default Home
