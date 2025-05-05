import React from "react";
import "./TopMenu.scss";

const sections = ["top", "middle", "bottom"];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const TopMenu = () => {
  return (
    <nav className="top-menu">
      {sections.map((section) => (
        <button
          key={section}
          className="top-menu-button"
          onClick={() => scrollToSection(section)}
        >
          {section.toUpperCase()}
        </button>
      ))}
    </nav>
  );
};

export default TopMenu;