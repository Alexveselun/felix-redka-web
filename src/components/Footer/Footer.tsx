// src/components/Footer/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <p className="footer_text">© {new Date().getFullYear()} Всі права захищені.</p>
        <ul className="footer_links">
          <li>
            <a href="#advantages" className="footer_link">Переваги</a>
          </li>
          <li>
            <a href="#reviews" className="footer_link">Відгуки</a>
          </li>
          <li>
            <a href="#contacts" className="footer_link">Контакти</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
