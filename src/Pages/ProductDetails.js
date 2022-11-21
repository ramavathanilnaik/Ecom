import React from "react";

import productImages  from "../Data";
import { Container,Row, Col } from "reactstrap";
import {useParams} from "react-router-dom"
import CommonSection from "../Components/UI/CommonSection";


const Productdetails = () => {


    const {id} = useParams();

    const products = productImages.find((item) => item.id === id);

    
    console.log(products);

    return(
        <section className="mt-4 pt-5">
            <CommonSection />
            
            <Container >
                <Row>
                    <Col lg="6">
                        <h1>ProductDetails</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Productdetails;