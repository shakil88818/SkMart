/* eslint-disable no-unused-vars */
import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { FaInstagram, FaFacebook} from "react-icons/fa";

const ThirdTopNav = () => {
  return (
    <>
      <header className="header-top-strip py-2 displayNone">
        <div className="container-xxl">
            <div className="row">
                <div className="col-8">
                <div className='d-flex'>
                        <div className='secondTopItem gap-10' >
                        <FaInstagram className='socialIcon' /> <span>2.5M</span>
                        </div>

                        <div>
                            <Dropdown>
                            <Dropdown.Toggle className='text-dark bg-transparent gap-0 border-0 seconddropText' id="dropdown-basic">
                                Followers
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='seconddropText dropdownBox gap-10 align-item-center'>
                                <Dropdown.Item href="#/action-1"><FaFacebook/> Facebook</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Twiter</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Linkedin</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Instagram</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Github</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            
                        </div>

                        <div className='secondTopItem'><span className='seconddropText'>Free Shipping World wide for all orders over $199. <a className='clickShop'>Click and Shop Now.</a></span></div>
                    </div>
                </div>



                <div className="col-4">

                    <div className='secondTopItem'>
                    
                    <div className='secondTopItem' >
                        <span className=''>Order Traking</span>
                    </div>

                    <div>
                        <Dropdown>
                            <Dropdown.Toggle className='text-dark bg-transparent border-0 seconddropText' id="dropdown-basic">
                                English
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='seconddropText dropdownBox2 align-item-center'>
                                
                                <Dropdown.Item href="#/action-3">Bangal</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">English</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Spanis</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                    
                    

                        <div>
                            <Dropdown>
                            <Dropdown.Toggle className='text-dark bg-transparent gap-0 border-0 seconddropText' id="dropdown-basic">
                                USD
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='seconddropText dropdownBox2 gap-10 align-item-center'>
                                
                                <Dropdown.Item href="#/action-3">USD</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">INR</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">GBP</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </div>
                
                </div>



            </div>
        </div>
      </header>
    </>
  )
}

export default ThirdTopNav
