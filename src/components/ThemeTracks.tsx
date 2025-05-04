import React from "react";
import './ThemeTracks.css';
import decorarrow from '../images/decor-arrow.svg';
import dotdoubleslashblack from '../images/decor-dot-doubleslash-black.svg';

const ThemeTracks = () => {
    return (
        <section className="theme-tracks-section">
            <div className="container">
                    <div className="decor-and-title">
                        <h2 className="theme-tracks-title">тематичні треки</h2>
                        <img className="theme-tracks-decor-title" src={decorarrow} alt="decor-arrow" />
                    </div>
                    
                    <div className="theme-tracks-cards-container">
                        <div className="tracks-cards">
                            <h3 className="tracks-cards-title">Маркетинг та продажі</h3>
                            <ul className="tracks-cards-list">
                                <li className="tracks-cards-points">Стратегії глобальної експансії</li>
                                <li className="tracks-cards-points">Вивчення міжнародних ринків</li>
                                <li className="tracks-cards-points">Адаптація маркетингових стратегій</li>
                                <li className="tracks-cards-points">Ціноутворення та конкуренція</li>
                                <li className="tracks-cards-points">Продажі та реклама</li>
                                <li className="tracks-cards-points">Партнерства та мережі</li>
                                <li className="tracks-cards-points">Інновації в маркетингу</li>
                                <li className="tracks-cards-points">Вплив міжнародних стандартів та регулювань</li>
                            </ul>
                        </div>
                        <div className="tracks-cards">
                            <h3 className="tracks-cards-title">Логістика та бізнес процеси</h3>
                            <ul className="tracks-cards-list">
                                <li className="tracks-cards-points">Логістика та оптимізація постачання</li>
                                <li className="tracks-cards-points">Управління запасами та зменшення ризиків</li>
                                <li className="tracks-cards-points">Логістика зворотних потоків та обробка повернень</li>
                                <li className="tracks-cards-points">Транскордонна правова та митна прозорість</li>
                                <li className="tracks-cards-points">Ефективність міжнародного оподаткування</li>
                                <li className="tracks-cards-points">Співпраця з локальними партнерами та ресурсами</li>
                                <li className="tracks-cards-points">Розвиток інфраструктури для міжнародного бізнесу</li>
                                <li className="tracks-cards-points">Екологічні стандарти та сталість</li>
                            </ul>
                        </div>
                        <div className="tracks-cards">
                            <h3 className="tracks-cards-title">Гранти, інвестиції, кредити</h3>
                            <ul className="tracks-cards-list">
                                <li className="tracks-cards-points">Національні та міжнародні грантові програми</li>
                                <li className="tracks-cards-points">Критерії відбору грантоотримувачів</li>
                                <li className="tracks-cards-points">Стратегії привернення інвесторів</li>
                                <li className="tracks-cards-points">Вимоги та очікування інвесторів</li>
                                <li className="tracks-cards-points">Доступні банківські продукти та кредитні інструменти</li>
                                <li className="tracks-cards-points">Важливі критерії вибору кредитної підтримки</li>
                                <li className="tracks-cards-points">Переваги та недоліки грантів, інвестицій та кредитів</li>
                                <li className="tracks-cards-points">Балансування</li>
                            </ul>
                        </div>
                    </div>
                    <div className="tracks-btns-and-decor">
                        <div className="tracks-btns">
                            <button className="tracks-btn-black">програма</button>
                            <button className="tracks-btn-transparent">програма pdf</button>
                            <button className="tracks-btn-transparent">анонс</button>
                        </div>
                        <img className="tracks-decor" src={dotdoubleslashblack} alt="decoration-dot-double-slash-black" />
                    </div>
                    
                </div>
        </section>
    );
};

export default ThemeTracks;