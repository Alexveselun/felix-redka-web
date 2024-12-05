import React, { useEffect, useState, useRef, useCallback } from "react";
import "./Header.css";

const Header: React.FC = () => {
  // const link = pageEnabled.splash ? "/splash" : "/home";
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

  // const navLinks = [
  //   { name: "Home", link: "/home", enabled: true },
  //   { name: "Experience", link: "/experience", enabled: pageEnabled.experience },
  //   { name: "Gallery", link: "/gallery", enabled: pageEnabled.blog },
  //   { name: "Projects", link: "/projects", enabled: pageEnabled.projects },
  //   { name: "IT", link: "/opensource", enabled: pageEnabled.opensource },
  //   { name: "Hobbies", link: "/hobbies", enabled: pageEnabled.hobbies },
  //   { name: "NewHome", link: "/newhome", enabled: pageEnabled.newhome },
  //   { name: "Contact", link: "/contact", enabled: pageEnabled.contact },
  // ];

  return (
    <>
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
            {/* <NavLink to={link}> */}
              <span className="logo-text">Girland Store</span>
            {/* </NavLink> */}
          </div>

          <ul className={`menu-list ${menuOpen ? "open" : ""}`}>
            <nav className="header_nav">
              <ul className="header_menu">
                <li className="header_item">
                  <a href="#hero" className="header_link">Головна</a>
                </li>
                <li className="header_item">
                  <a href="#advantages" className="header_link">Переваги</a>
                </li>
                <li className="header_item">
                  <a href="#reviews" className="header_link">Відгуки</a>
                </li>
                <li className="header_item">
                  <a href="#contacts" className="header_link">Контакти</a>
                </li>
              </ul>
            </nav>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
