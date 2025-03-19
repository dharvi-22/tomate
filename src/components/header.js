import React from "react";
import "./header.scss"; 

const Header =() => {
    return (
        <header className ="header">
            <ul className = "nav-list">
                <li>
                    <a href="#"> MEAL MATCH </a> 
                </li>
                <li>
                    <a href="#"> EXPLORE </a> 
                </li>
            </ul>
        </header>
    );
};
export default Header 