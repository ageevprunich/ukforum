import React, { useState } from "react";
import './SpeakersDesktop.css';
import speakers from '../speakers-data';
import { ReactComponent as ArrowIconLeft } from '../images/arrow-icon-left.svg';
import { ReactComponent as ArrowIconRight } from '../images/arrow-icon-right.svg';

const SpeakersDesktop = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentSpeaker = speakers[currentIndex];
    const total = speakers.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;
    const nextNextIndex = (currentIndex + 2) % total;
    return (
        <section className="speakers-section">
            <div className="container speakers-container" >
                <div className={speakers[currentIndex].bgname} style={{ backgroundImage: `url(${currentSpeaker.bg})` }}>


                    <div className="decor-and-title">
                        <h2 className="speakers-title">Спікери</h2>
                        <img className="speakers-decor-title" src='/images/decor-dot-doubleslash.svg' alt="decoration-doubleslashdot" />
                    </div>

                    <div className="speakers-carousel" >

                        {/* Left inactive */}
                        <img
                            className="speaker-avatar-inactive"
                            src={speakers[prevIndex].thumb}
                            alt={speakers[prevIndex].name}
                        />

                        {/* Active speaker card */}
                        <div className="speaker-card">
                            <div className="speaker-card-info">
                                <img className="speaker-photo" src={speakers[currentIndex].photo} alt={speakers[currentIndex].name} />
                                <div className="speacker-card-name">
                                    <h3 className="speaker-name">{speakers[currentIndex].name}</h3>
                                    <p className="speaker-position">{speakers[currentIndex].position}</p>

                                </div>
                            </div>
                            <button
                                className="carousel-btn left"
                                onClick={() => setCurrentIndex((prev) => (prev - 1 + total) % total)} >
                                <ArrowIconLeft />
                            </button>
                            <p className="speaker-card-text">Панельні дискусії, реальні кейси та
                                майстер-класи від відомих експертів з різних галузей - це все дозволить
                                вам отримати свіжі інсайти щодо тенденцій на міжнародних ринках,
                                стратегій, міжкультурних аспектів та інших факторів, які можуть бути
                                важливими для успішного розширення вашої діяльності за кордон.
                            </p>
                            <button
                                className="carousel-btn right"
                                onClick={() => setCurrentIndex((prev) => (prev + 1) % total)}>
                                <ArrowIconRight />
                            </button>
                            <button className="speaker-card-btn-all">Всі спікери</button>
                        </div>

                        {/* Right inactive */}
                        <div className="right-avatars">
                            <img
                                className="speaker-avatar-inactive"
                                src={speakers[nextIndex].thumb}
                                alt={speakers[nextIndex].name}
                            />
                            <img
                                className="speaker-avatar-inactive"
                                src={speakers[nextNextIndex].thumb}
                                alt={speakers[nextNextIndex].name}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpeakersDesktop;