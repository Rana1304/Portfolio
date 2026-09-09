import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <a href="#home" className="navbar-logo">
        Jatin<span>.</span>
      </a>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>
          Skills
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>
          Projects
        </a>

        <a href="#experience" onClick={() => setMenuOpen(false)}>
          Experience
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>

      {/* Hamburger */}
      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
}

export default Navbar;