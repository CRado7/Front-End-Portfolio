import React, { useState, useRef, useEffect } from "react";
import { fullAbout, blurbAbout} from "../data/about";
import "../styles/HeroStyles.css";

export default function HeroSection() {
    const [showFull, setShowFull] = useState(false);
    const aboutRef = useRef(null)
    const [height, setHeight] = useState("0px")

    useEffect(() => {
        if (aboutRef.current) {
            setHeight(showFull ? `${aboutRef.current.scrollHeight}px` : "0px");
        }
    }, [showFull]);

    return (
        <div className="container">
            <section className="hero-container">
                <h1>Christopher Ferraro</h1>
                <h2>Front-End Web Developer building scalable, product-focused websites</h2>
                <div className="about">
                    {!showFull && (
                        <p>{blurbAbout}{" "}<span onClick ={() => setShowFull(true)}>Read More</span></p>
                    )}
                    { showFull && (
                        <div className={`full-about ${showFull ? "show" : ""}`} ref={aboutRef}>
                            <img src="" alt="Christopher Ferraro" />
                            <p>{fullAbout}</p>
                            <span onClick={() => setShowFull(false)}>Close</span>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}