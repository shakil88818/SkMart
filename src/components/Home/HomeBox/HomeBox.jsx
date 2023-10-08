import {} from 'react'
import { Col, Row } from 'react-bootstrap'

import { FaAngleRight } from "react-icons/fa6";
import HBRightCarousel from './HBRightCarousel';


const HomeBox = () => {
  return (
    <>
      <div className="container-xxl">
        <Row className='hBBottomBar2'>
            <Col lg={3} md={3} sm={12} className='hBSideBar'>

                <div className='hBContainer'>
                    <ul className='hBBottomBar'>
                        <div className='hBItemContainer'>
                            <li><a href="#">Men</a></li>
                            <p><FaAngleRight /></p>
                        </div>

                        <div className='hBItemContainer'>
                            <li><a href="#">Women</a></li>
                            <p><FaAngleRight /></p>
                        </div>

                        <li><a href="#">Kids</a></li>
                        <li><a href="#">Baby</a></li>
                        
                        <div className='hBItemContainer'>
                            <li><a href="#">Shoes</a></li>
                            <p className='hBItemText hBtextBg1'>HOT</p>
                        </div>


                        <li><a href="#">Bags</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Watches</a></li>
                        
                        <div className='hBItemContainer'>
                            <li><a href="#">Cargo Trousers</a></li>
                            <p className='hBItemText hBtextBg2'>NEW</p>
                        </div>

                        <li><a href="#">Outerwear</a></li>
                        <li><a href="#">Wallets</a></li>
                        <li><a href="#">Belts</a></li>
                        <li><a href="#">Best Sellers</a></li>
                        <li><a href="#" className='mb-4'>Featured Products</a></li>
                    </ul>
                </div>

                <div className='hBContainer'>
                    <ul>
                        <div className='hBItemContainer'>
                            <li><a href="#">New Arrivals</a></li>
                            <p className='hBItemText hBtextBg3'>SAVE 30%</p>
                        </div>

                        <li><a href="#">Ready to Wear</a></li>
                        <li><a href="#">All For Men</a></li>
                    </ul>
                </div>


            </Col>


            <Col lg={9} md={9} sm={12}>
                <div className="hBRightContainer">
                <HBRightCarousel />
                </div>
            </Col>
        </Row>

        
      </div>
    </>
  )
}

export default HomeBox
