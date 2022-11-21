import React,{useState} from "react";

import productImages  from "../Data";
import { Container,Row, Col } from "reactstrap";
import {useParams} from "react-router-dom"
import CommonSection from "../Components/UI/CommonSection";
import { set } from "immer/dist/internal";

const Productdetails = () => {

    const[cartItems,setCartItems]=useState([]);

    const {id} = useParams();

    const products = cartItems.find((item) => item.id === id);
    
    
    //const products = productImages.find((item) => item.id === id);
    
    const {imageUrl,name,description,reviews,category} = products;

    return(
        <section className="mt-4 pt-5">
            <CommonSection />
            
            <Container >
                <Row>
                    <Col lg="6">
                        <img src={imageUrl} alt="productDetails"/>
                        <h1>{name}</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Productdetails;