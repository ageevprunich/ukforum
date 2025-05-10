import React, { useState } from 'react';
import './CookieConsent.css';
import { ReactComponent as CloseIcon } from '../images/close-icon.svg';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="coockie-backdrop">
      <div className="cookie-popup">
        <button className="cookie-close" onClick={handleClose} aria-label="Закрити">
          <CloseIcon />
        </button>
        <p className="cookie-text">
          Цей сайт використовує файли cookie для забезпечення функціональності та аналітики веб-сайту.
          Натискаючи кнопку «Я приймаю», ви погоджуєтеся на використання файлів cookie.
        </p>
        <button className="cookie-accept"  onClick={handleClose}>я приймаю</button>
        </div>
    </div>
  );
};

export default CookieConsent;