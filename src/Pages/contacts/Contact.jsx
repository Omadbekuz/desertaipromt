import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contacts.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section
      id="contact"
      className="contact-container"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <h1>Contact Me</h1>

      <p className="contact-intro">
        If you'd like to collaborate, ask a question, or just say hi — feel free
        to reach out through any of the platforms below.
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <h3>📷 Instagram</h3>
          <a
            href="https://instagram.com/omadbek_live"
            target="_blank"
            rel="noopener noreferrer"
          >
            @omadbek_live
          </a>
        </div>

        <div className="contact-item">
          <h3>🐙 GitHub</h3>
          <a
            href="https://github.com/Omadbekuz"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Omadbekuz
          </a>
        </div>

        <div className="contact-item">
          <h3>✈️ Telegram</h3>
          <a
            href="https://t.me/Omadbek_live"
            target="_blank"
            rel="noopener noreferrer"
          >
            t.me/Omadbek_live
          </a>
        </div>

        <div className="contact-item">
          <h3>📧 Email</h3>
          <a href="mailto:omadbekcr7@gmail.com">
            omadbekcr7@gmail.com
          </a>
        </div>
      </div>

      <p className="footer-note">Looking forward to hearing from you!</p>
    </section>
  );
}

export default Contact;
