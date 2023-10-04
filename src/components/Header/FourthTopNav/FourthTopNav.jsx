import {} from 'react'

import { FaBars } from "react-icons/fa6";

import CustomSelect from './se'

const FourthTopNav = () => {
  return (
    <>
      <div className='bottomBorder'>
        <div className="container-xxl">
            <div className="fourthNavContainer">
                <div className="fourthNavContent">
                    <p><a href="#"> <FaBars className='fourthNavIcon'/> </a></p>
                    <p><a href="#" className='logo'>SkMART</a></p>
                </div>

                <div className="fourthNavContent">
                    <CustomSelect />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default FourthTopNav
