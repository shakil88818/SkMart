import {} from 'react'
import {Row, Col} from 'react-bootstrap'


import { FaAngleDown } from "react-icons/fa6";



const FifthTopNav = () => {
  return (
    <>
    <div className="bottomBorder fifthHead">
        <div className="container-xxl">
            <Row className='fifthLeftCol'>
              <Col lg={3} md={3} sm={12} className="sidebar">
                  <div className="fifthLeftContent">
                    <p>All Catagories</p>
                    <p><FaAngleDown className='fifthLeftIcon' /></p>
                  </div>
              </Col >

              <Col lg={9} md={9} sm={12} className='contentCenter'>
                  <div className="fifthRightContent ">
                      <ul>


                        <li><a href="#" >Home <span><FaAngleDown className='fifthRightIcon' /></span></a></li>

                        <li><a href="#" >Shop <FaAngleDown className='fifthRightIcon'/></a></li>
                        <li><a href="#" >Men</a></li>
                        <li><a href="#" >Women</a></li>
                        <li><a href="#" >Blog</a></li>
                        <li><a href="#" >Contact Us</a></li>
                        <li><a href="#" >About Us</a></li>
                      </ul>
                  </div>
              </Col >

            </Row>
        </div>
      </div>
    </>
  )
}

export default FifthTopNav
