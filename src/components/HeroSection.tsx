import React from "react";
import './HeroSection.css';
import headlinersphoto from "../headliners-photo.png"


const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="left-container">
                    <h1>buy <br /> ukrainian <br />forum</h1>
                    <p>міжнародна експансія</p>
                    <p>2024</p>
                    <a href="#">Придбати квиток</a>
                    <a href="#">Зареєструватися</a>
                    <div className="socials">
                        <ul>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                        </ul>
                    </div>
                </div>
                <div className="right-container">
                    <div className="headliners">
                        <div className="headliners-photo">
                            <img src={headlinersphoto} alt="headlinersphoto" />
                        </div>
                        <div className="headliners-list">
                            <ul>
                                <li>Андрій Длігач</li>
                                <li>Вікторія Тігіпко</li>
                                <li>Андрій Федорів</li>
                                <li>Андрій Дубілет</li>
                            </ul>
                        </div>
                    </div>
                    <div className="date-lable"></div>
                </div>
            </div>
        </section>
        
    );
};
export default HeroSection;