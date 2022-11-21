import React from "react";
//import {Chairs} from "..//..//Data";
import {Container,Row} from "reactstrap";
import ProductCard from "./ProductCard";

//import "./productlist.css";

const ProductList = ({data}) => {
    return(
        <Container>
            <Row>
                {
                    data.map((item) => (<ProductCard item={item} key={item.id}/>))
                }
            </Row>

        </Container>
    )
}

export default ProductList;