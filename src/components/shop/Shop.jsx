import {useState} from 'react'
import ShopHead from "./ShopHead"
import BagImg from '../../assets/Image/catg_bag.jpg'
import { FaStar, FaStarHalf } from "react-icons/fa6";

import { MdViewHeadline, MdViewWeek,  MdViewStream, MdTableRows} from "react-icons/md";


const Shop = () => {
    const [grid, setGrid] = useState(4)
    alert(grid)
  return (
    <>
        <ShopHead title="Shops" />
        <div className="shopContainer py-5 ">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="filterCard mb-3">
                            <h3 className="shopTitle">Shop By Catagories</h3>
                            <div className="filterContent">
                                <ul className="ps-0">
                                    <li>Men</li>
                                    <li>Women</li>
                                    <li>Kids</li>
                                    <li>Laptops</li>
                                </ul>
                            </div>
                        </div>

                        <div className="filterCard mb-3">
                            <h3 className="shopTitle">Filter By</h3>
                            <div>
                                <h5 className="subTitle">Availablelity</h5>
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="In Stock">
                                        In Stock (1)
                                    </label>
                                    </div>
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                    <label className="form-check-label" htmlFor="Out of Stock ">
                                        Out of Stock (0)
                                    </label>
                                </div>

                                <div>
                                    <h5 className="subTitle">Price</h5>

                                    <div className="shopPriceBox">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="From"/>
                                            <label htmlFor="From">From</label>
                                        </div>

                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="To"/>
                                            <label htmlFor="To">To</label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h5 className="subTitle mb-3">Colors</h5>
                                    <div className="colors">
                                        <ul className="ps-0">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h5 className="subTitle mb-3">Size</h5>

                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="color-1"/>
                                    <label className="form-check-label" htmlFor="color-1">
                                        S (1)
                                    </label>
                                    </div>


                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="color-2"/>
                                    <label className="form-check-label" htmlFor="color-2">
                                        M (2)
                                    </label>
                                    </div>

                 
                                </div>
                            </div>
                        </div>
                        <div className="filterCard mb-3">
                        <h3 className="shopTitle">Products tags</h3>
                            <div className="productTags">
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Shirt</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Pant</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Belt</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                            </div>
                        </div>
                        <div className="filterCard mb-3">
                            <h3 className="shopTitle">Random products</h3>
                                <div className="row">
                                    <div className="col-4">
                                    <div className="rendomImgBox">
                                        <img src={BagImg} className="RendomImg" alt="bag"/>
                                    </div>
                                    </div>
                                    
                                    <div className="col-7 ps-0">
                                        <h6 className="rendomTitle mb-1">A beauitiful bag made in bangladesh</h6>
                                        <p className="rendomIcon mb-1">
                                            <FaStar size={15}/>
                                            <FaStar size={15}/>
                                            <FaStar size={15}/>
                                            <FaStar size={15}/>
                                            <FaStarHalf size={15}/>
                                        </p>
                                        <p className="rendomPrice mb-3">Price: $120.00</p>
                                    </div>
                                </div>




                                <div className="row">
                                    <div className="col-4">
                                    <div className="rendomImgBox">
                                        <img src={BagImg} className="RendomImg" alt="bag"/>
                                    </div>
                                    </div>
                                    
                                    <div className="col-7 ps-0 me-0">
                                        <h6 className="rendomTitle mb-1">A beauitiful bag made in bangladesh</h6>
                                        <p className="rendomIcon mb-1">
                                            <FaStar size={15}/>
                                            <FaStar size={15}/>
                                            <FaStar size={15}/>
                                            <FaStar size={15}/>
                                            <FaStarHalf size={15}/>
                                        </p>
                                        <p className="rendomPrice mb-3">Price: $120.00</p>

                                    </div>
                                </div>
                            
                        </div>
                    </div>



                    <div className="col-9">
                        <div className="row bg-white rounded-2 py-3">
                            <div className="col-6">
                                <div className="shopMenuBox">
                                    <p className="pp">Short By:</p>

                                    <select className="form-select bg-light" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-6 shopMenuBox2 d-flex justify-content-end gap-10">
                                <p className="bg-light pp">21 Products</p>
                                <div className="shopMenuIcon">
                                    <div><MdViewHeadline size={23} onClick={()=>setGrid(4)} /></div>
                                    <div><MdViewWeek size={23} onClick={()=>setGrid(3)} /></div>
                                    <div> <MdViewStream size={23} onClick={()=>setGrid(2)} /></div>
                                    <div><MdTableRows size={23} onClick={()=>setGrid(1)} /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Shop
