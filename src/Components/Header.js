import React from "react";
import "./Header.css";

import { NavLink } from "react-router-dom";
import {motion} from "framer-motion"

import  {FaShoppingCart, FaHeart, FaShoppingBag} from "react-icons/fa"
import {AiOutlineMenu} from "react-icons/ai";

import { useSelector } from "react-redux/es/exports";

const nav__link = [
    {
        path:"/",
        display:"Home"
    },

    {
        path:"/shop",
        display:"Shop"
    },

    {
        path:"/cart",
        display:"Cart"
    }
]
//const date = new Date().getFullYear()

const Header = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    return(
        <header className="header">
            <div className="container">
                <div className="row">

                    <div className="nav__wrapper">

                        <div className="logo">
                            <FaShoppingCart style={{fontSize:"30px"}}/>
                            
                            <div style={{fontSize:"20px",fontWeight:"bolder"}}>Multimart</div>
                            
                        </div>

                        <div className="navigation">
                            <ul className="menu">

                                {
                                    nav__link.map((items,index) => {
                                        return(
                                            
                                            <li key={index}>
                                                <NavLink to={items.path}>{items.display}</NavLink>
                                            </li>
                                            
                                        )
                                    })
                                }

                            </ul>
                        </div>

                        <div className="nav__icons">
                            
                            <span className="fav__icon">
                                <FaHeart style={{color:"red"}}/>
                                <span className="badge">1</span>
                            </span>

                            <span className="cart__icon">
                                <FaShoppingBag style={{color:"blue"}}/>
                                <span className="badge">{totalQuantity}</span>
                            </span>

                            <span className="fav__icon">
                                
                                <motion.img whileTap={{scale:1.7}} src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527__340.png" alt="avatar" style={{height:"50px",width:"50px",borderRadius:"50px"}} />
                            </span>


                        </div>

                        <div className="mobile__menu">
                            <div>
                                <AiOutlineMenu style={{color:"blue",fontSize:"29px"}}/>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </header>

    )
}

export default Header;