import React from "react";
import './Tickets.css';

const Tickets = () => {
    return (
        <section className="tickets-section">
            <div className="container">
                <div className="ticket-container">
                    <div className="tickets-info">
                        <h2 className="tickets-title">квитки</h2>
                    </div>
                    <div className="basic-ticket">
                        <h3>Basic</h3>
                        <p>до 15.10.2023</p>
                        <p>1 600</p>
                        <p>1 200</p>
                        <a href="">Придбати квитки</a>
                    </div>
                    <div className="standart-ticket">
                        <h3>Standart</h3>
                        <p>до 15.10.2023</p>
                        <p>4 123</p>
                        <p>3 100</p>
                        <a href="">Придбати квитки</a>
                    </div>
                    <div className="top-ticket">
                        <h3>TOP</h3>
                        <p>до 15.10.2023</p>
                        <p>11 438</p>
                        <p>8 600</p>
                        <a href="">Придбати квитки</a>
                    </div>
                </div>
                <div className="discount-container">
                    <div className="discount-title">
                        <p>Знижки</p>
                    </div>
                    <div className="discount-percent">
                        <p>Від 3-х квитків -5%</p>
                        <p>Від 3-х квитків -10%</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tickets;