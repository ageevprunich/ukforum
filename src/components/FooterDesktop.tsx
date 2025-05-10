import React from "react";
import './FooterDesktop.css';
import { ReactComponent as TelegramIcon } from '../images/telegram-icon.svg';
import { ReactComponent as FacebookIcon } from '../images/facebook-icon.svg';
import { ReactComponent as InstagramIcon } from '../images/instagram-icon.svg';
import { ReactComponent as LinkedInIcon } from '../images/linkedin-icon.svg';
import { ReactComponent as YouTubeIcon } from '../images/youtube-icon.svg';



const FooterDesktop = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="copy-rights">
                &copy; 2023 BUF. All Rights Reserved
                </p>
                <div className="footer-links-container">
                    <ul className="footer-links-list">
                        <li><a className="footer-links" href="#">Оферта</a></li>
                        <li><a className="footer-links" href="#">Політика конфіденційності</a></li>
                    </ul>
                </div>
                
                <div className="footer-container-socials">
                    <ul className="footer-socials-list">
                        <li><a className="footer-socials" href="#"><TelegramIcon /></a></li>
                        <li><a className="footer-socials" href="#"><FacebookIcon /></a></li>
                        <li><a className="footer-socials" href="#"><InstagramIcon/></a></li>
                        <li><a className="footer-socials" href="#"><LinkedInIcon/></a></li>
                        <li><a className="footer-socials" href="#"><YouTubeIcon/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default FooterDesktop;