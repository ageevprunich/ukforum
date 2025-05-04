import React from "react";
import './Speakers.css';
import dotdoubleslash from '../images/decor-dot-doubleslash.svg';

const Speakers = () => {
    return (
        <section className="speakers-section">
            <div className="container">
                <div className="decor-and-title">
                    <h2 className="speakers-title">Спікери</h2>
                    <img className="speakers-decor-title" src={dotdoubleslash} alt="decoration-doubleslashdot" />
                </div>
                
                <div className="speakers-corusel">
                    <p>here will be speakers</p>
                </div>
            </div>
        </section>
    );
};

export default Speakers;