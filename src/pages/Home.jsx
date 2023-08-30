/* eslint-disable no-unused-vars */
import React from 'react'

import HomeUp from '../components/Home/HomeUp/HomeUp.jsx'
import NewSeason from '../components/Home/NewSeason/NewSeason.jsx'
import Discount from '../components/Home/Discount/Discount.jsx'
import OurLatestNews from '../components/Home/OurLatestNews/OurLatestNews.jsx'

const Home = () => {
  return (
    <>
      <HomeUp />
      <NewSeason />
      <Discount />
      <OurLatestNews />
    </>
  )
}

export default Home
