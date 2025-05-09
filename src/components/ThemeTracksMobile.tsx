import React, { useEffect, useState } from "react";
import './ThemeTracksMobile.css';
import { ReactComponent as RightArrowIcon } from '../images/theme-tracks-btn-icon-right.svg';


const trackData = [
    {
        title: "Маркетинг та продажі",
        points: [
            "Стратегії глобальної експансії",
            "Вивчення міжнародних ринків",
            "Адаптація маркетингових стратегій",
            "Ціноутворення та конкуренція",
            "Продажі та реклама",
            "Партнерства та мережі",
            "Інновації в маркетингу",
            "Вплив міжнародних стандартів та регулювань",
        ],
    },
    {
        title: "Логістика та бізнес процеси",
        points: [
            "Логістика та оптимізація постачання",
            "Управління запасами та зменшення ризиків",
            "Логістика зворотних потоків та обробка повернень",
            "Транскордонна правова та митна прозорість",
            "Ефективність міжнародного оподаткування",
            "Співпраця з локальними партнерами",
            "Розвиток інфраструктури",
            "Екологічні стандарти та сталість",
        ],
    },
    {
        title: "Гранти, інвестиції, кредити",
        points: [
            "Національні та міжнародні грантові програми",
            "Критерії відбору грантоотримувачів",
            "Стратегії привернення інвесторів",
            "Вимоги та очікування інвесторів",
            "Доступні банківські продукти",
            "Критерії вибору кредитної підтримки",
            "Переваги та недоліки різних форм фінансування",
            "Балансування",
        ],
    }
];

const ThemeTracksMobile = () => {
    const [flipped, setFlipped] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const handleNext = () => {
        if (activeIndex < trackData.length - 1) {
            setActiveIndex((prev) => prev + 1);
            setIsTransitioning(true);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex((prev) => prev - 1);
            setIsTransitioning(true);
        }
    };

    const getVisibleIndex = () => {
        if (activeIndex === -1) return trackData.length; 
        if (activeIndex === trackData.length) return 1;   
        return activeIndex + 1;
    };

    const [cardWidth, setCardWidth] = useState(286);

    useEffect(() => {
        const updateCardWidth = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth <= 480) {
                setCardWidth(286);
            } else if (screenWidth <= 768) {
                setCardWidth(365); 
            } else {
                setCardWidth(340);
            }
        };

        updateCardWidth();
        window.addEventListener('resize', updateCardWidth);

        return () => window.removeEventListener('resize', updateCardWidth);
    }, []);

    return (
        <section className="theme-tracks-section">
            <div className={`theme-tracks-bg ${flipped ? 'rotate-bg' : ''}`}>
                <div className="container">
                    <div className="decor-and-title">
                        <h2 className="theme-tracks-title">тематичні треки</h2>
                        <img className="theme-tracks-decor-title" src='/images/decor-arrow.svg' alt="decor-arrow" />
                    </div>

                    <div className="theme-tracks-cards-carousel">
                        <div className="carousel-viewport">
                            <div
                                className="carousel-inner"
                                style={{ transform: `translateX(-${activeIndex * cardWidth}px)` }}
                            >
                                {trackData.map((track, index) => (
                                    <div key={index} className="carousel-slide">
                                        <div className="tracks-cards">
                                            <h3 className="tracks-cards-title">{track.title}</h3>
                                            <ul className="tracks-cards-list">
                                                {track.points.map((point, i) => (
                                                    <li key={i} className="tracks-cards-points">{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="carousel-controls">
                        <button
                            onClick={handlePrev}
                            className={`carousel-arrow ${activeIndex === 0 ? 'disabled' : ''}`}
                            disabled={activeIndex === 0}
                        >
                            <RightArrowIcon style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        <span className="carousel-index">{getVisibleIndex()} / {trackData.length}</span>

                        <button
                            onClick={handleNext}
                            className={`carousel-arrow ${activeIndex === trackData.length - 1 ? 'disabled' : ''}`}
                            disabled={activeIndex === trackData.length - 1}
                        >
                            <RightArrowIcon />
                        </button>
                    </div>

                    <div className="tracks-btns-and-decor">
                        <div className="tracks-btns">
                            <button className="tracks-btn-black" onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>програма</button>
                            <button className="tracks-btn-transparent" onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>програма pdf</button>
                            <button className="tracks-btn-transparent" onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>анонс</button>
                        </div>
                        <img className="tracks-decor" src='/images/decor-dot-doubleslash-black.svg' alt="decoration-dot-double-slash-black" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThemeTracksMobile;
