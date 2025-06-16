import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Promt.css";
import img1 from "../../components/Assets/photos/ChatGPT Image 17 июн. 2025 г., 00_48_25.png";
import img2 from "../../components/Assets/photos/ChatGPT Image 17 июн. 2025 г., 00_55_06.png";

const promptsData = [
  {
    title: "Cinematic Street Portrait",
    description:
      "Create a cinematic portrait of a young man standing still in the middle of a busy urban street. The background should show blurred motion of people walking past, with neon signs and traffic lights glowing in the distance. The subject is wearing a dark coat, looking slightly up, illuminated by soft moody lighting. 35mm film look, shallow depth of field, soft grain, high contrast.",
    img: img1,
  },
  {
    title: "Fantasy Floating Islands",
    description:
      "Generate a high-fantasy landscape featuring multiple floating islands above a glowing magical forest. Include cascading waterfalls falling from the islands, rainbow mist, bioluminescent plants, and a large glowing moon in the background. The atmosphere should feel surreal and dreamlike.",
    img: img2,
  },
];

function Promts() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
    });
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("✅ Prompt copied!");
  };

  return (
    <div className="prompts-container" id="prompts">
      <h2
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="prompts-heading"
      >
        🧠 AI Prompt Ideas
      </h2>
      <div className="prompt-list">
        {promptsData.map((prompt, index) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="prompt-row"
            key={index}
          >
            <div className="prompt-text">
              <h3>{prompt.title}</h3>
              <p>{prompt.description}</p>
              <button
                className="copy-button"
                onClick={() => copyToClipboard(prompt.description)}
              >
                Copy
              </button>
            </div>
            <div className="prompt-img-wrapper">
              <img src={prompt.img} alt={prompt.title} className="prompt-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Promts;
