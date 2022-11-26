import logo from "../images/logo.svg";
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
        <header className="header">
            {!isMob &&
                <div className="logo">
                    <img src={logo} alt="Логотип" className="logo-image"/>
                    <span className="logo-text">
                      крупный интегратор CRM в Росcии и ещё 8 странах
                    </span>
                </div>
            }
            <nav className="important">
                <a href="2 task/src/scripts/Header.js#" className="important-link">
                    Услуги
                </a>
                <a href="2 task/src/scripts/Header.js#" className="important-link">
                    Виджеты
                </a>
                <a href="2 task/src/scripts/Header.js#" className="important-link">
                    Интеграции
                </a>
                <a href="2 task/src/scripts/Header.js#" className="important-link">
                    Кейсы
                </a>
                {!isMob &&
                    <a href="2 task/src/scripts/Header.js#" className="important-link">
                        Сертификаты
                    </a>
                }
            </nav>
            {!isMob &&
                <nav className="contacts">
                    <a href="2 task/src/scripts/Header.js#" className="contacts-link contacts-link-phone">
                        +7 555 555-55-55
                    </a>
                    <a href="2 task/src/scripts/Header.js#" className="contacts-link">
                        <img src={telegram} alt="Иконка telegram"/>
                    </a>
                    <a href="2 task/src/scripts/Header.js#" className="contacts-link">
                        <img src={viber} alt="Иконка viber"/>
                    </a>
                    <a href="2 task/src/scripts/Header.js#" className="contacts-link">
                        <img src={whatsapp} alt="Иконка whatsapp"/>
                    </a>
                </nav>
            }
        </header>
    )
}

export default Footer;
