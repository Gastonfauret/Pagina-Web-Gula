import "../styles/Footer.css";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Footer() {
    return(
        <footer className ="footer-container">
            <ul>
                <li><FaFacebookF className="social-icons facebook" /></li>
                <li><FaTwitter className="social-icons twitter" /></li>
                <li><FaInstagram className="social-icons instagram" /></li>
                <li><FaWhatsapp className="social-icons whatsapp" /></li>
            </ul>
            <div>
                <p>Copyright © 2023 - Gula</p>
            </div>
        </footer>
    )
}

export default Footer;