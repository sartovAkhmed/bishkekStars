import React from "react";
import smileMan from "../Assets/smileMan.webp";
import SolutionStep from "./SolutionStep";
import { Container } from "./Container";
import "../Styles/About.css";

function About() {
  const solutionItems = [
    {
      title: "Обновление Общественного Транспорта",
      description:
        "Мы стремимся создать доступную и удобную систему транспорта, которая минимизирует пробки и улучшает экологическую обстановку в Бишкеке. Наши проекты по расширению и модернизации транспортной сети облегчат передвижение для всех жителей.",
    },
    {
      title: "Озеленение Города",
      description:
        "Бишкек нуждается в зелёных зонах, и мы создаём их! От парков до аллей — каждый зелёный уголок способствует улучшению качества воздуха и дарит жителям комфортные места для отдыха и общения.",
    },
    {
      title: "Создание Пешеходных Зон",
      description:
        "Безопасные и удобные пешеходные зоны — это шаг к улучшению городской среды. Мы работаем над проектами, которые позволят людям перемещаться по городу с комфортом, наслаждаясь чистыми и ухоженными тротуарами.",
    },
  ];

  return (
    <div className="about-section" id="about">
      <Container>
        <div className="aboutWrapper">
          <div className="about-image-content">
            <img src={smileMan} alt="Doctor Group" className="about-image1" />
          </div>

          <div className="about-text-content">
            <h3 className="about-title">
              <span>О нас</span>
            </h3>
            <p className="about-description">
              Добро пожаловать в "Бишкек Будущего" — вашего надежного партнера в
              улучшении городской среды. Наша команда экспертов работает над
              проектами, которые делают город более удобным, экологичным и
              привлекательным для жизни. Присоединяйтесь к нам в этом
              путешествии к процветающему и комфортному Бишкеку.
            </p>

            <h4 className="about-text-title">Наши решения</h4>

            {solutionItems.map((item, id) => (
              <SolutionStep
                title={item.title}
                description={item.description}
                key={id}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
