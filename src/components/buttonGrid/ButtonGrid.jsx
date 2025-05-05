import React from "react";
import { motion } from "framer-motion";
import "./ButtonGrid.scss";

const ButtonGrid = () => {
  return (
    <div className="button-grid">
      {[...Array(6)].map((_, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.05 }}
          className="button-grid-item"
        >
          <img
            src={`https://via.placeholder.com/100x60?text=Btn+${i + 1}`}
            alt={`Button ${i + 1}`}
            className="button-grid-image"
          />
        </motion.button>
      ))}
    </div>
  );
};

export default ButtonGrid;