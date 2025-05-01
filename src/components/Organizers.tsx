import React from "react";
import './Organizers.css';

const Organizers = () => {
    return (
        <section className="organizers-section">
            <div className="container">
                <h2 className="organizers-title">Організатори</h2>
                <div className="organizers-logo"></div>
                <p>Зв'язатися з організатором</p>
                <a className="contact-organizers-btn" href="#"></a>
                <p>або</p>
                <div className="organizers-contacts">
                    <address>
                        <ul>
                            <li className="organizers-contacts-list">
                                <a className="address-link" href="tel:+380502322333">+380 50 232 23 33</a>
                            </li>
                            <li>
                                <a className="address-link" href="mailto:welcome@482.org.ua">welcome@482.org.ua</a>
                            </li>
                        </ul>
                    </address>
                </div>
            </div>
        </section>
    );
};

export default Organizers;