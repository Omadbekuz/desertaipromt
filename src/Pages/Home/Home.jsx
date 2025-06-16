import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// imgs
import desertImg from "../../components/Assets/photos/13d2aedd-9de9-433d-a41e-fa855be301d6.png";
import desertImg2 from "../../components/Assets/photos/7f20c9f6-467d-4d57-8ef5-b2f471794eb8.png";
import "./Home.css";

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 5000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div id="Home">
      <div data-aos="fade-down-right" id="home_text">
        <h1>DESERT AI PROMPTS PRESENTS</h1>
        <p>
          This page offers a curated collection of high-quality, easy-to-use
          prompts designed to help users interact effectively with ChatGPT.
          Whether you're looking to boost creativity, enhance productivity, or
          simply explore the capabilities of AI, these prompts make it simple to
          get the most out of your ChatGPT experience.
        </p>
        <button
          className="glass-button"
          onClick={() => {
            const element = document.getElementById("prompts");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Explore Prompts
        </button>
      </div>
      <div id="home_img">
        <img data-aos="fade-up-right" src={desertImg} alt="desertImg" />
        <img data-aos="fade-up-left" src={desertImg2} alt="desertImg2" />
      </div>
    </div>
  );
}

export default Home;
