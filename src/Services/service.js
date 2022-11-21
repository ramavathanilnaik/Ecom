import React from "react";
import {FaTruck,FaTrashRestore} from "react-icons/fa";
import {GiSecurityGate, GiReturnArrow} from "react-icons/gi";

import {motion} from "framer-motion"



import "./service.css";

const Service = () => {
    return(
        <div className="services">
            <div className="container">
                <div className="row">
                    <motion.div className="col-12 col-lg-3 col-md-6 pt-3" whileHover={{scale:1.1}}>
                        <div className="service__item" >
                            <motion.span whileTap={{scale:1.3}}>
                                <FaTruck className="icons" />
                            </motion.span>
                            <div>
                                <h6>Free shipping</h6>
                                <p>Loreum ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="col-12 col-lg-3 col-md-6 pt-3" whileHover={{scale:1.1}}>
                        <div className="service__item">
                            <motion.span whileTap={{scale:1.3}}>
                                <FaTrashRestore className="icons"/>
                            </motion.span>
                            <div>
                                <h6>Esy Returns</h6>
                                <p>Loreum ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="col-12 col-lg-3 col-md-6 pt-3" whileHover={{scale:1.1}}>
                        <div className="service__item">
                            <motion.span whileTap={{scale:1.3}}>
                                <GiSecurityGate className="icons"/>
                            </motion.span>

                            
                            <div>
                                <h6>Secure Payment</h6>
                                <p>Loreum ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="col-12 col-lg-3 col-md-6 pt-3" whileHover={{scale:1.1}}>
                        <div className="service__item">
                            <motion.span whileTap={{scale:1.3}}>
                                <GiReturnArrow className="icons"/>
                            </motion.span>
                        
                            <div>
                                <h6>Back Guarantee</h6>
                                <p>Loreum ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Service;