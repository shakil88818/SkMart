import { FaStar,FaRegStarHalfStroke, FaRegHeart } from "react-icons/fa6";

import BestSeller1 from '../../../assets/Image/best-Seller-1.jpeg'

const BestSellerProductCard = () => {
  return (
    <>
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
    </>
  )
}

export default BestSellerProductCard
