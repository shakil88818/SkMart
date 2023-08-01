/* eslint-disable no-unused-vars */
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const LastFooter = () => {
  return (
    <>
      <footer className="footerPadding">
        <div className="container-xxl">
            <Row className='footerBottomBorder'>
                <Col lg = {4} md = {12} sm = {12}>
                    <h1 className='skCenter'>SkMart</h1>
                    <p className='lastFooterDesc'>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis in termapol.</p>
                    <p className='lastFooterDesc'>+880 1234567890 sk23097069@gmail.com</p>
            
                </Col>

                    

                <Col lg = {8} md = {12} sm = {12}>

                    <Row>
                        <Col lg = {3} md ={6} sm = {12}>
                            <p className='lastFooterHeading'>Information</p>
                            <p className='lastFooterMenu'>About Us</p>
                            <p className='lastFooterMenu'>Privacy Policy</p>
                            <p className='lastFooterMenu'>Returns Policy</p>
                            <p className='lastFooterMenu'>Shipping Policy</p>
                            <p className='lastFooterMenu'>Dropshipping</p>
                        </Col>
                        <Col lg = {3} md ={6} sm = {12}>
                            <p className='lastFooterHeading'>Account</p>
                            <p className='lastFooterMenu'>Dashboard</p>
                            <p className='lastFooterMenu'>My Orders</p>
                            <p className='lastFooterMenu'>My Wishlist</p>
                            <p className='lastFooterMenu'>Account details</p>
                            <p className='lastFooterMenu'>Track My Orders</p>
                        </Col>
                        <Col lg = {3} md ={6} sm = {12}>
                            <p className='lastFooterHeading'>Shop</p>
                            <p className='lastFooterMenu'>Affiliate</p>
                            <p className='lastFooterMenu'>Bestsellers</p>
                            <p className='lastFooterMenu'>Discount</p>
                            <p className='lastFooterMenu'>Latest Products</p>
                            <p className='lastFooterMenu'>Sale Products</p>
                        </Col>
                        <Col lg = {3} md ={6} sm = {12}>
                            <p className='lastFooterHeading'>Categories</p>
                            <p className='lastFooterMenu'>Women</p>
                            <p className='lastFooterMenu'>Men</p>
                            <p className='lastFooterMenu'>Bags</p>
                            <p className='lastFooterMenu'>Outerwear</p>
                            <p className='lastFooterMenu'>Shoes</p>
                        </Col>
                    </Row>

                </Col>

            </Row>

            
            <div className="container-xxl pt-5">
                <Row className='footerdDeceSmall2'>
                    <Col lg = {8} md = {8} sm = {12}>
                        <p >Copyright 2023 © Shakil khan. All right reserved. Powered by SkMart</p>
                    </Col>
                    <Col lg = {4} md = {4} sm = {12}>
                        <Row>
                            <Col lg = {4} md = {4} sm = {4}>
                                <p>Privacy Policy</p>
                            </Col>
                            <Col lg = {4} md = {4} sm = {4}>
                                <p>Terms and Conditions</p>
                            </Col>
                            <Col lg = {4} md = {4} sm = {4}>
                                <p>Returns Policy</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

        </div>
      </footer>
    </>
  )
}

export default LastFooter
