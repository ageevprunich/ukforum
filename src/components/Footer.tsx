import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="copy-rights">
                &copy; 2023 BUF. All Rights Reserved
                </p>
                <ul className="footer-links-list">
                    <li><a className="footer-links" href="#">Оферта</a></li>
                    <li><a className="footer-links" href="#">Політика конфіденційності</a></li>
                </ul>
                <div className="socials-container">
                    <a href="#">
                        <svg className="social" width="20" height="20">
                            <use href="./images/icons.svg#icon-telegram-icon"></use>
                        </svg>
                    </a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;