/* eslint-disable no-unused-vars */
import React from 'react'
import { Col,Row } from 'react-bootstrap'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import CircleImg from '../../../assets/Image/sk.jpg'

const ClientReview = () => {

    let settings = {
      autoplay:true,
      autoplaySpeed:3000,
      dots: true,

      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <>
      <div className="container-xxl sectionGap_top">

          <h2 className='topHeadingSection'>Latest Client Reviews</h2>
          <p className='description latestDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptatibus, inventore eum velit deserunt, vitae ratione quam debitis assumenda officiis fuga molestias iusto molestiae saepe. Nostrum facere recusandae nihil error.</p>

          <Slider {...settings} className='siderPadding'>
          <div>
              <Row className='text-center justify-content-center'>
                <Col lg = {6} md ={6} sm = {12}>
                <img className='circleImg' src={CircleImg} />
                  <div className='faStar'>
                    <FaStar className='mx-1'/>
                    <FaStar className='mx-1'/>
                    <FaStar className='mx-1'/>
                    <FaStar className='mx-1'/>
                    <FaStar className='mx-1'/>
                  </div>
                  <h4 className = "mdllHeading">Web Development</h4>
                  <p className = "description px-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quod maiores deserunt provident illo ab qui delectus voluptatibus quasi fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis reiciendis ducimus eligendi distinctio ex voluptas ullam totam in cupiditate earum!</p>
                </Col>
              </Row>
          </div>


          <div>
              <Row className='text-center justify-content-center'>
                <Col lg = {6} md ={6} sm = {12}>
                <img className='circleImg' src={CircleImg} />
                  <div className='faStar'>
                    <FaStar className='mx-1'/>
                    <FaStar className='mx-1'/>
                    <FaStar className='mx-1'/>
                    <FaStar className='mx-1'/>
                    <FaStar className='mx-1'/>
                  </div>
                  <h4 className = "mdllHeading">Web Development</h4>
                  <p className = "description px-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quod maiores deserunt provident illo ab qui delectus voluptatibus quasi fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis reiciendis ducimus eligendi distinctio ex voluptas ullam totam in cupiditate earum!</p>
                </Col>
              </Row>
          </div>




          <div>
              <Row className='text-center justify-content-center'>
                <Col lg = {6} md ={6} sm = {12}>
                <img className='circleImg' src={CircleImg} />
                  <div className='faStar'>
                    <FaStar className='mx-1'/>
                    <FaStar className='mx-1'/>
                    <FaStar className='mx-1'/>
                    <FaStar className='mx-1'/>
                    <FaStar className='mx-1'/>
                  </div>
                  <h4 className = "mdllHeading">Web Development</h4>
                  <p className = "description px-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quod maiores deserunt provident illo ab qui delectus voluptatibus quasi fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis reiciendis ducimus eligendi distinctio ex voluptas ullam totam in cupiditate earum!</p>
                </Col>
              </Row>
          </div>




          <div>
              <Row className='text-center justify-content-center'>
                <Col lg = {6} md ={6} sm = {12}>
                  <img className='circleImg' src={CircleImg} />
                  <div className='faStar'>
                    <FaStar className='mx-1'/>
                    <FaStar className='mx-1'/>
                    <FaStar className='mx-1'/>
                    <FaStar className='mx-1'/>
                    <FaStar className='mx-1'/>
                  </div>
                  <h4 className = "mdllHeading">Web Development</h4>
                  <p className = "description px-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quod maiores deserunt provident illo ab qui delectus voluptatibus quasi fugit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis reiciendis ducimus eligendi distinctio ex voluptas ullam totam in cupiditate earum!</p>
                </Col>
              </Row>
          </div>

          
          </Slider>

      </div>
    </>
  )
}

export default ClientReview
