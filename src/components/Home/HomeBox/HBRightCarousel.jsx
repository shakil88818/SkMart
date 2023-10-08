import {} from 'react'

import { FaArrowRightLong } from "react-icons/fa6";
import HB1 from '../../../assets/Image/hb_1.jpg'

const HBRightCarousel = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={HB1} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <p className='pb-3'>Winter 2023 Collection</p>
        <h2>Making somenone feel preety is an art</h2>
        <p className='nsShopNowText mt-3'>Shop Collection <FaArrowRightLong className='nsShopNow'/></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={HB1} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <p className='pb-3'>Winter 2023 Collection</p>
        <h2>Making somenone feel preety is an art</h2>
        <p className='nsShopNowText mt-3'>Shop Collection <FaArrowRightLong className='nsShopNow'/></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={HB1} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <p className='pb-3'>Winter 2023 Collection</p>
        <h2>Making somenone feel preety is an art</h2>
        <p className='nsShopNowText mt-3'>Shop Collection <FaArrowRightLong className='nsShopNow'/></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default HBRightCarousel
