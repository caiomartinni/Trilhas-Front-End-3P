import React, { useState } from "react";

const ToggleVisibilidade = ({ texto }) => {
  const [visivel, setVisivel] = useState(false);

  return (
    <div>
      <button onClick={() => setVisivel(!visivel)}>
        {visivel ? "Ocultar" : "Mostrar"}
      </button>
      {visivel && <p>{texto}</p>}
    </div>
  );
};

export default ToggleVisibilidade;
