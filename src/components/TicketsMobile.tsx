import React, { useState } from "react";
import './TicketsMobile.css';
import { ReactComponent as ArrowIcon } from '../images/decor-arrow-down.svg';

const fullBenefits = [
    'Доступ к networking-чату',
    'Участь в розіграшах',
    'Пакет матеріалів (блокнот, ручка)',
    'Фото з конференції',
    'Бізнес-план',
    'Подарунки від партнерів',
    'Іменний сертифікат',
    'Безкоштовне паркування',
    'Індивідуальне паркомісце',
    'Окремий вхід',
    'Персональний асистент',
    'Sweets & Drinks Nonstop',
    'Afterparty & Networking після другого дня'
];

const ticketData = [
    {
        name: 'Basic',
        oldPrice: '1 600',
        price: '1 200',
        benefitsCount: 4
    },
    {
        name: 'Standart',
        oldPrice: '4 123',
        price: '3 100',
        benefitsCount: 8
    },
    {
        name: 'TOP',
        oldPrice: '11 438',
        price: '8 600',
        benefitsCount: 13
    }
];

const TicketsMobile = () => {
    const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({});

    const toggleOpen = (index: number) => {
        setOpenIndexes(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <section className="tickets-section">
            <div className="container">
                <div className="tickets-table">
                    <h2 className="tickets-title">квитки</h2>

                    <div className="ticket-cards">
                        {ticketData.map((ticket, index) => {
                            const isOpen = openIndexes[index];
                            const benefits = fullBenefits.slice(0, ticket.benefitsCount);

                            return (
                                <div className="ticket-card" key={index}>
                                    <h3 className="ticket-card-title">{ticket.name}</h3>
                                    <p className="ticket-card-date">до 15.10.2023</p>
                                    <p className="ticket-card-old-price">&#8372; {ticket.oldPrice}</p>
                                    <p className="ticket-card-price">&#8372; {ticket.price}</p>
                                    <button className="ticket-card-buy-btn">Придбати квитки</button>

                                    <div className="ticket-benefits-toggle" onClick={() => toggleOpen(index)}>
                                        <span>Що ви отримаєте</span>
                                        <ArrowIcon className={`toggle-arrow ${isOpen ? 'open' : ''}`} />
                                    </div>

                                    <div className={`ticket-benefits-wrapper ${isOpen ? 'open' : ''}`}>
                                        <ul className="ticket-benefits">
                                            {benefits.map((benefit, i) => (
                                                <li className="ticket-benefits-title" key={i}>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

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

export default TicketsMobile;
