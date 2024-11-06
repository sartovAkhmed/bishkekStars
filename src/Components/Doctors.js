import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  const cardItems = [
    {
      img: profile1,
      name: "Kanybekov Maksat",
      title: "Frontend-developer",
      stars: "4.9",
      reviews: "1800",
    },
    {
      img: profile2,
      name: "Kanybekov Maksat",
      title: "Frontend-developer",
      stars: "4.9",
      reviews: "1800",
    },
    {
      img: profile3,
      name: "Kanybekov Maksat",
      title: "Frontend-developer",
      stars: "4.9",
      reviews: "1800",
    },
    {
      img: profile4,
      name: "Kanybekov Maksat",
      title: "Frontend-developer",
      stars: "4.9",
      reviews: "1800",
    },
  ];

  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Наши специалисты</span>
        </h3>

        <p className="dt-description">
          Наши эксперты — это профессионалы с многолетним опытом, которые
          постоянно совершенствуют свои навыки и следят за новыми трендами.
          Каждый из них прошел строгий отбор, прошел обучение и сертификацию,
          что гарантирует высокое качество нашей работы.
        </p>
      </div>

      <div className="dt-cards-content">
        {cardItems.map((item, id) => (
          <DoctorCard
            img={item.img}
            name={item.name}
            title={item.title}
            stars={item.stars}
            reviews={item.reviews}
            key={id}
          />
        ))}
      </div>
    </div>
  );
}

export default Doctors;
