import React from "react";

import { useDispatch } from "react-redux/es/exports";
import { cartAction } from "../../redux/Slice/CartSlice";

import {RiAddLine} from "react-icons/ri";

import {Col} from "reactstrap";

import { Link } from "react-router-dom";

import {toast} from "react-toastify"

import "./productcard.css";
import {motion} from "framer-motion";


const ProductCard = ({item}) => {

    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartAction.addItem({
            id:item.id,
            name:item.name,
            price:item.price,
            image:item.imageUrl,

        }));
        toast.success("Product added successfully")
    }

    return(


            <Col lg="3" md="4" >

                <div className="product__items mt-3" >
                    <div>
                        <motion.img src={item.imageUrl} whileHover={{scale:1.1}} alt="imageUrls" className="product__img"/>
                    </div>
                
                    <div className="pt-2 m-3">
                        <h5 className="mr-5 pt-3 text__header"><Link to={`/shop/${item.id}`}>{item.name}</Link></h5>
                        <span>{item.category}</span>
                    </div>
                
                    <div className="products__card">
                        <div className="m-3">Rs {item.price}</div>
                            <motion.span whileTap={{scale:1.2}} onClick={addToCart}>  <RiAddLine className="icons"/> </motion.span> 
                        </div>
                            
                    </div>
                
                    
            </Col>

        


    )


}

export default ProductCard;