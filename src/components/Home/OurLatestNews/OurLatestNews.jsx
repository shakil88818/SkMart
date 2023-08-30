/* eslint-disable no-unused-vars */
import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { FaMinus } from "react-icons/fa6";

import Letest_news1 from '../../../../src/assets/Image/latest_news1.jpg'
import Letest_news2 from '../../../../src/assets/Image/latest_news2.jpg'
import Letest_news3 from '../../../../src/assets/Image/latest_news4.jpg'

const OurLatestNews = () => {
  return (
    <>
        <div className='sectionGap_top'>
            <div className="container-xxl">

                <h2 className='topHeadingSection'>Our Latest News</h2>
                <p className='description latestDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptatibus, inventore eum velit deserunt, vitae ratione quam debitis assumenda officiis fuga molestias iusto molestiae saepe. Nostrum facere recusandae nihil error.</p>

                <Row className=''>

                    <Col lg={4} md={6} sm={12} className=''>
                        <div className='latestCard'>
                            <Image src={Letest_news1} className='latestImg' />
                            
                            <p className='latestUpText'>COLLECTION <FaMinus /> 31 Aug 2023</p>
                            <h3 className='latestHeading'>The Best Products That Shape Fashion</h3>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet..</p>
                        </div>
                    </Col>


                    <Col lg={4} md={6} sm={12} className=''>
                        <div className='latestCard'>
                            <Image src={Letest_news2} className='latestImg' />
                            
                            <p className='latestUpText'>FASHON <FaMinus /> 31 Aug 2023</p>
                            <h3 className='latestHeading'>The Best Products That Shape Fashion</h3>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet..</p>
                        </div>
                    </Col>


                    <Col lg={4} md={6} sm={12}>
                        <div className='latestCard'>
                            <Image src={Letest_news3} className='latestImg' />
                            
                            <p className='latestUpText'>CLOTHING <FaMinus /> 31 Aug 2023</p>
                            <h3 className='latestHeading'>The Best Products That Shape Fashion</h3>
                            <p className='description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet..</p>
                        </div>
                    </Col>


                </Row>
            </div>
        </div>
    </>
  )
}

export default OurLatestNews
