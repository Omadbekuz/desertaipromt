import React from "react";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 onClick={scrollToTop} className="footer-logo">
          Omadbek's Portfolio
        </h3>

        <div className="social-links">
          <a
            href="https://instagram.com/omadbek_live"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://github.com/Omadbekuz"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://t.me/Omadbek_live"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
        </div>

        <p className="footer-text">
          &copy; {currentYear} Omadbek. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
