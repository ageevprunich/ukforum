import React, { useState } from "react";
import './Reservation.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Reservation : React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

    return (
        <div className="reservation-modal-backdrop" onClick={onClose}>
            <div className="reservation-modal" onClick={(e) => e.stopPropagation()}>
                <h2 className="reservation-modal-title">забронювати участь</h2>
                <form className="reservation-modal-form">
                <input className="reservation-modal-input" type="text" placeholder="Ім’я та прізвище" />
                <input className="reservation-modal-input" type="tel" placeholder="+380 (‒‒) ‒‒ ‒‒ ‒‒" />
                <input className="reservation-modal-input" type="email" placeholder="E-mail" />
                <input className="reservation-modal-input" type="text" placeholder="Компанія" />
                <button  type="submit" className="submit-btn">відправити</button>
                </form>
            </div>
        </div>
    );
};

export default Reservation;