import {} from 'react'
import {Row, Col} from 'react-bootstrap'


import { FaAngleDown } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';



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
                      <div className='wrapper'>
                        <ul className='navMenu'>


                          <NavLink>
                            <Link to="/" className='fifthRightContentItem'>Home <span><FaAngleDown className='fifthRightIcon' /></span></Link>
                            {/* <ul className='drop-menu'>
                              <li><a href="#">New Seasion</a></li>
                              <li><a href="#">Best Seller Products</a></li>
                              <li><a href="#">Deal Of the Week</a></li>
                              <li><a href="#">Featured Products</a></li>
                              <li><a href="#">Best Catagories</a></li>
                              <li><a href="#">Buyers Review</a></li>
                              <li><a href="#">Last Deal</a></li>
                              <li><a href="#">Latest News</a></li>
                            </ul> */}
                          </NavLink>




                          <NavLink><Link to="/shop" className='fifthRightContentItem'>Shop <FaAngleDown className='fifthRightIcon'/></Link></NavLink>
                          <NavLink><Link to="/men" className='fifthRightContentItem'>Men</Link></NavLink>
                          <NavLink><Link to="/women" className='fifthRightContentItem'>Women</Link></NavLink>
                          <NavLink><Link to="blog" className='fifthRightContentItem'>Blog</Link></NavLink>
                          <NavLink><Link to="contact" className='fifthRightContentItem'>Contact Us</Link></NavLink>
                          <NavLink><Link to="/about" className='fifthRightContentItem'>About Us</Link></NavLink>
                        </ul>
                      </div>

                  </div>
              </Col >

            </Row>
        </div>
      </div>
    </>
  )
}

export default FifthTopNav
