/* eslint-disable no-unused-vars */
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Col, Image, Row } from 'react-bootstrap'

import NsBanner1 from '../../../assets/Image/ns_banner1.jpg'
import NsBanner2 from '../../../assets/Image/ns_banner2.jpg'
import NsBanner3 from '../../../assets/Image/ns_banner3.jpg'

const NewSeason = () => {
  return (
    <>
      <div className='sectionGap_top'>
        <div className="container-xxl">
        <Row>
            <Col lg={6} md={12} sm={12} className='nsLeftContainer'>
            
              <Image src={NsBanner1} className='nsImg nsImg1'/>
            
            
            <div className='nsTextDetail'>
                <p className='exSmallHeading'>NEW SEASON</p>
                <h3 className='heading'>Big patterns back in fashion</h3>
                <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, neque.</p>
                <p className='nsShopNowText mt-5'>Shop Now <FaArrowRightLong className='nsShopNow'/></p>
            </div>

            </Col>



            <Col lg={6} md={12} sm={12}>
                <Row>
                  <Col lg={12} md={12} sm={12} className='nsRightContainer1'>
                    <Image src={NsBanner2} className='nsImg nsImg2'/>
                      
                      <div className='nsTextDetail'>
                        <p className='exSmallHeading'>NEW SEASON</p>
                        <h3 className='heading nsHeading2'>The latest mens trends this season</h3>
                        <p className='description'>Do not miss the opportunity</p>
                        <p className='nsShopNowText mt-5'>Shop Now <FaArrowRightLong className='nsShopNow'/></p>
                      </div>
                  </Col>

                  <Col lg={12} md={12} sm={12} className='nsRightContainer1'>
                    <Image src={NsBanner3} className='nsImg'/>

                      <div className='nsTextDetail'>
                        <p className='exSmallHeading'>NEW SEASON</p>
                        <h3 className='heading nsHeading2'>Show your fashion with summer shoes</h3>
                        <p className='description'>Do not miss the opportunity.</p>
                        <p className='nsShopNowText mt-5'>Shop Now <FaArrowRightLong className='nsShopNow'/></p>
                      </div>
                  </Col>
                </Row>
            </Col>
        </Row>
        </div>
      </div>
    </>
  )
}

export default NewSeason
