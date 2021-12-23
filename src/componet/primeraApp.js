import React from "react";
import PropTypes from "prop-types";

//Componentes funcionales
const PrimeraApp = (
  { 
  saludoPro, 
  otra, 
  subtitulo  

}

) => {
  const saludo = "Hola mundo desde constante";
  const numeros = 123456;
  const arreglo = [8, 7, 6, 5, 4];
  const objeto = {
    a: "a",
    b: "b",
    c: "c",
    d: "d",
  };
  return (
    <>
      <h1>Hola Mundo</h1>
      <h3>{subtitulo}</h3>
      <h5>
        {saludo} {numeros} {arreglo} {objeto.a} {saludoPro} {otra}
      </h5>
      <p>dgdfgsdfñjñdfksjdflksdjfkl</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludoPro: PropTypes.string.isRequired,
  otra: PropTypes.number.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;
