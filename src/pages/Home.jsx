/* eslint-disable no-unused-vars */
import React from 'react'

import HomeUp from '../components/Home/HomeUp/HomeUp.jsx'
import NewSeason from '../components/Home/NewSeason/NewSeason.jsx'
import CatagoriesProduct from '../components/Home/CatagoriesProduct/CatagoriesProduct.jsx'
import ClientReview from '../components/Home/ClientReview/ClientReview.jsx'
import Discount from '../components/Home/Discount/Discount.jsx'
import OurLatestNews from '../components/Home/OurLatestNews/OurLatestNews.jsx'
import SummerCollection from '../components/Home/SummerCollection/SummerCollection.jsx'


const Home = () => {
  return (
    <>
      <HomeUp />
      <NewSeason />
      <SummerCollection />
      <CatagoriesProduct />
      <ClientReview />
      <Discount />
      <OurLatestNews />
    </>
  )
}

export default Home
