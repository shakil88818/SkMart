/* eslint-disable no-unused-vars */
import React from 'react'
import { Col, Row, InputGroup, Button,Form, Image} from 'react-bootstrap'

import AppStore from '../../assets/Image/app-store.png'
import GooglePlay from '../../assets/Image/google-play.png'

const FirstFooter = () => {
  return (
    <>
      <footer className="footerBg sectionGap_top">
        <div className="container-xxl footerPadding">
          <Row>
            <Col lg = {6} md = {12} sm = {12}>
              <h3 className='footerHeading'>Get our emails for info on</h3>
              <h3 className='footerHeading'>new items, sales and more.</h3>
              <p className = 'footerdDece mb-4'>We will email you a voucher worth £10 off your first order over £50.</p>




              <form className="row">

                  <div className="d-flex flex-row">
                      <div>
                        <input type="email" className="form-control rounded-0 inputPadding" id="inputPassword2" placeholder="Enter Your Email..." required/>
                      </div>

                      <div>
                      <button type="submit" className="btn mb-3 py-2 footerBtn rounded-0">Subscribe</button>
                      </div>
                  </div>

              </form>



              <p className='footerdDeceSmall'>By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.</p>

            </Col>


            <Col lg = {6} md = {12} sm = {12} className='padd'>
              <h3 className='footerHeading'>Need help?</h3>
              <h3 className='footerHeading'>+8801234567890</h3>
              <p className = 'footerdDece'>We are available 8:00am to 7:00pm</p>
              <Image src= {AppStore } className='mt-3' />
              <Image src = {GooglePlay} className='mt-3' />
              <p className='footerdDeceSmall'>Shopping App: Try our View in Your Room feature, manage registries and save payment info.</p>
              
            </Col>

          </Row>
        </div>
      </footer>
    </>
  )
}

export default FirstFooter
