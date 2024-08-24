import React from "react";
import "./Colaboraciones.css";

const Colaboraciones = () => {
  return (
    <div className="colaboracionesCont">
      <p>
        Tu apoyo es esencial para que sigamos transformando vidas. Gracias a tu
        aporte económico, podemos continuar nuestras investigaciones
        científicas, no solo en el campo del cannabis y sus efectos en el cuerpo
        humano, sino también en otras áreas que buscan mejorar la calidad de
        vida de las personas. A través del conocimiento y la colaboración
        colectiva, trabajamos para generar soluciones que impulsen el bienestar
        y el desarrollo comunitario. Tus contribuciones nos permiten avanzar en
        proyectos que potencian el cuidado de la salud, la educación y la
        innovación.
        <br />{" "}
        <span className="resaltado">
          {" "}
          Si deseas colaborar, aquí te dejamos nuestros datos:
        </span>
        <br /> Datos Bancarios:
      </p>
      <div>
        <p>Banco:</p>
        <p>Alias:</p>
        <p>CBU:</p>
        <p>Cuenta: Paypal/otros medios</p>
      </div>

      <p>
        Agradecemos profundamente tu confianza y tu compromiso en acompañarnos
        en esta misión. Juntos, seguimos construyendo un futuro más saludable y
        equitativo.
      </p>
    </div>
  );
};

export default Colaboraciones;
