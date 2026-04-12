import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav&FooterStyles.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="nav">
      <div className="nav-header">
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setOpen(false)}
          className={({ isActive }) => isActive ? "active" : ""}>
          Development
        </NavLink>

        <NavLink to="/email-design" onClick={() => setOpen(false)}
          className={({ isActive }) => isActive ? "active" : ""}>
          Email Design
        </NavLink>

        <NavLink to="/graphic-design" onClick={() => setOpen(false)}
          className={({ isActive }) => isActive ? "active" : ""}>
          Graphic Design
        </NavLink>

        <a
          href={`${import.meta.env.BASE_URL}Web_Resume_ChristopherFerraro.pdf`}
          download
          onClick={() => setOpen(false)}
        >
          Resume
        </a>

        <a
          href="mailto:christopher.ferraro34@gmail.com"
          onClick={() => setOpen(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
