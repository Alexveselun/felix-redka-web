import React from "react";
import "./Advantages.css";

interface Advantage {
  id: number;
  title: string;
  addressSection?: {//+
    title: string;//+
    location_map_link: string;//+
  };
  date?: string; // Поле для дати, якщо необхідно
  button?: string; // Посилання для кнопки
  icon?: string; // Іконка для інших елементів
  backgroundImage?: string; // Фонове зображення
  
}

const advantages: Advantage[] = [
  {
    id: 1,
    title: "Таллінн",
    addressSection: {
      title:  "Vana-Posti 8 Kino Sõprus",
      location_map_link: 
        "https://maps.app.goo.gl/Mhy6RJQptCKqbbto7",
    },
    date: "16.01.2025 19.00",
    button: "https://secure.wayforpay.com/payment/tallinn0210",
  },
  {
    id: 2,
    title: "Рига",
    addressSection: {
      title:  "Brivibas gatve 372 CINAMON Riga ALFA",
      location_map_link:
        "https://maps.app.goo.gl/gRkE6n4eoHwfoHVq9",
    },
    date: "17.01.2025 20.00",
    button: "https://secure.wayforpay.com/payment/ryga0310",
  },
 {
    id: 3,
    title: "Вільнюс",
    addressSection: {
      title:  "Mokytojų Namai, Vilniaus g.39 Large Hall",
      location_map_link:
        "https://maps.app.goo.gl/DLicFmV9xBYAv5fH9",
    },
    date: "18.01.2025 19.00",
    button: "https://secure.wayforpay.com/payment/vilnus0410",
  },
  {
    id: 4,
    title: "Будапешт",
    addressSection: {
      title:  "Ó utca 37 The Pulse",
      location_map_link:
        "https://maps.app.goo.gl/uSmZ7Au6j8BXnGPf6",
    },
    date: "19.01.2025 20.00",
    button: "https://secure.wayforpay.com/payment/budapest0810",
  },
];

const Advantages: React.FC = () => {
  const formatDescription = (description: string): string => {
    const words = description.split(' ');
    let formatted = '';
    let line = '';

    words.forEach((word) => {
      if ((line + word).length > 20) {
        formatted += line.trim() + '\n';
        line = word + ' ';
      } else {
        line += word + ' ';
      }
    });

    if (line.trim()) {
      formatted += line.trim();
    }

    return formatted;
  };

  return (
    <section className="advantages section" id="advantages">
      <div className="text-title">Європейський тур:</div>
      <div className="advantages list">
        {advantages.map((advantage) => (
          <div className="advantages item" key={advantage.id}>
            {advantage.icon && (
              <div className="advantages_icon">{advantage.icon}</div>
            )}
            <div className="text-section">
              <h3 className="text_subtitle">{advantage.title}</h3>
              <p className="text_description">
                <a
                  href={advantage.addressSection?.location_map_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {advantage.addressSection && formatDescription(advantage.addressSection.title).split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </a>
              </p>
              {advantage.date && <p className="text_date">{advantage.date}</p>}
            </div>
            <div className="button-container">
              {advantage.button && (
                <a
                  href={advantage.button}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Купити квиток
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
