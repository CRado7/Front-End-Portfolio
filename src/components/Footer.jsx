import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav&FooterStyles.css";

export default function Footer() {
    return (
        <footer>
            <a href="" download>Download Resume</a>
            <Link to="/email-design">Email Design</Link>
            <Link to="/grapic-design">Graphic Design</Link>
            <a href="https://linkedin.com/in/christopher-ferraro-7a3883170" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/CRado7" target="_blank" rel="noopener noreferrer">GitHub</a>
        </footer>
    )
}