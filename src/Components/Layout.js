import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Router from "../Routers/routes";


const Layout = () => {
    return(
        <div>
            <Header />
            <div className="pt-1">
                <Router />
            </div>
            <div className="pt-3">
                <Footer />
            </div>
        </div>
    )
}

export default Layout;