import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="about-page">
      <section id="about-page" className="about-container" data-aos="fade-up">
        <h1>About This Website</h1>

        <p>Welcome to my personal portfolio website!</p>

        <p>
          I’m <strong>Omadbek</strong>, a passionate 17-year-old web developer
          and 11th-grade student from Uzbekistan. This website is a reflection
          of my journey in the world of programming and technology — where I
          showcase my skills, projects, and goals.
        </p>

        <h2>🎯 Purpose of This Site</h2>
        <ul>
          <li>
            Present my <strong>skills and experience</strong> in web
            development.
          </li>
          <li>
            Share my <strong>portfolio projects</strong>, including both
            frontend and backend applications.
          </li>
          <li>
            Provide a central place where{" "}
            <strong>clients or collaborators</strong> can learn more about me.
          </li>
          <li>Motivate other students and developers through my journey.</li>
        </ul>

        <h2>🚀 What I’ve Built</h2>
        <p>This website is created using:</p>
        <ul>
          <li>
            <strong>ReactJS</strong> for building interactive UI
          </li>
          <li>
            <strong>HTML, CSS, JavaScript</strong> for structure and logic
          </li>
          <li>
            <strong>Responsive design</strong> so it works well on phones and
            tablets
          </li>
        </ul>

        <p>
          Thanks for visiting! You can explore my projects, learn more about my
          skills, or contact me for collaboration.
        </p>
      </section>

      <section id="aboutme" className="about-sectionme" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          Hello! I'm <strong>Omadbek</strong>, a passionate and self-taught{" "}
          <strong>web developer</strong> from Uzbekistan. I’m currently a
          student in <strong>11th grade</strong>, and even at the age of 17,
          I’ve built a strong foundation in modern web technologies.
        </p>

        <p>
          My main focus is on <strong>front-end development</strong>, and I have
          solid experience with:
        </p>
        <ul>
          <li>HTML, CSS, and JavaScript</li>
          <li>ReactJS for building interactive web applications</li>
          <li>Node.js and Express.js for backend development</li>
        </ul>

        <p>
          I actively share my knowledge through free programming lessons via my
          Telegram channel, <strong>"upuitc"</strong>, helping others learn web
          development from scratch.
        </p>

        <p>In addition to coding, I also:</p>
        <ul>
          <li>
            Created my own personal portfolio website:{" "}
            <a
              href="https://omadbekportfolio.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              omadbekportfolio.netlify.app
            </a>
          </li>
          <li>
            Work on real-world projects like a backend system for a clinic
          </li>
          <li>Plan to stream PUBG gameplay on YouTube</li>
        </ul>

        <p>
          I’m always eager to learn, experiment with new technologies, and build
          meaningful digital experiences. If you’re looking for someone who’s
          creative, curious, and dedicated to growing in tech — I’m that person.
        </p>
      </section>
    </div>
  );
}

export default About;
