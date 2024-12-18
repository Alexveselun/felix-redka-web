import React, { useEffect, useState, useRef, useCallback } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`} ref={menuRef}>
      <div className={`menu-container ${menuOpen ? "open" : ""}`}>
        <div className="menu-toggle">
          <input
            type="checkbox"
            className="menu-checkbox"
            id="menu-checkbox"
            checked={menuOpen}
            onChange={toggleMenu}
          />
          <label className="menu-icon" htmlFor="menu-checkbox">
            <span className="hamburger"></span>
          </label>
        </div>

        <div className="logo-container">
          <span className="logo-text">Felix Redka</span>
        </div>

        <ul className={`menu-list ${menuOpen ? "open" : ""}`}>
          <nav className="header_nav">
            <ul className="header_menu">
              <li className="header_item">
                <a href="/felix-redka-web/" className="text-title">Головна</a>
              </li>
            </ul>
          </nav>
        </ul>
      </div>
    </header>
  );
};

export default Header;
