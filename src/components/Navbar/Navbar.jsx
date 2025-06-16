import React from "react";
import "./NAvbar.css";

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="Navbar">
      <div id="left">
        <button onClick={() => scrollToSection("/")} className="nav-btn">
          DESERT AI PROMPTS
        </button>
      </div>
      <div id="right">
        <button onClick={() => scrollToSection("prompts")} className="nav-btn">
          Prompts
        </button>
        <button onClick={() => scrollToSection("about")} className="nav-btn">
          About
        </button>
        <button onClick={() => scrollToSection("contact")} className="nav-btn">
          Contact
        </button>
      </div>
    </div>
  );
}

export default Navbar;
