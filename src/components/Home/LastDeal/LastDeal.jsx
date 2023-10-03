import {} from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaStar,FaRegStarHalfStroke, FaRegHeart } from "react-icons/fa6";

import CountdownTimer from './CountdownTimer.jsx'

import LastDeal_3 from '../../../assets/Image/LastDeal_3.jpg'
import LastDeal_4 from '../../../assets/Image/LastDeal_4.jpg'

const LastDeal = () => {
  return (
    <>
        <div className="container-xxl sectionGap_top">
            <Row>

                <h1 className='topHeadingSection'>Don&apos;t Miss The Last Deals</h1>
                <p className='description LastDealDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, aperiam corrupti? Sunt tenetur itaque odio! Ratione, atque. Ex, quas, corporis quam consequuntur perferendis reprehenderit dolores sapiente quaerat eius aliquid possimus error dicta porro soluta deserunt? Quasi perferendis modi harum vitae!</p>
                
                <Col lg={6} md={12} sm={12}>
                    <div className='LastDealLeftBox'>
                        <Row>
                            <Col lg={5} md={4} sm={4}>
                                <div className="lastDealImgBox">
                                    <img className="lastDealImg" src={LastDeal_3} />

                                    <div className='lastDealHoverIcon'>
                                        <div>
                                            <FaRegHeart className='lastDealHoverIconItem'/>
                                        </div>
                                        <div>
                                            <FaRegHeart className='lastDealHoverIconItem'/>
                                        </div>
                                        <div>
                                            <FaRegHeart className='lastDealHoverIconItem'/>
                                        </div>
                                    </div>

                                    <div className='lastDealpersentage'>
                                        <p>20%</p>
                                    </div>

                                </div>
                            </Col>

                            <Col lg={7} md={8} sm={8}>
                                <div>
                                    <h4 className='lastDealHeading'>Men Formal Shirt & Pant</h4>
                                    <h4 className='lastDealHeading'>$19.90 &mdash; $29.90</h4>

                                    <div>
                                        <div>
                                            <FaStar className='lastDealIcon'/>
                                            <FaStar className='lastDealIcon'/>
                                            <FaStar className='lastDealIcon'/>
                                            <FaStar className='lastDealIcon'/>
                                            <FaRegStarHalfStroke className='lastDealIcon'/>
                                            <span className='reviews'>5 Reviews</span>
                                        </div>

                                        <p className='description2 mt-3'>Lorem ipsum dolor sit, amet consectetur adipisic cupiditate eveniet velit itaque quidem veritatis voluptates, dolorem dolor, iure repellendus adipisci sed.</p>
                                        <h6 className='mt-4'>Offer end in: </h6>

                                        <div className='mt-2'>
                                            <CountdownTimer />
                                        </div>

                                        <p className='lastDealSmallDesc mt-4'>Available: 39 Sold: 60</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>


                    </div>
                    
                </Col>


                <Col lg={6} md={12} sm={12}>
                <div className='LastDealLeftBox'>
                        <Row>
                            <Col lg={5} md={4} sm={4}>
                                <div className="lastDealImgBox">
                                    <img className="lastDealImg" src={LastDeal_4} />

                                    <div className='lastDealHoverIcon'>
                                        <div>
                                            <FaRegHeart className='lastDealHoverIconItem'/>
                                        </div>
                                        <div>
                                            <FaRegHeart className='lastDealHoverIconItem'/>
                                        </div>
                                        <div>
                                            <FaRegHeart className='lastDealHoverIconItem'/>
                                        </div>
                                    </div>

                                    <div className='lastDealpersentage'>
                                        <p>20%</p>
                                    </div>

                                </div>
                            </Col>

                            <Col lg={7} md={8} sm={8}>
                                <div>
                                    <h4 className='lastDealHeading'>Men Formal Shirt & Pant</h4>
                                    <h4 className='lastDealHeading'>$19.90 &mdash; $29.90</h4>

                                    <div>
                                        <div>
                                            <FaStar className='lastDealIcon'/>
                                            <FaStar className='lastDealIcon'/>
                                            <FaStar className='lastDealIcon'/>
                                            <FaStar className='lastDealIcon'/>
                                            <FaRegStarHalfStroke className='lastDealIcon'/>
                                            <span className='reviews'>5 Reviews</span>
                                        </div>

                                        <p className='description2 mt-3'>Lorem ipsum dolor sit, amet consectetur adipisic cupiditate eveniet velit itaque quidem veritatis voluptates, dolorem dolor, iure repellendus adipisci sed.</p>
                                        <h6 className='mt-4'>Offer end in: </h6>

                                        <div className='mt-2'>
                                            <CountdownTimer />
                                        </div>

                                        <p className='lastDealSmallDesc mt-4'>Available: 39 Sold: 60</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>


                    </div>
                </Col>
            </Row>
        </div>     
    </>
  )
}

export default LastDeal
