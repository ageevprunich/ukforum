import React from "react";
import './ThemeTracks.css';

const ThemeTracks = () => {
    return (
        <section className="theme-tracks-section">
            <div className="container">
                <h2 className="theme-tracks-title">тематичні треки</h2>
                <div className="theme-tracks-cards-container">
                    <div className="tracks-cards">
                        <h3>Маркетинг та продажі</h3>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="tracks-cards">
                        <h3>Логістика та бізнес процеси</h3>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="tracks-cards">
                        <h3>Гранти, інвестиції, кредити</h3>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                </div>
                <a href="#">Програма</a>
                <a href="#">Програма PDF</a>
                <a href="#">Анонс</a>
            </div>
        </section>
    );
};

export default ThemeTracks;