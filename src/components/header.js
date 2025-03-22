import React from "react";
import "./header.scss"; 
import icon from '../assets/t-icon.svg';
import logo from '../assets/t-logo.svg';

const Header =() => {
    return (
        <header className ="header" aria-label="Main Navigation">
            <nav className="nav" role="navigation" aria-labelledby="main-menu">
                {/*Logos Container*/}
                <div className="logos" aria-label="Tomato icons">
                    <img src={icon} alt="tomato icon" className="icon"></img>
                    <img src={logo} alt="tomato logo" className="logo"></img>
                </div>
                <ul className="nav-links">
                    <li><a href="#explore">EXPLORE</a></li>
                    <li><a href="#mealmatch">MEAL MATCH</a></li>
                </ul>
            </nav>
      
        </header>
    );
};
export default Header 