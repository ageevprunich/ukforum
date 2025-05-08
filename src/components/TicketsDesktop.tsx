import React from "react";
import './TicketsDesktop.css';
import { ReactComponent as AcceptIcon } from '../images/decor-accept.svg';
import { ReactComponent as DeclineIcon } from '../images/decor-decline.svg';


const TicketsDesktop = () => {
    return (
        <section className="tickets-section">
            <div className="container">
                <div className="tickets-table">
                    {/* Ліва колонка — список переваг */}
                    <div className="title-and-benefits">
                        <h2 className="tickets-title">квитки</h2>
                        <ul className="ticket-benefits">
                            <li className="ticket-benefits-title">Доступ к networking-чату</li>
                            <li className="ticket-benefits-title">Участь в розіграшах</li>
                            <li className="ticket-benefits-title">Пакет матеріалів (блокнот, ручка)</li>
                            <li className="ticket-benefits-title">Фото з конференції</li>
                            <li className="ticket-benefits-title">Бізнес-план</li>
                            <li className="ticket-benefits-title">Подарунки від партнерів</li>
                            <li className="ticket-benefits-title">Іменний сертифікат</li>
                            <li className="ticket-benefits-title">Безкоштовне паркування</li>
                            <li className="ticket-benefits-title">Індивідуальне паркомісце</li>
                            <li className="ticket-benefits-title">Окремий вхід</li>
                            <li className="ticket-benefits-title">Персональний асистент</li>
                            <li className="ticket-benefits-title">Sweets & Drinks Nonstop</li>
                            <li className="ticket-benefits-title">Afterparty & Networking після другого дня</li>
                        </ul>
                    </div>
                    {/* Три типи квитків */}
                    <div className="ticket-cards">
                        {[{
                        name: 'Basic',
                        oldPrice: '1 600',
                        price: '1 200',
                        list: [1,1,1,1,0,0,0,0,0,0,0,0,0]
                        }, {
                        name: 'Standart',
                        oldPrice: '4 123',
                        price: '3 100',
                        list: [1,1,1,1,1,1,1,1,0,0,0,0,0]
                        }, {
                        name: 'TOP',
                        oldPrice: '11 438',
                        price: '8 600',
                        list: [1,1,1,1,1,1,1,1,1,1,1,1,1]
                        }].map((ticket, i) => (
                        <div className="ticket-card" key={i}>
                            <h3 className="ticket-card-title">{ticket.name}</h3>
                            <p className="ticket-card-date">до 15.10.2023</p>
                            <p className="ticket-card-old-price">&#8372; {ticket.oldPrice}</p>
                            <p className="ticket-card-price">&#8372; {ticket.price}</p>
                            <button className="ticket-card-buy-btn">Придбати квитки</button>
                            <ul className="ticket-card-options">
                            {ticket.list.map((item, idx) => (
                                <li className="ticket-card-options-icon" key={idx}>{item ? <AcceptIcon className="icon-accept"/> : <DeclineIcon className="icon-decline" />}</li>
                            ))}
                            </ul>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Блок знижок */}
                <div className="discount-section">
                    <div className="discount-title">
                        <p className="discount-title-text">Знижки</p>
                    </div>
                    <div className="discount-details">
                        <p className="discount-details-text">від 3 квитків <span>-5%</span></p>
                        <p className="discount-details-text">від 6 квитків <span>-10%</span></p>
                        <img className="discount-corner-icon" src="/images/decor-arrow.svg" alt="decoration-arrow" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TicketsDesktop;