import React,{useState} from "react";

import CommonSection from "../../Components/UI/CommonSection";
import {FaSearch} from "react-icons/fa"
import { Container, Row, Col } from "reactstrap";

import productImages from "..//..//Data";
import ProductList from "..//..//Components/UI/ProductList";

import "./shop.css";

const Shop = () => {
    
    const[productsData,setProductsData] = useState(productImages);

    const handlerFilter = (e) => {
        const filterValue = e.target.value;
        
        if(filterValue === "Chairs") {
            const filterdProduct = productImages.filter((item) => item.category === "Chairs")

            setProductsData(filterdProduct);
        }

        if(filterValue === "Sofa") {
            const filterdProduct = productImages.filter((item) => item.category === "Sofa")

            setProductsData(filterdProduct);
        }

        if(filterValue === "Headphones") {
            const filterdProduct = productImages.filter((item) => item.category === "Headphones")

            setProductsData(filterdProduct);
        }

        if(filterValue === "Apple") {
            const filterdProduct = productImages.filter((item) => item.category === "Apple")

            setProductsData(filterdProduct);
        }

        if(filterValue === "Watches") {
            const filterdProduct = productImages.filter((item) => item.category === "Watches")

            setProductsData(filterdProduct);
        }
    }

    const handleSearch = (e) => {
        const searchTerm = e.target.value;

        const searchedProducts = productImages.filter((item) => item.category.toLowerCase().includes(searchTerm.toLowerCase()) )

        setProductsData(searchedProducts)
    }

    return(
        <div className=" mt-5 pt-4">

            <CommonSection title="Products"/>

            <Container>
                <Row>
                    <Col xs="6" lg="3" md="3">
                        <div className="filter__widges">

                            <select className="category__items" onClick={handlerFilter}>
                                <option>Filter by Category</option>
                                <option value="Watches">Watches</option>
                                <option value="Apple">Mobile</option>
                                <option value="Headphones">HeadPhone</option>
                                <option value="Chairs">Chair</option>
                                <option value="Sofa">Sofa</option>
                            </select>
                        
                        </div>
                    </Col>

                    <Col xs="6" lg="3" md="3">
                        <div className="filter__widges">
                            <select className="category__items">
                                <option>Sort by Order</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>

                            </select>
                        </div>
                    </Col>

                    <Col xs="12" lg="6" md="6" className="pt-3">
                        <div className="search-box">
                            <input type="text" placeholder="search..." onChange={handleSearch}/>
                            <span>
                                <FaSearch />
                            </span>
                        </div>    
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    {
                        productsData.length === 0 ? <h1 className="text-primary pt-4 pb-5 mb-4 text-center fs-5">No Products are Found</h1> :
                        <ProductList data={productsData}/>
                    }
                </Row>
            </Container>

        </div>
    )
}

export default Shop;