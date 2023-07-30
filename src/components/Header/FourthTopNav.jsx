/* eslint-disable no-unused-vars */
import React from 'react'
import { Dropdown,DropdownButton,InputGroup, Form} from 'react-bootstrap'

import { NavLink, Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'


const FourthTopNav = () => {
  return (
    <>
        <header className="header-top-strip header-upper py-3">
            <div className="container-xxl">
                <div className="row">

                    <div className="col-2">
                        <Link className='text-black'><h2>SkMart</h2></Link>
                    </div>

                    <div className="col-5">
                    
                        <InputGroup className="mb-3">
                            <Form.Control className = 'dropDounBtn' aria-label="Text input with dropdown button" />

                            <DropdownButton
                            className="bg-none border-0"
                            title="Select Catagory"
                            id="input-group-dropdown-2"
                            align="end"
                            >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>

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

export default FourthTopNav
