import {} from 'react'
import '../BestSellerProduct/BestSellerProductStyle.css'
import { FaStar,FaRegStarHalfStroke, FaRegHeart } from "react-icons/fa6";

import BestSeller1 from '../../../assets/Image/best-Seller-1.jpeg'


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
        <div>
            <div className="box bestSellerImgBox imgHoverContainer">
                <img src={BestSeller1}/>
                <div className='bestSellerIcon'>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                </div>

                <div className='bestSellerpersentage'>
                    <p>20%</p>
                </div>
            </div>

            <div className='BestSellerDesc'>
                <div className='BestSellerDescIcon'>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaRegStarHalfStroke /></p>
                    <p className='BestSellerReviews'>5 reviews</p>
                </div>
                    <p>Check Our products details</p>
                    <p><del>$170.50</del> <span className='BestSellerReviews'>$100</span></p>
            </div>   

        </div>



        <div>
            <div className="box bestSellerImgBox imgHoverContainer">
                <img src={BestSeller1}/>
                <div className='bestSellerIcon'>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                </div>

                <div className='bestSellerpersentage'>
                    <p>20%</p>
                </div>
            </div>

            <div className='BestSellerDesc'>
                <div className='BestSellerDescIcon'>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaRegStarHalfStroke /></p>
                    <p className='BestSellerReviews'>5 reviews</p>
                </div>
                    <p>Check Our products details</p>
                    <p><del>$170.50</del> <span className='BestSellerReviews'>$100</span></p>
            </div>   

        </div>





        <div>
            <div className="box bestSellerImgBox imgHoverContainer">
                <img src={BestSeller1}/>
                <div className='bestSellerIcon'>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                </div>

                <div className='bestSellerpersentage'>
                    <p>20%</p>
                </div>
            </div>

            <div className='BestSellerDesc'>
                <div className='BestSellerDescIcon'>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaRegStarHalfStroke /></p>
                    <p className='BestSellerReviews'>5 reviews</p>
                </div>
                    <p>Check Our products details</p>
                    <p><del>$170.50</del> <span className='BestSellerReviews'>$100</span></p>
            </div>   

        </div>






        <div>
            <div className="box bestSellerImgBox imgHoverContainer">
                <img src={BestSeller1}/>
                <div className='bestSellerIcon'>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                </div>

                <div className='bestSellerpersentage'>
                    <p>20%</p>
                </div>
            </div>

            <div className='BestSellerDesc'>
                <div className='BestSellerDescIcon'>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaRegStarHalfStroke /></p>
                    <p className='BestSellerReviews'>5 reviews</p>
                </div>
                    <p>Check Our products details</p>
                    <p><del>$170.50</del> <span className='BestSellerReviews'>$100</span></p>
            </div>   

        </div>




        <div>
            <div className="box bestSellerImgBox imgHoverContainer">
                <img src={BestSeller1}/>
                <div className='bestSellerIcon'>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                </div>

                <div className='bestSellerpersentage'>
                    <p>20%</p>
                </div>
            </div>

            <div className='BestSellerDesc'>
                <div className='BestSellerDescIcon'>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaRegStarHalfStroke /></p>
                    <p className='BestSellerReviews'>5 reviews</p>
                </div>
                    <p>Check Our products details</p>
                    <p><del>$170.50</del> <span className='BestSellerReviews'>$100</span></p>
            </div>   

        </div>



        <div>
            <div className="box bestSellerImgBox imgHoverContainer">
                <img src={BestSeller1}/>
                <div className='bestSellerIcon'>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                </div>

                <div className='bestSellerpersentage'>
                    <p>20%</p>
                </div>
            </div>

            <div className='BestSellerDesc'>
                <div className='BestSellerDescIcon'>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaRegStarHalfStroke /></p>
                    <p className='BestSellerReviews'>5 reviews</p>
                </div>
                    <p>Check Our products details</p>
                    <p><del>$170.50</del> <span className='BestSellerReviews'>$100</span></p>
            </div>   

        </div>





        <div>
            <div className="box bestSellerImgBox imgHoverContainer">
                <img src={BestSeller1}/>
                <div className='bestSellerIcon'>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                </div>

                <div className='bestSellerpersentage'>
                    <p>20%</p>
                </div>
            </div>

            <div className='BestSellerDesc'>
                <div className='BestSellerDescIcon'>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaRegStarHalfStroke /></p>
                    <p className='BestSellerReviews'>5 reviews</p>
                </div>
                    <p>Check Our products details</p>
                    <p><del>$170.50</del> <span className='BestSellerReviews'>$100</span></p>
            </div>   

        </div>



        <div>
            <div className="box bestSellerImgBox imgHoverContainer">
                <img src={BestSeller1}/>
                <div className='bestSellerIcon'>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                </div>

                <div className='bestSellerpersentage'>
                    <p>20%</p>
                </div>
            </div>

            <div className='BestSellerDesc'>
                <div className='BestSellerDescIcon'>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaRegStarHalfStroke /></p>
                    <p className='BestSellerReviews'>5 reviews</p>
                </div>
                    <p>Check Our products details</p>
                    <p><del>$170.50</del> <span className='BestSellerReviews'>$100</span></p>
            </div>   

        </div>




        <div>
            <div className="box bestSellerImgBox imgHoverContainer">
                <img src={BestSeller1}/>
                <div className='bestSellerIcon'>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                    <div>
                        <FaRegHeart className='bestSellerIconItem'/>
                    </div>
                </div>

                <div className='bestSellerpersentage'>
                    <p>20%</p>
                </div>
            </div>

            <div className='BestSellerDesc'>
                <div className='BestSellerDescIcon'>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaStar /></p>
                    <p><FaRegStarHalfStroke /></p>
                    <p className='BestSellerReviews'>5 reviews</p>
                </div>
                    <p>Check Our products details</p>
                    <p><del>$170.50</del> <span className='BestSellerReviews'>$100</span></p>
            </div>   

        </div>









        </Slider>
        </div>

        </div>
    </>
  )
}

export default FeaturedProduct;
