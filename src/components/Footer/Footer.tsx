// src/components/Footer/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <ul className="footer_links">
          <li>
            <a href="mailto:felixredka@ukr.net" className="footer_link">Організація концертів</a>
          </li>
        </ul>
        <p className="footer_text">© {new Date().getFullYear()} Всі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
