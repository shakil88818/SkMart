import {} from 'react'
import '../BestSellerProduct/BestSellerProductStyle.css'

import FeatureProductCard from './FeatureProductCard'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row } from 'react-bootstrap';

const FeaturedProduct = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
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
            <Row className='pb-4'>
                <Col lg={4} md={3} sm={12}>
                    <h3 className=''>Featured Products</h3>
                </Col>

                <Col lg={8} md={9} sm={12}>
                    <p className='description'>Lorem ipsum dolor ng Sunt tenetur itaque odio! Ratione, atque. Ex, quas, corporis quam consequuntur perferendis reprehenderit dolores sapiente quaerat eius aliquid possimus error dicta porro soluta deserunt? Quasi perferendis modi harum vitae!</p>
                </Col>
            </Row>
                
        <div className="carousel">
        <Slider {...settings}>
        
        <FeatureProductCard />
        <FeatureProductCard />
        <FeatureProductCard />
        <FeatureProductCard />
        <FeatureProductCard />
        <FeatureProductCard />
        <FeatureProductCard />
        <FeatureProductCard />


        </Slider>
        </div>

        </div>
    </>
  )
}

export default FeaturedProduct;
