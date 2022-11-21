import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

import Clock from "../../Components/UI/Clock";

//import {Chairs} from "..//..//Data";

import productImages from "../../Data";

import Service from "../../Services/service";

import "./home.css";

import { Container,Row,Col } from "reactstrap";

import ProductList from "../../Components/UI/ProductList";

const date = new Date().getFullYear();

const Home = () => {

    const[trending,setTrending] = useState([])
    const[bestSales,setBestSales] = useState([])
    const[newArrivals,setNewArrivals] = useState([])
    const[wireLess,setWireLess] = useState([])
    const[watches,setWarches] = useState([])

    useEffect(() => {
        const trendingProducts = productImages.filter((items) => items.category === "Chairs");
        setTrending(trendingProducts);

        const bestSaleProducts = productImages.filter((items) => items.category === "Sofa");
        setBestSales(bestSaleProducts)

        const newProducts = productImages.filter((items) => items.category === "Apple");
        setNewArrivals(newProducts);

        const newHeadphones = productImages.filter((items) => items.category === "Headphones");
        setWireLess(newHeadphones);

        const watchesPopular = productImages.filter((items) => items.category === "Watches");
        setWarches(watchesPopular)
    }, [])

    return(
        <section>

            <div className="fluid-container hero__section">
                <div className="row container__card">
                    
                    <div className="col-12 col-md-6 col-lg-6 card__container">

                        <div className="container hero__content">
                            <div className="pt-3 pb-2 mr-3">
                                <h4 className="hero__subtitle">Trending Products in {date}</h4>
                                <h1 className="headerTag">Make your Interior More Minimalistics & Modern</h1>
                                <h5 className="para">Lorem ipsum dolor sit amet consectetur, adipisicingelit, Quaerat nulla repellat quo eaque alias corporissunt, facilis newsciunt re,  fuguit!</h5>

                            </div>

                            <div className="mt-4">
                                <motion.button whileTap={{scale:1.3}}  className="btn btn-primary m-2">
                                    <Link to="/shop" style={{color:"white",paddingTop:"7px",textDecoration:"none",listStyle:"none"}}>SHOP NOW</Link>
                                </motion.button>
                            </div>
                        </div>
                        
                    </div>

                    <div className="container col-12 col-md-6 col-lg-6 image__container">
                        <div className="cardImages pb-4 mb-3">
                            <img src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600" alt="imageUrl" className="images"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fluid-container ">
                <div className="row">
                    <div className="col-12">
                        <h2 style={{paddingTop:"15px",fontFamily:"Lobster",fontSize:"20px",fontWeight:"700",marginLeft:"25px"}}>Our Service</h2>
                        <Service />
                    </div>
                </div>
            </div>

            <Container>
                <Row>
                    <Col xs="12">
                        <h4 className="mt-3 text-warning text-center" style={{fontWeight:"700",fontSize:"25px",letterSpacing:"1.8px",fontStyle:"italic"}}>Trending <span style={{color:"violet",fontStyle:"italic",fontSize:"30px"}}>Products</span></h4>
                    </Col>

                    <Col xs="12">
                        <ProductList data={trending}/>
                    </Col>
                    
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs="12">
                        <h4 className="mt-3 text-primary text-center" style={{fontWeight:"700",fontSize:"25px",letterSpacing:"1.8px",fontStyle:"italic"}}>Best <span className="text-dark">Sales</span></h4>
                    </Col>

                    <Col xs="12">
                        <ProductList data={bestSales}/>
                    </Col>
                    
                </Row>
            </Container>


            <div className="timer__section contaimer mt-4">
                <Container>
                    <Row>
                        <Col xs="12" lg="6" md="6" >

                            <div className="clock__content m-4">
                                <h2 className="text-white fs-10 mb-4">Limited Offers </h2>
                                <h4 className="text-white fs-10 mt-3">Quality Armchairs & Sofa</h4>
                            </div>

                            <div className="pt-1">
                                <Clock />
                            </div>
                            

                            <motion.button className="bg-white fs-20 m-3 style__btn" whileTap={{scale:1.1}}><Link to="/shop" className="text-black">VIEW MORE</Link></motion.button>

                        </Col>
                        <Col xs="12" lg="6" md="6" className="pt-3">
                            <img src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600" alt="timer" className="timer" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row>
                    <Col xs="12">
                        <h4 className="mt-3 text-secondary text-center" style={{fontWeight:"700",fontSize:"25px",letterSpacing:"1.8px",fontStyle:"italic"}}>Best Sales On <span style={{color:"blue",fontStyle:"italic",fontSize:"30px"}}>Mobile & HeadPhones</span></h4>
                    </Col>

                    <Col xs="12">
                        <ProductList data={newArrivals}/>
                        <ProductList data={wireLess}/>
                    </Col>
                    
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col xs="12">
                        <h4 className="mt-3 pt-4 text-primary text-center" style={{fontWeight:"700",fontSize:"25px",letterSpacing:"1.8px",fontStyle:"italic"}}>Popular <span style={{color:"red",fontStyle:"italic",fontSize:"30px"}}>Watches</span></h4>
                    </Col>

                    <Col xs="12">
                        <ProductList data={watches}/>
                    </Col>
                    
                </Row>
            </Container>

        </section>

    )
}

export default Home;