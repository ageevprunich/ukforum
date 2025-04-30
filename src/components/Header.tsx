import React from "react";
import './Header.css';
import logo from "../logo.svg";

const Header = () => {
    return (
        <header className="main-header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <nav className="main-nav">
                    <ul className="menu">
                        <li><a href="#">Про форум</a></li>
                        <li><a href="#">Спікери</a></li>
                        <li><a href="#">Програма</a></li>
                        <li><a href="#">Спонсори та партнери</a></li>
                        <li><a href="#">Контакти</a></li>
                    </ul>
                </nav>
                <div className="ticket-btn">
                    <button>Придбати квитки</button>
                </div>
            </div>
            
            
        </header>
    );
};
export default Header;