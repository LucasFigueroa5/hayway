import React from "react";
import { useState } from "react";
import { MagicMotion } from "react-magic-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import "./acordeon.css"

const Valores = () => {
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
        className="valoresContainer"
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
            <FontAwesomeIcon icon={faHandHoldingHeart} />
            Valores
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
              En la Fundación Hayway, adherimos a valores que son el pilar de
              nuestra identidad y nuestras acciones: Empatía y Cooperación:
              Creemos en la fuerza de la comprensión mutua y el trabajo
              conjunto. Honestidad y Responsabilidad: Nos comprometemos con la
              integridad y la ética en cada acción que emprendemos. Creatividad
              y Visión de Futuro: Nos inspiramos unos a otros para innovar y
              liderar con el ejemplo hacia un futuro próspero. Lealtad: Nos
              dedicamos a cultivar relaciones duraderas basadas en la confianza
              y el respeto mutuo, tanto dentro de nuestra comunidad como con
              nuestros socios y colaboradores. La lealtad nos guía a permanecer
              fieles a nuestros principios y a las personas que apoyamos,
              asegurando la coherencia y la fuerza de nuestros compromisos a
              largo plazo. Estos valores guían nuestra conducta y nuestras
              decisiones, asegurando que cada paso que damos esté alineado con
              nuestra visión de un mundo donde cada persona tiene la oportunidad
              de prosperar.
            </div>
          </div>
        )}
      </div>
    </MagicMotion>
  );
};

export default Valores;
