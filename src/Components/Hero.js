import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Container } from "./Container";
import ManasImg1 from "../Assets/manas-img1.png";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <Container>
        <div className="hero-section">
          <div className="text-section">
            <p className="text-headline">
              ❤️ Построй свой лучший город бишкек! ❤️
            </p>
            <h2 className="text-title">
              Пути к улучшению Бишкека: комфортный, зеленый и современный город
              будущего
            </h2>
            <p className="text-descritpion">
              Город Бишкек обладает огромным потенциалом для улучшений,
              направленных на повышение качества жизни его жителей и создание
              комфортной городской среды. Среди ключевых направлений, которые
              требуют внимания, выделяются благоустройство общественных
              пространств, улучшение транспортной системы, озеленение и
              экологическая безопасность, а также развитие социальной
              инфраструктуры.
            </p>
            <button
              className="text-appointment-btn"
              type="button"
              onClick={handleBookAppointmentClick}
            >
              <FontAwesomeIcon icon={faCalendarCheck} /> Зарегистрируйся!
            </button>
            <div className="text-stats">
              <div className="text-stats-container">
                <p>145k+</p>
                <p>Получили пользу!</p>
              </div>

              <div className="text-stats-container">
                <p>50k+</p>
                <p>Нашли работу!</p>
              </div>

              <div className="text-stats-container">
                <p>125k+</p>
                <p>Пользователей онлайн!</p>
              </div>
            </div>
          </div>

          <div className="hero-image-section">
            <img className="hero-image1" src={ManasImg1} alt="Doctor" />
          </div>
        </div>
      </Container>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
