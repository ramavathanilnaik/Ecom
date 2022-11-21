import React from "react";
import "./routes.css";

import {Routes, Route} from "react-router-dom";


import Home from "..//Pages/Home/home"
import Shop from "..//Pages/Shop/shop";
import Cart from "..//Pages/Cart/cart";
import CheckOut from "..//Pages/CheckOut";
import SignUp from "..//Pages/SignUp";
import Login from "..//Pages/Login";
import Productdetails from "..//Pages/ProductDetails";


const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<Productdetails/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/signup" element={<SignUp />} />

        </Routes>
    )
}

export default Router;