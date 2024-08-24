import React from "react";
import { useState } from "react";
import { MagicMotion } from "react-magic-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import "./acordeon.css"

const Mision = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MagicMotion
      transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}
    >
      <div
        style={{
          padding: "1rem",
          borderRadius: 12,
          margin: "1rem 0",
          width: "80%",
        }}
        className="misionContainer"
      >
        <button
          style={{
            fontSize: "1.1em",
            fontWeight: 500,
            width: "100%",
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FontAwesomeIcon icon={faBullseye} />
            Misión
          </div>
          <svg
            key="exclude"
            style={{
              transform: `rotate(${isOpen ? 180 : 0}deg)`,
              transition: "320ms ease-in-out",
            }}
            width="20"
            height="20"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 10L15.6714 21L27.5 10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <div
            style={{
              gap: "1rem",
              display: "flex",
              flexDirection: "column",
              marginTop: "1rem",
            }}
          >
            <div>
              Nuestra misión es empoderar a cada miembro de nuestra comunidad
              para que alcance su máximo potencial, promoviendo un ambiente de
              apoyo, aprendizaje y desarrollo continuo. Creemos en el poder de
              la unidad y el trabajo en equipo para superar desafíos y crear un
              impacto positivo sostenible.
            </div>
          </div>
        )}
      </div>
    </MagicMotion>
  );
};

export default Mision;
