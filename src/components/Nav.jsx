import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav&FooterStyles.css";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
        Development
      </NavLink>
      <NavLink to="/email-design" className={({ isActive }) => isActive ? "active" : ""}>
        Email Design
      </NavLink>
      <NavLink to="/graphic-design" className={({ isActive }) => isActive ? "active" : ""}>
        Graphic Design
      </NavLink>
      <a href={`${import.meta.env.BASE_URL}Web_Resume_ChristopherFerraro.pdf`} download>Resume</a>
      <a href="mailto:christopher.ferraro34@gmail.com">Contact</a>
    </nav>
  );
}
