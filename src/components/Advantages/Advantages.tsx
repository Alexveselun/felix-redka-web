import React from "react";
import "./Advantages.css";

interface Advantage {
  id: number;
  title: string;
  description: string;
  date?: string; // Поле для дати, якщо необхідно
  button?: string; // Посилання для кнопки
  icon?: string; // Іконка для інших елементів
  backgroundImage?: string; // Фонове зображення
}

const advantages: Advantage[] = [
  {
    id: 1,
    title: "Таллінн",
    description: "Vana-Posti 8 Kino Sõprus",
    date: "16.01.2025 19.00",
    button: "https://secure.wayforpay.com/payment/tallinn0210",
  },
  {
    id: 2,
    title: "Рига",
    description: "Brivibas gatve 372 CINAMON Riga ALFA",
    date: "17.01.2025 20.00",
    button: "https://secure.wayforpay.com/payment/ryga0310",
  },
 {
    id: 3,
    title: "Вільнюс",
    description: "Mokytojų Namai, Vilniaus g. 39 Large Hall",
    date: "18.01.2025 19.00",
    button: "https://secure.wayforpay.com/payment/vilnus0410",
  },
  {
    id: 4,
    title: "Будапешт",
    description: "Ó utca 37 The Pulse",
    date: "19.01.2025 20.00",
    button: "https://secure.wayforpay.com/payment/budapest0810",
  },
];

const Advantages: React.FC = () => {
  return (
    <section className="advantages section" id="advantages">
      <div className="text-title">Європейський тур:</div>
      <div className="advantages list">
        {advantages.map((advantage) => (
          <div
            className="advantages item"
            key={advantage.id}
            // style={{
            //   height: "auto",
            // }}
          >
            {advantage.icon && (
              <div className="advantages_icon">{advantage.icon}</div>
            )}
            <div className="text-section">
            <h3 className="text_subtitle">{advantage.title}</h3>
            <p className="text_description">{advantage.description}</p>
            {advantage.date && (
              <p className="text_date">{advantage.date}</p>
            )}
            </div>
            <div className="button-container">
              {advantage.button && (
                <a
                  href={advantage.button}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Купити зараз
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
