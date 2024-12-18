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
            <a href="mailto:felixredka@ukr.net" className="footer_link">Написати мені</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
