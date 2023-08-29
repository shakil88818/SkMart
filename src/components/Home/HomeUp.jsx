/* eslint-disable no-unused-vars */
import React from 'react'

import { Col, Image, Row } from 'react-bootstrap'
import HomeUpImg_1 from '../../assets/Image/homeUp_1.png'
import HomeUpImg_onlineSupport from '../../assets/Image/homeUp_onlineSupport.png'
import HomeUpImg_payment from '../../assets/Image/homeUp_payment.png'
import HomeUpImg_money from '../../assets/Image/homeUp_money.png'


const HomeUp = () => {
  return (
    <>
      <div className="container-xxl sectionGap_top">
        <Row>
            <Col lg={3} md={6} sm={12} className='mdMarginbottom smMarginbottom'>
                <div className='d-flex'>
                    <Image src ={HomeUpImg_1} className='HomeUpImg'/>
                    <div>
                    <p className='homeUpHeading marginGap_0'>Free Shipping</p>
                    <p className='description marginGap_0'>Free Shipping for orders over $130.</p>
                    </div>
                </div>
            </Col>



            <Col lg={3} md={6} sm={12} className='mdMarginbottom smMarginbottom'>
                <div className='d-flex'>
                    <Image src ={HomeUpImg_money} className='HomeUpImg'/>
                    <div>
                    <p className='homeUpHeading marginGap_0'>Money Guarantee</p>
                    <p className='description marginGap_0'>Within 30 days for an exchange</p>
                    </div>
                </div>
            </Col>



            <Col lg={3} md={6} sm={12} className='smMarginbottom'>
                <div className='d-flex'>
                    <Image src ={HomeUpImg_onlineSupport} className='HomeUpImg'/>
                    <div>
                    <p className='homeUpHeading marginGap_0'>Online Support</p>
                    <p className='description marginGap_0'>Within 30 days for an exchange.</p>
                    </div>
                </div>
            </Col>



            <Col lg={3} md={6} sm={12}>
                <div className='d-flex'>
                    <Image src ={HomeUpImg_payment} className='HomeUpImg'/>
                    <div>
                    <p className='homeUpHeading marginGap_0'>Flexible Payment</p>
                    <p className='description marginGap_0'>Pay with Multiple Credit Cards.</p>

                    </div>
                </div>
            </Col>
        </Row>
      </div>
    </>
  )
}

export default HomeUp
