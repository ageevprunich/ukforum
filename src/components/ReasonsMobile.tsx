import React from "react";
import './ReasonsMobile.css';


const ReasonsMobile = () => {
    return (
        <section className="reasons-to-join-section">
            <div className="container reasons-container">
                <h2 className="reason-h2text">Чому варто йти?</h2>
                <p className="reason-text"><span className="reason-text-bold">Місія події</span> — зміцнення позицій українського бізнесу на міжнародних ринках,
                    сприяючи його успіху та створенню високоякісних продуктів і сервісів, що впізнаються на глобальній арені,
                    а також зміцнити репутацію України, як конкурентоздатної держави, якій є що запропонувати світу.
                </p>
                {/* <div className="reason-cards-container">
                    <div className="reason-info-cards">
                        <h2 className="card-number">01</h2>
                        <h3 className="card-title">Нетворкінг</h3>
                        <p className="card-text">Під одним дахом зберуться представники різних компаній, експерти та інвестори.
                            Це ідеальна нагода для встановлення цінних зв'язків та партнерств з потенційними партнерами,
                            дистриб'юторами, постачальниками та іншими учасниками, які можуть сприяти успішній експансії
                            вашого бізнесу на зовнішні ринки.
                        </p>
                        <img className="reason-card-corner-icon" src='/images/decor-arrow.svg' alt="decoration-arrow" />
                    </div>
                    <div className="reason-info-cards">
                        <h2 className="card-number">02</h2>
                        <h3 className="card-title">Нові знання та інсайти</h3>
                        <p className="card-text">Панельні дискусії, реальні кейси та майстер-класи від відомих експертів з різних галузей - це
                            все дозволить вам отримати свіжі інсайти щодо тенденцій на міжнародних ринках, стратегій,
                            міжкультурних аспектів та інших факторів, які можуть бути важливими для успішного розширення
                            вашої діяльності за кордон.
                        </p>
                        <img className="reason-card-corner-icon" src='/images/decor-arrow.svg' alt="decoration-arrow" />
                    </div>
                    <div className="reason-info-cards">
                        <h2 className="card-number">03</h2>
                        <h3 className="card-title">Ресурси та інвестиції</h3>
                        <p className="card-text">Форум - ключова платформа для знаходження інвесторів, партнерів та необхідних ресурсів.
                            Тут ви отримаєте змогу зустрітися з представники венчурних фондів, бізнес-янголів та інших
                            інвестиційних організацій. Також, ви дізнаєтесь, як отримати гранти або залучити кредит на вигідних умовах.
                        </p>
                        <img className="reason-card-corner-icon" src='/images/decor-arrow.svg' alt="decoration-arrow" />
                    </div>
                </div> */}
                <div className="decor-container">
                    <img className="reason-decor" src='/images/decor-double-plus.svg' alt="decoration-plus" />
                </div>
                
            </div>
        </section>
        
    );
};
export default ReasonsMobile;