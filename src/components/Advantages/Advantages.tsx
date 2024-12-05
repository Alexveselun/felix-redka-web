// src/components/Advantages/Advantages.tsx
import React from 'react';
import './Advantages.css';

const Advantages: React.FC = () => {
  const advantages = [
    {
      id: 1,
      title: 'Якість',
      description: 'Наші гірлянди виготовлені з високоякісних матеріалів, які забезпечують довговічність.',
      icon: '✨',
    },
    {
      id: 2,
      title: 'Швидка доставка',
      description: 'Доставляємо товар у будь-яку точку країни за 1–3 дні.',
      icon: '🚚',
    },
    {
      id: 3,
      title: 'Гарантія',
      description: 'Ми надаємо гарантію на всі наші товари протягом 12 місяців.',
      icon: '🛡️',
    },
  ];

  return (
    <section className="advantages section" id="advantages">
      <div className="text-title">Наші переваги:</div>
      <div className="advantages list">
        {advantages.map((advantage) => (
          <div className="advantages item" key={advantage.id}>
            <div className="advantages_icon">{advantage.icon}</div>
            <h3 className="advantages_subtitle">{advantage.title}</h3>
            <p className="advantages_description">{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
