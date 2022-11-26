import telegram from "../images/telegram.svg";
import viber from "../images/viber.svg";
import whatsapp from "../images/whatsapp.svg";
import {useEffect, useState} from "react";

function Footer() {
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
        <footer className="footer">
            <div className="footer-blocks">
                <div className="footer-column">
                    <h3 className="footer-column-header">
                        О компании
                    </h3>
                    <div className="footer-links-block">
                        <nav className="footer-column-links">
                            <a href="2 task/src/scripts/Footer.js#" className="footer-column-link">
                                Партнёрская программа
                            </a>
                            <a href="2 task/src/scripts/Footer.js#" className="footer-column-link">
                                Вакансии
                            </a>
                        </nav>
                    </div>
                </div>
                <div className="footer-column">
                    <h3 className="footer-column-header">
                        Меню
                    </h3>
                    <div className="footer-links-block">
                        <nav className="footer-column-links">
                            <a href="2 task/src/scripts/Footer.js#" className="footer-column-link">
                                Расчёт стоимости
                            </a>
                            <a href="2 task/src/scripts/Footer.js#" className="footer-column-link">
                                Услуги
                            </a>
                            <a href="2 task/src/scripts/Footer.js#" className="footer-column-link">
                                Виджеты
                            </a>
                            <a href="2 task/src/scripts/Footer.js#" className="footer-column-link">
                                Интеграции
                            </a>
                            <a href="2 task/src/scripts/Footer.js#" className="footer-column-link">
                                Наши клиенты
                            </a>
                        </nav>
                        <nav className="footer-column-links">
                            {isMob &&
                                <a href="2 task/src/scripts/Footer.js#" className="footer-column-link">
                                    Благодарность клиентов
                                </a>
                            }
                            <a href="2 task/src/scripts/Footer.js#" className="footer-column-link">
                                Кейсы
                            </a>
                            {!isMob &&
                                <a href="2 task/src/scripts/Footer.js#" className="footer-column-link">
                                    Благодарственные письма
                                </a>
                            }
                            <a href="2 task/src/scripts/Footer.js#" className="footer-column-link">
                                Сертификаты
                            </a>
                            <a href="2 task/src/scripts/Footer.js#" className="footer-column-link">
                                Блог на Youtube
                            </a>
                            <a href="2 task/src/scripts/Footer.js#" className="footer-column-link">
                                Вопрос / Ответ
                            </a>
                        </nav>
                    </div>
                </div>
                <div className="footer-column">
                    <h3 className="footer-column-header right">
                        Контакты
                    </h3>
                    <div className="footer-links-block">
                        <nav className="footer-column-links">
                            <a href="2 task/src/scripts/Footer.js#" className="footer-column-link right footer-column-contacts">
                                +7 555 555-55-55
                            </a>
                            <nav className="footer-row-links right footer-column-contacts">
                                <a href="2 task/src/scripts/Footer.js#" className="footer-row-link">
                                    <img src={telegram} alt="Иконка telegram"/>
                                </a>
                                <a href="2 task/src/scripts/Footer.js#" className="footer-row-link">
                                    <img src={viber} alt="Иконка viber"/>
                                </a>
                                <a href="2 task/src/scripts/Footer.js#" className="footer-row-link">
                                    <img src={whatsapp} alt="Иконка whatsapp"/>
                                </a>
                            </nav>
                            <a href="2 task/src/scripts/Footer.js#" className="footer-column-link right footer-column-contacts">
                                Москва, Путевой проезд 3с1, к 902
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="copyright ">
                <p className="copyright-text right">
                    ©WELBEX 2022. Все права защищены.
                </p>
                <a href="2 task/src/scripts/Footer.js#" className="copyright-text right">
                    Политика конфиденциальности
                </a>
            </div>
        </footer>
    )
}

export default Footer;
