import React, { useEffect, useRef, useState } from "react";
import './HeroSectionMobile.css';

import { ReactComponent as InfoIcon } from '../images/info-octagon.svg';
import Reservation from "./Reservation";

const HeroSectionMobile = () => {
  const [showModal, setShowModal] = useState(false);
  const [visibleTooltip, setVisibleTooltip] = useState<number | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  // Закриття по кліку поза tooltip
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setVisibleTooltip(null);
      }
    };

    if (visibleTooltip !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visibleTooltip]);


  return (
    <section className="hero-section">
      <div className="container hero-section-container">
        <div className="hero-section-title">
          <img className="headliners-decor" src="/images/decorplusplus.svg" alt="decor" />
          <img className="hero-section-title-img" src="/images/hero-section-title.svg" alt="Title" />
          <h2 className="hero-section-title-text">2024</h2>
        </div>

        <div className="btns-container">
          <button className="buy-ticket-btn">Придбати квиток</button>
          <button className="registration-btn" onClick={() => setShowModal(true)}>Зареєструватися</button>
          <Reservation isOpen={showModal} onClose={() => setShowModal(false)} />
        </div>
        <div className="event-info">
          {/* Tooltip 1 */}
          <div className="event-info-item">
            <div className="tooltip-wrapper" ref={visibleTooltip === 1 ? tooltipRef : null}>
              <InfoIcon
                className="event-info-icon"
                onClick={() =>
                  setVisibleTooltip(prev => (prev === 1 ? null : 1))
                }
              />
              {visibleTooltip === 1 && (
                <>
                  <div className="tooltip-backdrop" />
                  <div className="tooltip">
                    <InfoIcon className="tooltip-info-icon" />
                    <p className="tooltip-text">
                      З міркувань безпеки, організатори залишають за собою право змінити заплановану дату.
                      У цьому випадку усі придбані квитки залишаються дійсними. У разі неможливості відвідати
                      захід, кошти будуть повернуті учаснику.
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="event-text">
              <p className="event-text-bold">21 листопада 2024</p>
              <p className="event-text-plain-hight">Offline / online</p>
            </div>
          </div>

          {/* Tooltip 2 */}
          <div className="event-info-item">
            <div className="tooltip-wrapper" ref={visibleTooltip === 2 ? tooltipRef : null}>
              <InfoIcon
                className="event-info-icon"
                onClick={() =>
                  setVisibleTooltip(prev => (prev === 2 ? null : 2))
                }
              />
              {visibleTooltip === 2 && (
                <>
                  <div className="tooltip-backdrop" />
                  <div className="tooltip">
                    <InfoIcon className="tooltip-info-icon" />
                    <p className="tooltip-text">
                      З міркувань безпеки, місце проведення буде повідомлене кожному учаснику
                      за 24 години до початку заходу.
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="event-text">
              <p className="event-text-plain">Київ, Паркова дорога, 16-а,</p>
              <p className="event-text-plain">КВЦ “ПАРКОВИЙ”</p>
            </div>
          </div>
          <img className="event-corner-icon" src="/images/decor-arrow.svg" alt="decoration-arrow" />
        </div>

        <div className="headliners">
          <img className="headliners-photo" src="/images/headliners-photo.png" alt="headlinersphoto" />
          <div className="headliners-list-block">
            <ul className="headliners-list">
              <li className="headliners-list-info">Андрій Длігач</li>
              <li className="headliners-list-info">Вікторія Тігіпко</li>
              <li className="headliners-list-info">Андрій Федорів</li>
              <li className="headliners-list-info">Дмитро Дубілет</li>
            </ul>
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

export default HeroSectionMobile;
