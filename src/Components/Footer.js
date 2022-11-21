import React from "react";
import { FaShippingFast,FaSearchLocation, FaPhone,FaMailBulk } from "react-icons/fa"
import { Link } from "react-router-dom";
import { Container,Row,Col } from "reactstrap";

const Footer = () => {
    let date = new Date().getFullYear();
    return(
        <div className="fluid-container bg-dark" style={{borderRadius:"10px"}}>
            <Container>
                <Row className="pt-3">

                    <Col xs="6" lg="3" md="3" className="pt-2">
                        <div className="m-3" style={{display:"flex",flexDirection:"column",marginTop:"3px"}}>

                            <div style={{display:"flex",alignItems:"center",marginTop:"1px"}}>
                                <Link to="/">
                                    <FaShippingFast style={{background:"white",color:"black",fontSize:"35px",borderRadius:"50%",height:"50px",width:"50px",padding:"5px"}}/>
                                </Link>
                                <span style={{color:"white",fontSize:"25px",fontWeight:"700",marginLeft:"5px"}}>Multimart</span>

                            </div>
                            
                            <h6 className="text-white mt-3"style={{fontSize:"20px"}} >Lorem ipsum dolor sit amet consectetur, adipisicingelit, Quaerat nulla repellat quo eaque alias corporissunt, facilis newsciunt re,  fuguit!</h6>
                        
                        </div>
                        
                    </Col>

                    <Col xs="6" lg="3" md="4" sm="6" className="pt-3">
                        <div style={{display:"flex",flexDirection:"column"}}>
                            <h3 className="text-white">Top Categories</h3>
                            <ul>
                                <li className="mt-3 text-white" style={{listStyle:"none",textDecoration:"none",fontSize:"20px"}} >Mobile Phones</li>
                                <li className="mt-3 text-white" style={{listStyle:"none",textDecoration:"none",fontSize:"20px"}}>Modern ArmChairs</li>
                                <li className="mt-3 text-white" style={{listStyle:"none",textDecoration:"none",fontSize:"20px"}}>Sofa</li>
                                <li className="mt-3 text-white" style={{listStyle:"none",textDecoration:"none",fontSize:"20px"}}>Analog Watches</li>
                            </ul>
                        </div>
                    </Col>

                    <Col xs="6" lg="3" md="4" sm="6" className="pt-3">
                        <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}}>
                            
                            <h3 className="text-white m-2">Useful Links</h3>
                            
                            <ul>
                                <li><Link to="/shop" style={{listStyle:"none",textDecoration:"none",color:"white",fontSize:"20px"}}>Shop</Link></li>
                                <li className="mt-3"><Link to="/cart" style={{listStyle:"none",textDecoration:"none",color:"white",fontSize:"20px"}}>Cart</Link></li>
                                <li className="mt-3"><Link to="/login" style={{listStyle:"none",textDecoration:"none",color:"white",fontSize:"20px"}}>Login</Link></li>
                                <li className="mt-3"><Link to="#" style={{listStyle:"none",textDecoration:"none",color:"white",fontSize:"20px"}}>Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </Col>

                    <Col xs="6" lg="3" md="4" sm="6" className="pt-3">
                        
                        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        
                            <h4 className="text-white text-start">Contact</h4>

                            <ul>
                                <li className="mt-3" style={{display:"flex",flexDirection:"row",alignItems:"center",listStyle:"none",textDecoration:"none"}}>
                                    <div>
                                        <FaSearchLocation style={{fontSize:"25px",color:"white"}}/>
                                        <span className="m-3" style={{color:"white",fontSize:"15px",width:"200px"}}>123-4,JubliHills,Hyderabab</span>
                                    </div>
                                </li>

                                <li className="mt-3" style={{display:"flex",flexDirection:"row",alignItems:"center",listStyle:"none",textDecoration:"none"}}>
                                    <FaPhone  style={{fontSize:"25px",color:"white"}}/>
                                    <span className="m-3 pt-2" style={{color:"white",fontSize:"15px",width:"auto"}}> + 123456789</span>
                                </li>

                                <li className="mt-3" style={{display:"flex",flexDirection:"row",alignItems:"center",listStyle:"none",textDecoration:"none"}}>
                                    <FaMailBulk style={{fontSize:"25px",color:"white"}}/>
                                    <span className="m-3" style={{color:"white",fontSize:"15px",width:"200px"}}>abcd123@gmail.com</span>
                                </li>
                            </ul>

                        </div>
                    </Col>

                    <Col lg="12" className="pt-2 pb-3 text-center">
                        <div className="text-white m-0" style={{fontSize:"20px"}}>Copyright {date} developed by Anil. All rights are reserved</div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Footer;