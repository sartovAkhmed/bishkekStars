import React from "react";
import smilePeople from "../Assets/smile-people.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  const checksItems = [
    {
      title: "Современный Общественный Транспорт",
    },
    {
      title: "Зеленые Пространства и Парки",
    },
    {
      title: "Безопасные Улицы и Пешеходные Зоны",
    },
    {
      title: "Умные Технологии для Городского Управления",
    },
  ];

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={smilePeople} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Сделаем Бишкек лучше вместе!</span>
        </h3>
        <p className="ba-description">
          Узнайте, почему стоит поддержать инициативы по улучшению Бишкека. Наши
          проекты направлены на создание комфортной, безопасной и экологичной
          городской среды, которая повысит качество жизни каждого жителя.
          Присоединяйтесь к нам на пути к процветающему и современному Бишкеку.
        </p>

        {checksItems.map((item, id) => (
          <p key={id} className="ba-checks">
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#1E8FFD" }}
            />
            <span>{item.title}</span>
          </p>
        ))}

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Зарегистрируйся!
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
