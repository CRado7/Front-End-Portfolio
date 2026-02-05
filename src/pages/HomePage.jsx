import React from "react";
import HeroSection from "../components/Hero-Section"
import ProjectGrid from "../components/ProjectGrid";

export default function HomePage() {
    return (
        <section className="fill">
            <HeroSection />
            <ProjectGrid />
        </section>
    );
}