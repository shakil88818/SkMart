/* eslint-disable no-unused-vars */
import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '../components/Layout/Layout.jsx'

import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import ShopPage from '../pages/ShopPage.jsx'
import MenPage from '../pages/MenPage.jsx'
import WomenPage from '../pages/WomenPage.jsx'
import BlogPage from '../pages/BlogPage.jsx'


const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element = {<Home />} />
                <Route path = '/shop' element = {<ShopPage/>} />
                <Route path = '/men' element = {<MenPage />} /> 
                <Route path = '/women' element = {<WomenPage />} />
                <Route path = '/blog' element = {<BlogPage />} />
                <Route path = '/contact' element = {<Contact />} />
                <Route path = '/about' element = {<About />} /> 

            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routers
