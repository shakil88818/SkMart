import {} from 'react'

import { FaBars, FaRegUser, FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingCart, HiOutlineSearch } from "react-icons/Hi";
import SelectBox from './SelectBox';


const FourthTopNav = () => {
  return (
    <>
      
      <div className=' bgHead bottomBorder'>
        <div className="container-xxl">
            <div className="fourthNavContainer">
                <div className="fourthNavContent fourthNavContentGapColor">
                    <p><a href="#"> <FaBars className='fourthNavIcon'/> </a></p>
                    <p><a href="#" className='logo'>SkMART</a></p>
                </div>

                <div className="fourthNavContent positionSearchContainer">
                    <input type="text" placeholder='Search your Favorite product..'/>
                    <div className='positionSearchContent'><HiOutlineSearch /></div>
                    
                    <SelectBox />
                </div>

                <div className="fourthNavContent fourthNavContentGapColor">
                    <li><a href="#"><FaRegUser className='fourthNavIcon2'/></a></li>
                    <li><a href="#"><FaRegHeart className='fourthNavIcon2'/></a></li>
                    <li><a href="#"><HiOutlineShoppingCart className='fourthNavIcon2'/></a></li>
      
                </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default FourthTopNav
