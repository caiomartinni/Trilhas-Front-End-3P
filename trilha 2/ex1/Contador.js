import React, { useState } from "react";

const Contador = ({ inicial }) => {
  const [contador, setContador] = useState(inicial);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
  );
};

export default Contador;
