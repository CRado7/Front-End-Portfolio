import React, { useState } from "react";
import { fullAbout, blurbAbout} from "../data/about"

export default function HeroSection() {
    const [showFull, setShowFull] = useState(false);

    return (
        <div className="container">
            <h1>Christopher Ferraro</h1>
            <h2>Front-End Web Developer building scalable, product-focused websites</h2>
            <div className="about">
                {!showFull && (
                    <p>{blurbAbout}{" "}<span onClick ={() => setShowFull(true)}>Read More</span></p>
                )}
                { showFull && (
                    <div className="full-about">
                        <img src="" alt="Christopher Ferraro" />
                        <p>{fullAbout}</p>
                        <button onClick={() => setShowFull(false)}>x</button>
                    </div>
                )}
            </div>
        </div>
    )
}