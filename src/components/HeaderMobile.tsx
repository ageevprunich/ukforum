import React, { useState } from "react";
import './HeaderMobile.css';

import { ReactComponent as TelegramIcon } from '../images/telegram-icon.svg';
import { ReactComponent as FacebookIcon } from '../images/facebook-icon.svg';
import { ReactComponent as InstagramIcon } from '../images/instagram-icon.svg';
import { ReactComponent as LinkedInIcon } from '../images/linkedin-icon.svg';
import { ReactComponent as YouTubeIcon } from '../images/youtube-icon.svg';

const HeaderMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header-mobile">
            <div className="container header-container-mobile">
                <a className="logo-mobile" href="#"><img src='/images/logo.svg' alt="Logo" /></a>
                <button className="burger-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="burger-line" />
                    <span className="burger-line" />
                    <span className="burger-line" />
                </button>
            </div>

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <button className="close-icon" onClick={() => setMenuOpen(false)}>×</button>
                <nav className="mobile-nav">
                    <ul className="mobile-menu-list">
                        <li><a className="mobile-link" href="#">Про форум</a></li>
                        <li><a className="mobile-link" href="#">Спікери</a></li>
                        <li><a className="mobile-link" href="#">Програма</a></li>
                        <li><a className="mobile-link" href="#">Спонсори та партнери</a></li>
                        <li><a className="mobile-link" href="#">Контакти</a></li>
                    </ul>
                </nav>
                <div className="mobile-container-socials">
                    <ul className="mobile-socials-list">
                        <li className="mobile-socials-li"><a className="mobile-socials" href="#"><TelegramIcon /></a></li>
                        <li className="mobile-socials-li"><a className="mobile-socials" href="#"><FacebookIcon /></a></li>
                        <li className="mobile-socials-li"><a className="mobile-socials" href="#"><InstagramIcon /></a></li>
                        <li className="mobile-socials-li"><a className="mobile-socials" href="#"><LinkedInIcon /></a></li>
                        <li className="mobile-socials-li"><a className="mobile-socials" href="#"><YouTubeIcon /></a></li>
                    </ul>
                </div>
                <button className="mobile-buy-ticket-btn">Придбати квиток</button>
                
            </div>
        </header>
    );
};

export default HeaderMobile;