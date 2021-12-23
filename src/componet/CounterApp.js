import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  /*Para que funciones el contador se crea un hooks que regresa un arreglo  [nombre variable, funcionNombre]*/

  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    // setCounter(counter + 1);
    setCounter((c) => c + 1); //puede recibir tambien una funcion cuyo retorno rera el nuevo lavor de counter
  };

  const handleSubTract = () => setCounter(counter - 1);
  
  const handleReset = () => setCounter(value);


  return (
    <>
      <h1>CounterApp</h1>
      <h3>{counter}</h3>

      <button onClick={handleAdd}> + 1 ...</button>
      <button onClick={handleReset}> Reset</button>
      <button onClick={handleSubTract}> - 1 ...</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
