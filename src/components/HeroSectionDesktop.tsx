import React, { useState } from "react";
import './HeroSectionDesktop.css';

import { ReactComponent as InfoIcon } from '../images/info-octagon.svg';
import { ReactComponent as TelegramIcon } from '../images/telegram-icon.svg';
import { ReactComponent as FacebookIcon } from '../images/facebook-icon.svg';
import { ReactComponent as InstagramIcon } from '../images/instagram-icon.svg';
import { ReactComponent as LinkedInIcon } from '../images/linkedin-icon.svg';
import { ReactComponent as YouTubeIcon } from '../images/youtube-icon.svg';
import Reservation from "./Reservation";

const HeroSectionDesktop = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="hero-section">
      <div className="container hero-section-container">
        <div className="left-container">
          <div className="hero-section-title">
            <img className="hero-section-title-img" src="/images/hero-section-title.svg" alt="Title" />
            <h2 className="hero-section-title-text">2024</h2>
          </div>

          <div className="btns-container">
            <button className="buy-ticket-btn">Придбати квиток</button>
            <button className="registration-btn" onClick={() => setShowModal(true)}>Зареєструватися</button>
            <Reservation isOpen={showModal} onClose={() => setShowModal(false)} />
          </div>

          <div className="container-socials">
            <ul className="socials-list">
              <li className="socials-li"><a className="socials" href="#"><TelegramIcon /></a></li>
              <li className="socials-li"><a className="socials" href="#"><FacebookIcon /></a></li>
              <li className="socials-li"><a className="socials" href="#"><InstagramIcon /></a></li>
              <li className="socials-li"><a className="socials" href="#"><LinkedInIcon /></a></li>
              <li className="socials-li"><a className="socials" href="#"><YouTubeIcon /></a></li>
            </ul>
          </div>
        </div>

        <div className="right-container">
          <div className="headliners">
            <img className="headliners-photo" src="/images/headliners-photo.png" alt="headlinersphoto" />
            <div className="headliners-list-block">
              <img className="headliners-decor" src="/images/decorplusplus.svg" alt="decor" />
              <div>
                <ul className="headliners-list">
                  <li className="headliners-list-info">Андрій Длігач</li>
                  <li className="headliners-list-info">Вікторія Тігіпко</li>
                  <li className="headliners-list-info">Андрій Федорів</li>
                  <li className="headliners-list-info">Дмитро Дубілет</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="event-info">
            <div className="event-info-item">
              <div className="tooltip-wrapper">
                <InfoIcon className="event-info-icon" />
                <div className="tooltip">
                  <InfoIcon className="tooltip-info-icon" />
                  <p className="tooltip-text">
                    З міркувань безпеки, організатори залишають за собою право змінити заплановану дату.
                    У цьому випадку усі придбані квитки залишаються дійсними. У разі неможливості відвідати
                    захід, кошти будуть повернуті учаснику.
                  </p>
                </div>
              </div>
              <div className="event-text">
                <p className="event-text-bold">21 листопада 2024</p>
                <p className="event-text-plain-hight">Offline / online</p>
              </div>
            </div>

            <div className="event-info-item">
              <div className="tooltip-wrapper">
                <InfoIcon className="event-info-icon" />
                <div className="tooltip">
                  <InfoIcon className="tooltip-info-icon" />
                  <p className="tooltip-text">
                    З міркувань безпеки, місце проведення буде повідомлене кожному учаснику
                    за 24 години до початку заходу.
                  </p>
                </div>
              </div>
              <div className="event-text">
                <p className="event-text-plain">Київ, Паркова дорога, 16-а,</p>
                <p className="event-text-plain">КВЦ “ПАРКОВИЙ”</p>
              </div>
            </div>

            <img className="event-corner-icon" src="/images/decor-arrow.svg" alt="decoration-arrow" />
          </div>
        </div>
      </div>

      <div className="hero-section-decor container">
        <img className="decor-slash" src="/images/decor-double-slash-dot.svg" alt="decoration-double-slash" />
        <img className="decor-dot" src="/images/decor-dots.svg" alt="decoration-dots" />
      </div>
    </section>
  );
};

export default HeroSectionDesktop;
