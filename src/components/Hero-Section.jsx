import React, { useState } from "react";
import { fullAbout, blurbAbout } from "../data/about";
import ProfilePicture from "../assets/profile_picture.jpeg";
import "../styles/HeroStyles.css";

export default function HeroSection() {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="container">
      <section className="hero-container">
        <h1>Christopher Ferraro</h1>
        <h2>Front-End Developer & Web Designer</h2>

        <div className="about">
          {!showFull ? (
            <p>
              {blurbAbout}{" "}
              <span onClick={() => setShowFull(true)}>Read more</span>
            </p>
          ) : (
            <div className="full-about">
              <img src={ProfilePicture} alt="Christopher Ferraro" />
              <p>{fullAbout}</p>
              <span onClick={() => setShowFull(false)}>Collapse</span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
