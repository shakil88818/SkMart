import {} from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";

import ns2_banner1 from '../../../assets/Image/ns2_banner1.jpg'
import ns2_banner2 from '../../../assets/Image/ns2_banner2.jpg'



const NewSeason2 = () => {
  return (
    <>
      <div className="container-xxl sectionGap_top">
        <Row>
            <Col lg={6} md={6} sm={12} className='ns2RightContainer1' >
                <img src={ns2_banner1} className='ns2Img ns2Img2'/>
                      
                <div className='ns2TextDetail'>
                    <p className='exSmallHeading'>NEW SEASON</p>
                    <h3 className='heading ns2Heading2'>The latest mens trends this season</h3>
                    <p className='description'>Do not miss the opportunity</p>
                    <p className='ns2ShopNowText mt-3'>Shop Now <FaArrowRightLong /></p>
                </div>
            </Col>


            <Col lg={6} md={6} sm={12} className='ns2RightContainer1' >
                <img src={ns2_banner2} className='ns2Img ns2Img2'/>
                      
                <div className='ns2TextDetail'>
                    <p className='exSmallHeading'>NEW SEASON</p>
                    <h3 className='heading ns2Heading2'>The latest mens trends this season</h3>
                    <p className='description'>Do not miss the opportunity</p>
                    <p className='ns2ShopNowText mt-3'>Shop Now <FaArrowRightLong/></p>
                </div>
            </Col>

        </Row>
      </div>
    </>
  )
}

export default NewSeason2
