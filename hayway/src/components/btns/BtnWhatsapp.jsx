import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./btns.css";

const BtnWhatsapp = () => {
  return (
    <div className="wappContainer">
      <div className="wappBox">
        <a
          href="https://wa.me/543874842411?text=Hola%20me%20gustaría%20más%20información"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{
              fontSize: "30px",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default BtnWhatsapp;
