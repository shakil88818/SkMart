import {} from 'react'



import { FaInstagram,FaCaretDown, FaAngleDown } from "react-icons/fa6";


const ThirdTopNav = () => {
  return (
    <>
        <div className= 'thirdBgHead displayNone'>
            <div className="container-xxl">
                <div className='thirdNavContainer'>
                    <div className='ThirdNavContent'>
                        <p><FaInstagram className='thirdNavIcon'/></p>
                        <p>1.1M </p>
                        <p>Followers <FaCaretDown className=''/> </p>
                    </div>

                    <div className='ThirdNavContent'>
                        <p>Free Shipping World wide for all orders over $199. <span className='thirdNavSpan'>Click and Shop Now.</span></p>
                    </div>

                    <div className='ThirdNavContent'>
                        <p>Order Traking</p>
                        <p>English <FaAngleDown /></p>
                        <p>USD <FaAngleDown /></p>

                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ThirdTopNav
