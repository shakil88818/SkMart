/* eslint-disable no-unused-vars */
import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '../components/Layout/Layout.jsx'

import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'


const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element = {<Home />} />
                <Route path = 'about' element = {<About />} />
                <Route path = 'contact' element = {<Contact />} /> 

            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routers
