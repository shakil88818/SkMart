import {} from 'react'



import { FaInstagram,FaCaretDown } from "react-icons/fa6";

const ThirdTopNav = () => {
  return (
    <>
        <div className='bottomBorder'>
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
                        <p>
                        <select className='selectBorder'>
                            <option>English</option>
                            <option>Bangla</option>
                            <option>Spanish</option>
                        </select>
                        </p>

                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ThirdTopNav
