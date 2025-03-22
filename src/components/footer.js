import React from "react";
import "./footer.scss";
import whitelogo from '../assets/white-logo.svg';

const Footer =() => {
    return(
        <footer className="footer" aria-label="footer navigation">
            <div className="footer-container">
                <div className="footer-form" aria-label="form button">
                    <p>Can't find a recipe?</p>
                    <a href="#form" className="footer-button">Request a Recipe</a>
                </div>
                <ul className="footer-links">
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li className="footer-contact"><a href="mailto:info@tomate.com">info@tomate.com</a></li>
                </ul>
                <img src={whitelogo} alt="tomato logo" className="footer-logo"></img>
            </div>
        </footer>
    )
}

export default Footer 