import React from "react";
import TopMenu from "../components/topMenu/TopMenu";
import Section from "../components/section/Section";
import ButtonGrid from "../components/buttonGrid/ButtonGrid";
import "./MainScreen.scss";
import logo from "../assets/logo.png";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <div className="main-screen-wrapper">
        {/* <TopMenu /> */}

        <Section id="top">
          <div className="main-screen-top-content">
            <img src={logo} alt="Company Logo" className="main-screen-logo" />

            <p className="main-screen-top-text">
              Servicio a domicilio de reparaciones electronicas de automovil
            </p>

            <ButtonGrid />

            <p className="main-screen-bottom-text">
              ¡Contáctanos! <br></br>600 06 56 74
            </p>
          </div>
        </Section>

        <Section id="middle">
          <p className="main-screen-placeholder">(Empty for now)</p>
        </Section>

        <Section id="bottom">
          <p className="main-screen-placeholder">(Contact section - empty for now)</p>
        </Section>
      </div>
    </div>
  );
};

export default MainScreen;
