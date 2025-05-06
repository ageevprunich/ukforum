import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                <a className="logo" href="#"><img src='/images/logo.svg' alt="Logo" /></a>
                <nav className="header-nav">
                    <ul className="header-menu">
                        <li><a className="links" href="#">Про форум</a></li>
                        <li><a className="links" href="#">Спікери</a></li>
                        <li><a className="links" href="#">Програма</a></li>
                        <li><a className="links" href="#">Спонсори та партнери</a></li>
                        <li><a className="links" href="#">Контакти</a></li>
                    </ul>
                </nav>
                <button className="header-buy-ticket-btn" >Придбати квитки</button>
            </div>
            
            
        </header>
    );
};
export default Header;