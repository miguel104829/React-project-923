import React, { Component } from "react";
import Trollface from "../images/Trollface_non-free.png";

export default function Header() {
    return(
        <header className="header">
            <img src={Trollface} className="header--image" />
            <h2 className="header--title">Header component</h2>
            <h4 className="header-project">React Course</h4>  
        </header>
    )
}
