import React from "react";
import { useState } from "react";
import { MagicMotion } from "react-magic-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./acordeon.css"

const Vision = () => {
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
        className="visionContainer"
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
            <FontAwesomeIcon icon={faEye} />
            Visión
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
              En la Fundación Hayway, aspiramos a construir una comunidad global
              en la que cada individuo tenga las herramientas, el apoyo, y la
              inspiración necesarios para alcanzar su máximo potencial.
              Imaginamos un futuro donde la colaboración y la empatía no solo
              son valores fundamentales, sino prácticas cotidianas que impulsan
              el progreso colectivo. Nuestro objetivo es ser un referente en la
              promoción del desarrollo personal y social, creando un entorno
              donde las ideas innovadoras florecen y donde cada persona puede
              contribuir al bienestar común. Nos comprometemos a liderar con
              integridad y a fomentar un impacto positivo y duradero en todas
              las vidas que tocamos, siempre con la visión de un mundo más
              justo, inclusivo y próspero.
            </div>
          </div>
        )}
      </div>
    </MagicMotion>
  );
};

export default Vision;
