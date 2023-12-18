import {} from 'react'
import './BestSellerProductStyle.css'



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSellerProductCard from './BestSellerProductCard';

const BestSellerProduct = () => {

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
            <h1 className='topHeadingSection'>Best Seller Products</h1>
            <p className='description LastDealDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, aperiam corrupti? Sunt tenetur itaque odio! Ratione, atque. Ex, quas, corporis quam consequuntur perferendis reprehenderit dolores sapiente quaerat eius aliquid possimus error dicta porro soluta deserunt? Quasi perferendis modi harum vitae!</p>
                
        <div className="carousel">
        <Slider {...settings}>


        <BestSellerProductCard />
        <BestSellerProductCard />
        <BestSellerProductCard />
        <BestSellerProductCard />
        <BestSellerProductCard />
        <BestSellerProductCard />
        <BestSellerProductCard />
        <BestSellerProductCard />
        <BestSellerProductCard />

        </Slider>
        </div>

        </div>
    </>
  )
}

export default BestSellerProduct
