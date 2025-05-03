import React, { useState } from 'react';
import './CookieConsent.css';
import closeicon from '../images/close-icon.svg';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-popup">
      <button className="cookie-close" onClick={handleClose}><img className="cookie-close-icon" src={closeicon} alt="close-icon" /></button>
      <p className="cookie-text">
        Цей сайт використовує файли cookie для забезпечення функціональності та аналітики веб-сайту.
        Натискаючи кнопку «Я приймаю», ви погоджуєтеся на використання файлів cookie.
      </p>
      <button className="cookie-accept">я приймаю</button>
    </div>
  );
};

export default CookieConsent;