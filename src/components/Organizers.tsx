import React from "react";
import './Organizers.css';
import { ReactComponent as TelephoneIcon } from '../images/telefon-icon.svg';
import { ReactComponent as MailIcon } from '../images/mail-icon.svg';


const Organizers = () => {
    return (
        <section className="organizers-section">
            <div className="container">
                {/* <div className="decor-and-title">
                    <h2 className="organizers-title">Організатори</h2>
                    <img className="organizers-decor-title" src='/images/decor-dot-doubleslash-black.svg' alt="decor-dotdoubleslashblack" />
                </div>  Тільки на час розробки мобільної версії квитків!*/} 
                
                <div className="organizers-logo-container">
                    <div className="fuwart-logo">
                        <img className="fuwart-logo-svg" src='/images/fuwart-logo.svg' alt="fuwart-logo" />
                        <p className="fuwart-logo-text">marketplace of Ukrainian art</p>
                    </div>
                    <div className="megapolis-logo">
                        <img className="megapolis-logo-svg" src='/images/megapolis-logo.svg' alt="megapolis-logo" />
                    </div>
                </div>
                <div className="contact-organizers-container">
                    <p className="contact-organizers-text-bold">Зв'язатися з організатором</p>
                    <button className="contact-organizers-btn">Зв'язатися</button>
                    <p className="contact-organizers-text">або</p>
                    <div className="organizers-contacts">
                        <address>
                            <div className="contact-item">
                                <div className="contact-icon"><TelephoneIcon /></div>
                                <a className="address-link" href="tel:+380502322333"> +380 50 232 23 33</a>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon"><MailIcon /></div>
                                <a className="address-link underline" href="mailto:welcome@482.org.ua">welcome@482.org.ua</a>
                            </div>
                        </address>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Organizers;