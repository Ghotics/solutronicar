import React from "react";
import { motion } from "framer-motion";
import "./ButtonGrid.scss";
import fapIcon from "../../assets/FAP.png";
import egrIcon from "../../assets/EGR.png";
import dtcIcon from "../../assets/DTC.png";
import tpmsIcon from "../../assets/TPMS.png";
import srsIcon from "../../assets/SRS.png";
import espIcon from "../../assets/ESP.png";

const ButtonGrid = () => {
  const images = [fapIcon, egrIcon, dtcIcon, tpmsIcon, srsIcon, espIcon];

  return (
    <div className="button-grid">
      {[...Array(6)].map((_, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.05 }}
          className="button-grid-item"
        >
          <img
            src={images[i] || `https://placehold.co/600x400`}
            alt={`Button ${i + 1}`}
            className="button-grid-image"
          />
        </motion.button>
      ))}
    </div>
  );
};


export default ButtonGrid;