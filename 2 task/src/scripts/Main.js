import line from "../images/line.svg";
import {useEffect, useState} from "react";

function Main() {
    const [isMob, setsMob] = useState(window.innerWidth <= 500);
    function useWindowSize() {
        useEffect(() => {
            window.addEventListener("resize", () => {
                setsMob(window.innerWidth <= 500);
            });
        });
    }
    useWindowSize();

    return (
        <main className="main">
            <section className="section section-left">
                <h1 className="title">
                    Зарабатывайте больше
                </h1>
                <p className="subtitle">
                    с WELBEX
                </p>
                <p className="section-left-paragraph">
                    Развиваем и контролируем продажи за вас
                </p>
            </section>
            <section className="section section-right right">
                <p className="section-right-paragraph-span">
                    <span className="section-right-span">Вместе с </span>
                    бесплатной консультацией
                    <span className="section-right-span"> мы дарим:</span>
                </p>
                <p className="section-right-paragraph">
                    <span className="section-right-span">Вместе с </span>
                    бесплатной консультацией
                    <span className="section-right-span"> мы дарим:</span>
                </p>
                {!isMob &&
                    <div className="gift">
                        <div className="gift-item">
                            <h3 className="gift-header">
                                Виджеты
                            </h3>
                            <p className="gift-description">
                                30 готовых решений
                            </p>
                        </div>
                        <div className="gift-item">
                            <h3 className="gift-header">
                                Dashboard
                            </h3>
                            <p className="gift-description">
                                с показателями вашего бизнеса
                            </p>
                        </div>
                        <div className="gift-item">
                            <h3 className="gift-header">
                                Skype Аудит
                            </h3>
                            <p className="gift-description">
                                отдела продаж и CRM системы
                            </p>
                        </div>
                        <div className="gift-item">
                            <h3 className="gift-header">
                                35 дней
                            </h3>
                            <p className="gift-description">
                                использования CRM
                            </p>
                        </div>
                    </div>
                }
                {isMob &&
                    <div className="gift">
                        <div className="gift-item">
                            <img src={line} alt="отрезок" className="line"/>
                            <h3 className="gift-header">
                                Skype аудит
                            </h3>
                        </div>
                        <div className="gift-item">
                            <img src={line} alt="отрезок" className="line"/>
                            <h3 className="gift-header">
                                30 виджетов
                            </h3>
                        </div>
                        <div className="gift-item">
                            <img src={line} alt="отрезок" className="line"/>
                            <h3 className="gift-header">
                                Dashboard
                            </h3>
                        </div>
                        <div className="gift-item">
                            <img src={line} alt="отрезок" className="line"/>
                            <h3 className="gift-header">
                                Месяц аmoCRM
                            </h3>
                        </div>
                    </div>
                }
                {!isMob &&
                    <a href="2 task/src/scripts/Main.js#" className="button ">
                        Получить консультацию
                    </a>
                }
            </section>
        </main>
    )
}

export default Main;
