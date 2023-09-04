/* eslint-disable no-unused-vars */
import React from 'react'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import { Row } from 'react-bootstrap'

import catg_men from '../../../assets/Image/catg_men.jpg'
import catg_women from '../../../assets/Image/catg_women.jpg'
import catg_shoes from '../../../assets/Image/catg_shoes.jpg'
import catg_bag from '../../../assets/Image/catg_bag.jpg'
import catg_outerwear from '../../../assets/Image/catg_outerwear.jpg'
import catg_pants from '../../../assets/Image/catg_pants.jpg'


const CatagoriesProduct = () => {

    let settings = {

        autoplay:true,
        autoplaySpeed:3000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows:true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          // {
          //   breakpoint: 480,
          //   settings: {
          //     slidesToShow: 1,
          //     slidesToScroll: 1
          //   }
          // }
        ]
      };

      
  return (
    <>
        <div className="container-xxl sectionGap_top">
            <h2 className='topHeadingSection'>Best for your Catagories</h2>
            <p className='description latestDesc'>19 categories belonging to a total of 45592 products</p>
            <Row className='mx-4 text-center justify-content-center'>
              
            <Slider {...settings} className='catg_circleImgw'>

              <div >
                <img className='catg_circleImg' src={catg_men} />
                <h4 className='catgTextPadding'>Mens</h4>
              </div>

              <div>
                <img className='catg_circleImg' src={catg_women} />
                <h4 className='catgTextPadding'>Women</h4>
              </div>

              <div>
                <img className='catg_circleImg' src={catg_shoes} />
                <h4 className='catgTextPadding'>Shoes</h4>
              </div>

              <div>
                <img className='catg_circleImg' src={catg_pants} />
                <h4 className='catgTextPadding'>Pants</h4>
              </div>

              <div>
                <img className='catg_circleImg' src={catg_outerwear} />
                <h4 className='catgTextPadding'>Outerwear</h4>
              </div>

              <div>
                <img className='catg_circleImg' src={catg_bag} />
                <h4 className='catgTextPadding'>Bags</h4>
              </div>

            </Slider>
            </Row>

        </div>
    </>
  )
}

export default CatagoriesProduct
