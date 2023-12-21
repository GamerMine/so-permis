import * as React from 'react';
import {FaRegArrowAltCircleUp} from "react-icons/fa";
import { Link } from "react-scroll";


const FlecheRedirect = () => {
    const style = {
        fleche : {
            width: "55px",
            height: "55px",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            color: "#20AB9A",
            backgroundColor: "#FFFFFF",
            borderRadius: "100%"
        },
    };

    return (
        <Link to="top" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
            <FaRegArrowAltCircleUp style={style.fleche} />
        </Link>
    );
};

export default FlecheRedirect
