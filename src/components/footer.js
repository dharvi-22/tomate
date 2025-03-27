import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.scss";
import whitelogo from '../assets/white-logo.svg';

const Footer =() => {
    return(
        <footer className="footer" aria-label="footer navigation">
            <div className="footer-container">
                <div className="footer-form" aria-label="form button">
                    <p>Can't find a recipe?</p>
                    <Link to="/form" className="footer-button">Request a Recipe</Link>
                </div>
                <ul className="footer-links">
                    <li><Link to="/">Privacy Policy</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li className="footer-contact"><a href="mailto:info@tomate.com">info@tomate.com</a></li>
                </ul>
                <Link to="/"><img src={whitelogo} alt="tomato logo" className="footer-logo"></img></Link>
            </div>
        </footer>
    )
}

export default Footer 