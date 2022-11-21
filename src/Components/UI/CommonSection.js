import React from "react";

import { Container} from "reactstrap";
import "./Commonsection.css";

const CommonSection = ({title}) => {
    return(
        <section className="common__section mt-3 mb-4">
            <Container className="text-center">
                <h1 className="text-dark">{title}</h1>
            </Container>

        </section>
    )
}

export default CommonSection;