import React from "react";
import "./Section.scss";

const Section = ({ id, children }) => (
  <section id={id} className="section">
    {children}
  </section>
);

export default Section;
