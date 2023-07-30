/* eslint-disable no-unused-vars */
import React from 'react'

import { Dropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import { FaInstagram, FaFacebook} from "react-icons/fa";


const Header = () => {
  return (
    <>

        <header className="firstTopBg">
            <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                <div className=''>
                    <p className='firstTopText text-center m-0 py-2'>SUMMER SALE FOR ALL SWIM SUITS AND FREE EXPRESS INTERNATIONAL DELIVERY - OFF 50%! <span className='firstTopShop'> SHOP NOW</span></p>
                    </div>
                </div>
            </div>
            </div>
        </header>


        <header className="header-top-strip py-3">
        <div className="container-xxl">
            <div className="row">

                <div className="col-6">
                    <p className='text-white mb-0'>Free Shipping over $100 & free Returns</p>
                </div>


                <div className="col-6">
                    <p className = 'text-end text-white mb-0'>Hotline: <a className='text-white' href="tel:+8801234567891">+880 1234567891</a> </p>
                </div>

            </div>
        </div>
        </header>


        <header className="container-xxl py-1 displayNone">
            <div className="row">
                <div className="col-8 d-flex">
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

                    </div>
                    <div className='secondTopItem'><span className='seconddropText'>Free Shipping World wide for all orders over $199. <a className='clickShop'>Click and Shop Now.</a></span></div>
                    
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
        </header>


      
        <header className="header-upper py-3">
            <div className="container-xxl">
                <div className="row">

                    <div className="col-2">
                        <Link className='text-white'><h2>SkMart</h2></Link>
                    </div>

                    <div className="col-5">
                        <div className="input-group">
                        <input type="text" className="form-control py-3" placeholder="Search Product hear..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
                        </div>
                    </div>

                    <div className="col-5">
                        <div className="header-upper-link d-flex align-items-center justify-content-between">
                            <div>
                                <Link>
                                    <img src="" alt="" />
                                    <p></p>
                                </Link>
                            </div>
                            <div>
                                <Link>
                                    <img src="" alt="" />
                                    <p></p>
                                </Link>
                            </div>
                            <div>
                                <Link>
                                    <img src="" alt="" />
                                    <p></p>
                                </Link>
                            </div>
                            <div>
                                <Link>
                                    <img src="" alt="" />
                                    <p></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
