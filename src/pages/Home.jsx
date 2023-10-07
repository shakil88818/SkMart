/* eslint-disable no-unused-vars */
import React from 'react'

import HomeUp from '../components/Home/HomeUp/HomeUp.jsx'
import NewSeason from '../components/Home/NewSeason/NewSeason.jsx'
import SummerCollection from '../components/Home/SummerCollection/SummerCollection.jsx'
import DealOfTheWeek from '../components/Home/DealOfTheWeek/DealOfTheWeek.jsx'
import NewSeason2 from '../components/Home/NewSeason2/NewSeason2.jsx'
import CatagoriesProduct from '../components/Home/CatagoriesProduct/CatagoriesProduct.jsx'
import ClientReview from '../components/Home/ClientReview/ClientReview.jsx'
import LastDeal from '../components/Home/LastDeal/LastDeal.jsx'
import Discount from '../components/Home/Discount/Discount.jsx'
import OurLatestNews from '../components/Home/OurLatestNews/OurLatestNews.jsx'
import BestSellerProduct from '../components/Home/BestSellerProduct/BestSellerProduct.jsx'
import FeaturedProduct from '../components/Home/FeaturedProduct/FeaturedProduct.jsx'

const Home = () => {
  return (
    <>
      <HomeUp />
      <NewSeason />
      <BestSellerProduct />
      <SummerCollection />
      <DealOfTheWeek />
      <FeaturedProduct />
      <NewSeason2 />
      <CatagoriesProduct />
      <ClientReview />
      <LastDeal />
      <Discount />
      <OurLatestNews />
    </>
  )
}

export default Home
