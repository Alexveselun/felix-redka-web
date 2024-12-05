// src/components/ContactForm/ContactForm.tsx
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Дякуємо за ваше повідомлення!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-form section" id="contacts">
      <h2 className="text-title">Контакти</h2>
      <form className="contact-form_form" onSubmit={handleSubmit}>
        <div className="contact-form_field">
          <label htmlFor="name" className="contact-form_label">Ім'я</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact-form_input"
            placeholder="Ваше ім'я"
            required
          />
        </div>
        <div className="contact-form_field">
          <label htmlFor="email" className="contact-form_label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact-form_input"
            placeholder="Ваш email"
            required
          />
        </div>
        <div className="contact-form_field">
          <label htmlFor="message" className="contact-form_label">Повідомлення</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="contact-form_textarea"
            placeholder="Ваше повідомлення"
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-form_button">Надіслати</button>
      </form>
    </section>
  );
};

export default ContactForm;
