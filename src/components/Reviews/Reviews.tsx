// src/components/Reviews/Reviews.tsx
import React from 'react';
import './Reviews.css';

const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Ольга М.',
      text: 'Дуже задоволена покупкою! Гірлянди виглядають чудово, а доставка була надзвичайно швидкою.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Андрій К.',
      text: 'Все на найвищому рівні! Гірлянди працюють бездоганно, дякую за якісний товар.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Ірина С.',
      text: 'Замовила для новорічного декору – це було найкраще рішення. Рекомендую всім!',
      rating: 5,
    },
  ];

  return (
    <section className="reviews section" id="reviews">
      <h2 className="text_title ">Відгуки клієнтів</h2>
      <div className="reviews list">
        {reviews.map((review) => (
          <div className="reviews item" key={review.id}>
            <h3 className="reviews_name">{review.name}</h3>
            <p className="reviews_text">"{review.text}"</p>
            <div className="reviews_rating">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
