import React from "react";
import "./SocialIcons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";



interface SocialLink {
  name: string;
  link: string;
  fontAwesomeIcon: string; // FontAwesome клас іконки
  backgroundColor: string; // Колір фону іконки
}

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/felix.redka/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
  {
    name: "Telegram",
    link: "https://t.me/redkafamily",
    fontAwesomeIcon: "fa-telegram-plane",
    backgroundColor: "#0088CC",
  },
  {
    name: "Gmail",
    link: "mailto:felixredka@ukr.net",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/c/FelixRedka",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/@redka.felix",
    fontAwesomeIcon: "fa-tiktok",
    backgroundColor: "#000000",
  },
];

const SocialIcons: React.FC = () => {
  return (
    <div className="social-ico-block">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social-ico"
          style={{ backgroundColor: link.backgroundColor }}
          aria-label={link.name}
        >
          <i className={`fab ${link.fontAwesomeIcon}`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
